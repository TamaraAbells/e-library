import React, { useState, useEffect } from "react"
import { Document, Page, Outline, pdfjs } from 'react-pdf'
import pdfjsWorker from "react-pdf/node_modules/pdfjs-dist/build/pdf.worker.entry"
import {
  List,
  ListItem,
  ListIcon,
  Box,
  Stack,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  InputRightAddon,
  Center,
  IconButton,
  ButtonGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Checkbox,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  SimpleGrid,
  useDisclosure,
  useBreakpoint,
} from "@chakra-ui/react"
import {
  IoMdDownload,
  IoMdPhotos,
  IoMdPrint,
  IoMdShare,
  IoMdChatboxes,
  IoMdBook,
  IoMdCreate
} from "react-icons/io"
import {
  FiSearch,
  FiChevronDown
} from "react-icons/fi"
import {
  AiFillStepBackward,
  AiFillBackward,
  AiFillForward,
  AiFillStepForward
} from "react-icons/ai"
import {
  MdFormatListBulleted,
  MdInfoOutline
} from "react-icons/md"
import { CloseButton } from "@chakra-ui/close-button"
import { useWindowSize } from "../../hooks/useWindowSize"
import { Docs } from "../../assets"

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker

interface ContainerProps {
  navItems?: Array<ContainerProps>
  numPages?: number
  winSize?: number

}

 const Container = (props: ContainerProps): JSX.Element => {
  const { isOpen, onToggle } = useDisclosure()
  const [computedWidth, setComputedWidth] = useState(0)
  const [numPages, setNumPages] = useState() as any
  const [pageNumber, setPageNumber] = useState(1)
  const { width: winSize } = useWindowSize() as any
  const breakPoint = useBreakpoint()

  useEffect(() => {
    breakPoint === 'md' ? (
      setComputedWidth(winSize - 350)
    ) : breakPoint === 'lg' ? (
      setComputedWidth(winSize - 450)
    ) : breakPoint === 'sm' ? (
      setComputedWidth(winSize - 50)
    ) : breakPoint === 'base' ? (
      setComputedWidth(winSize - 50)
    ) : setComputedWidth(winSize - 450)
  }, [winSize, breakPoint])
  
  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset: number) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function firstPage() {
    setPageNumber(1);
  }
  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }
  function lastPage() {
    setPageNumber(numPages);
  }
  function onItemClick({ pageNumber: itemPageNumber }: any) {
    setPageNumber(itemPageNumber);
  }

  return(
    <>
      <Document
        file={Docs.samplePDF}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Stack
          padding={['20px', '50px']}
          paddingTop={['52px', '60px']}
          direction={{ base: 'column', md: 'row' }}
          justifyContent={'space-between'}
          bg={'#f7fafc'}
          position={'relative'}
        >
          <Stack
            flex={3}
            marginTop={['50px !important']}
            order={{ base: 2, md: 1 }}
          >
            <Stack position={{ base: 'static', md: 'fixed' }} w={['100%', '13%']}>
              <Accordion allowToggle>
                <AccordionItem>
                  <AccordionButton justifyContent={'space-between'}>
                    <MdFormatListBulleted />
                    <Text>Contents</Text>
                      <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4} lineHeight={7}>
                    <Outline onItemClick={onItemClick} />
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionButton justifyContent={'space-between'}>
                    <MdInfoOutline />
                    <Text>Details</Text>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Stack>
          </Stack>
          <Stack flex={1} bg={'#f7fafc'} order={{ base: 1, md: 2 }}>
            <Stack bg={'#f7fafc'}>
              <Stack
                direction={{ base: 'column', md: 'row' }}
                justifyContent={'start'}
                position={'fixed'}
                bg={'#f7fafc'}
                w={['100%', '84%']}
                zIndex={2}
                padding={['10px 0', '10px 0px']}
              >
                <Stack
                  w={['89%', '30%']}
                  bg={'#edf2f7'}
                  justifyContent={{ base: 'center', md: 'flex-start' }}
                  position={'relative'}
                >
                  <InputGroup size={'sm'} bg={'#f7fafc'}>
                    <Input
                      placeholder={'Search within document'}
                    />
                    <InputRightElement
                      marginRight={8}
                      borderRadius={0}
                      as={IconButton}
                      icon={<FiSearch />}
                    />
                    <InputRightElement
                      children={
                        <Menu>
                        {({ isOpen }) => (
                          <>
                            <MenuButton
                              size={'sm'}
                              borderRadius={0}
                              isActive={isOpen}
                              as={IconButton}
                              icon={<FiChevronDown />}
                            />
                            <MenuList>
                              <MenuItem>
                                <Checkbox>Highlights</Checkbox>
                              </MenuItem>
                              <MenuItem>
                                <Checkbox>Match case</Checkbox>
                              </MenuItem>
                              <MenuItem>
                                <Checkbox>Match full phrase</Checkbox>
                              </MenuItem>
                            </MenuList>
                          </>
                        )}
                      </Menu>
                      }
                    />
                  </InputGroup>
                </Stack>
                <Stack
                  direction={'row'}
                  w={['89%', '100%']}
                  justifyContent={{ base: 'center' }}
                >
                  <ButtonGroup
                    size={'sm'}
                    w={['75%', '75%', '30%', '39%']}
                    justifyContent={'space-between'}
                    bg={'#edf2f7'}
                  >
                    <IconButton
                      borderRadius={0}
                      aria-label={'icon'}
                      icon={<AiFillStepBackward />}
                      onClick={firstPage}
                      disabled={pageNumber <= 1}
                    />
                    <IconButton
                      borderRadius={0}
                      aria-label={'icon'}
                      icon={<AiFillBackward />}
                      disabled={pageNumber <= 1}
                      onClick={previousPage}
                    />
                    <IconButton
                      borderRadius={0}
                      aria-label={'icon'}
                      icon={<AiFillForward />}
                      disabled={pageNumber >= numPages}
                      onClick={nextPage}
                    />
                    <IconButton
                      borderRadius={0}
                      aria-label={'icon'}
                      icon={<AiFillStepForward />}
                      disabled={pageNumber >= numPages}
                      onClick={lastPage}
                    />
                  </ButtonGroup>
                  <InputGroup w={['25%', '10%']} size={'sm'}>
                    <Input value={pageNumber || (numPages ? 1 : '--')} />
                    <InputRightAddon children={numPages || '--'} />
                  </InputGroup>
                </Stack>
              </Stack>
              <Stack>
                <Stack paddingTop={['90px', 10]} position={'relative'}>
                  <Alert status={'warning'}>
                    <AlertIcon />
                    <Box flex={'1'}>
                      <AlertTitle>Preview Mode!</AlertTitle>
                      <AlertDescription display={'block'} fontSize={['xs', 'md']} lineHeight={[1.5, 'normal']}>
                      You can view only a fraction of each document. If you are a library patron and need full access
                      please refer to your librarian. If you are an individual contact Al Manhal directly.
                      </AlertDescription>
                    </Box>
                    <CloseButton position={'absolute'} right={'8px'} top={'8px'} />
                  </Alert>
                </Stack>
                <Center paddingTop={0} bg={'white'}>
                  <Stack bg={'white'}>
                    <Page pageNumber={pageNumber || 1} width={computedWidth} />
                  </Stack>
                </Center>
              </Stack>
            </Stack>
          </Stack>
          <Stack flex={2} marginTop={'60px !important'} order={{ base: 3, md: 3 }}>
            <Stack position={{ base: 'static', md: 'fixed' }} w={['100%', '13%']}>
              <List spacing={3}>
                <SimpleGrid columns={[2, null, 1]} spacing={2}>
                  <ListItem>
                    <ListIcon as={IoMdDownload} color="green.500" />
                    Download
                  </ListItem>
                  <ListItem>
                    <ListIcon as={IoMdPhotos} color="green.500" />
                    Screenshot
                  </ListItem>
                  <ListItem>
                    <ListIcon as={IoMdPrint} color="green.500" />
                    Print
                  </ListItem>
                  <ListItem>
                    <ListIcon as={IoMdShare} color="green.500" />
                    Share
                  </ListItem>
                  <ListItem>
                    <ListIcon as={IoMdChatboxes} color="green.500" />
                    Anotate
                  </ListItem>
                  <ListItem>
                    <ListIcon as={IoMdBook} color="green.500" />
                    Cite
                  </ListItem>
                  <ListItem>
                    <ListIcon as={IoMdCreate} color="green.500" />
                    Highlight
                  </ListItem>
                </SimpleGrid>
              </List>
            </Stack>
          </Stack>
        </Stack>
      </Document>
    </>
  )
}

export default Container
