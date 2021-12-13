import React, { useState, useEffect, useMemo, useRef, createRef } from "react"
import { useDebounce } from "use-debounce"
import DownloadLink from "react-download-link";
import { useReactToPrint } from 'react-to-print'
import { Document, Page, Outline, pdfjs } from 'react-pdf'
import { useScreenshot, createFileName } from "use-react-screenshot"
import pdfjsWorker from "react-pdf/node_modules/pdfjs-dist/build/pdf.worker.entry"
import {
  List,
  ListItem,
  ListIcon,
  Link,
  Box,
  Stack,
  Text,
  Input,
  Image,
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
  Button,
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
  useToast,
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
import { usePdfTextSearch } from "../../hooks/usePdfTextSearch"

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker

interface ContainerProps {
  navItems?: Array<ContainerProps>
  numPages?: number
  winSize?: number

}

 const Container = (props: ContainerProps): JSX.Element => {
  const [computedWidth, setComputedWidth] = useState(0)
  const [numPages, setNumPages] = useState() as any
  const [pageNumber, setPageNumber] = useState(1)
  const { width: winSize } = useWindowSize() as any
  const breakPoint = useBreakpoint()
  const toast = useToast()
  const printRef = useRef()
  const screenshotRef = createRef(null);
  const [searchString, setSearchString] = useState('')
  const [debouncedSearchString] = useDebounce(searchString, 250)

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

  const searchResults = usePdfTextSearch(Docs.samplePDF, debouncedSearchString);

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  const [image, takeScreenshot] = useScreenshot()
  const getImage = () => takeScreenshot(screenshotRef.current)

  /* 
    This textRenderer highlight pattern is from the Recipes in the react-pdf docs:
    https://github.com/wojtekmaj/react-pdf/wiki/Recipes#highlight-text-on-the-page
    But this is not currently working as I would expect. Needs work.
  */
  const textRenderer = useMemo(
    (textItem) => {
      if (!textItem) return null;
      return highlightPattern(textItem.str, debouncedSearchString);
    },
    [debouncedSearchString]
  );

  let resultText =
    searchResults.length === 1
      ? "Results found on 1 page"
      : `Results found on ${searchResults.length} pages`;

  if (searchResults.length === 0) {
    resultText = "no results found";
  }

  // if (searchResults.length > 0) {
  //   toast({
  //     title: 'In Search.',
  //     description: resultText,
  //     status: 'info',
  //     duration: 1000,
  //     isClosable: true,
  //   })
  // }
  
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
                      type={'search'}
                      placeholder={'Search within document'}
                      value={searchString}
                      onChange={(e) => setSearchString(e.target.value)}
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
                  {searchString && (
                    <Alert status='info'>
                      <AlertIcon />
                      {resultText}
                    </Alert>
                  )}
                </Stack>
                <Center paddingTop={0} bg={'white'} ref={printRef}>
                  <Stack bg={'white'} width={computedWidth}>
                    {searchString &&
                      searchResults ? (
                        searchResults.map((searchResultPageNumber) => (
                          <Page
                            ref={screenshotRef}
                            key={searchResultPageNumber}
                            pageNumber={searchResultPageNumber}
                            customTextRenderer={textRenderer}
                            width={computedWidth}
                          />
                        ))
                      ) : (
                        Array.from(
                          new Array(numPages),
                          (el, index) => (
                            <Page
                              ref={screenshotRef}
                              key={`page_${index + 1}`}
                              pageNumber={index + 1}
                              width={computedWidth}
                              customTextRenderer={textRenderer}
                            />
                          ),
                        )
                      
                    )}
                  </Stack>
                </Center>
              </Stack>
            </Stack>
          </Stack>
          <Stack flex={2} marginTop={'60px !important'} order={{ base: 3, md: 3 }}>
            <Stack position={{ base: 'static', md: 'fixed' }} w={['100%', '13%']}>
              <List spacing={3}>
                <SimpleGrid columns={[2, null, 1]} spacing={2}>
                  <ListItem as={Link}>
                    <ListIcon as={IoMdDownload} color="green.500" />
                      <DownloadLink
                        label="Download"
                        filename={Docs.samplePDF}
                        exportFile={() => "My cached data"}
                      />
                  </ListItem>
                  <ListItem as={Link} onClick={getImage}>
                    <ListIcon as={IoMdPhotos} color="green.500" />
                    Screenshot
                  </ListItem>
                  <Image src={image} />
                  <ListItem as={Link} onClick={handlePrint}>
                    <ListIcon as={IoMdPrint} color="green.500" />
                    Print
                  </ListItem>
                  <ListItem as={Link}>
                    <ListIcon as={IoMdShare} color="green.500" />
                    Share
                  </ListItem>
                  <ListItem as={Link}>
                    <ListIcon as={IoMdChatboxes} color="green.500" />
                    Anotate
                  </ListItem>
                  <ListItem as={Link}>
                    <ListIcon as={IoMdBook} color="green.500" />
                    Cite
                  </ListItem>
                  <ListItem as={Link}>
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
