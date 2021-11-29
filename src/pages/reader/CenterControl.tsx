import React, { useState, useEffect } from "react"
import { Document, Page, Outline, pdfjs } from 'react-pdf'
import pdfjsWorker from "react-pdf/node_modules/pdfjs-dist/build/pdf.worker.entry"
import {
  Box,
  Stack,
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
} from "@chakra-ui/react"
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
import { CloseButton } from "@chakra-ui/close-button"

import Reader from "./Reader"
import { useWindowSize } from "../../hooks/useWindowSize"
import { Docs } from "../../assets"

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker

interface ContainerProps {
  navItems?: Array<ContainerProps>
}

 const CenterControl = (props: ContainerProps): JSX.Element => {
  const [computedWidth, setComputedWidth] = useState(0)
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const { width } = useWindowSize() as any

  useEffect(() => {
    setComputedWidth(width - 370)
  }, [width])

  
function onDocumentLoadSuccess({ numPages }) {
  setNumPages(numPages);
  setPageNumber(1);
}

function changePage(offset) {
  setPageNumber(prevPageNumber => prevPageNumber + offset);
}

function previousPage() {
  changePage(-1);
}

function nextPage() {
  changePage(1);
}
function onItemClick({ pageNumber: itemPageNumber }) {
  setPageNumber(itemPageNumber);
}

  return (
    <>
      <Stack position={'relative'} bg={'#f7fafc'}>
        <Stack
          direction={'row'}
          justifyContent={'space-around'}
          position={'fixed'}
          bg={'#f7fafc'}
          w={['75%', '75%', '75%']}
          zIndex={2}
          padding={['10px 30px']}
        >
          <Stack
            w={'30%'}
            bg={'#edf2f7'}
            justifyContent={'flex-start'}
            position={'relative'}
          >
            <InputGroup size={'sm'} bg={'#f7fafc'}>
              <Input placeholder="Search within document" />
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
            w={'50%'}
            justifyContent={'flex-end'}
          >
            <ButtonGroup
              size={'sm'}
              w={'auto'}
              justifyContent={'flex-end'}
              bg={'#edf2f7'}
            >
              <IconButton
                borderRadius={0}
                aria-label={'icon'}
                icon={<AiFillStepBackward />}
                onClick={previousPage}
                disabled={pageNumber <= 1}
              />
              <IconButton borderRadius={0} aria-label={'icon'} icon={<AiFillBackward />} />
              <IconButton borderRadius={0} aria-label={'icon'} icon={<AiFillForward />} />
              <IconButton
                borderRadius={0}
                aria-label={'icon'}
                icon={<AiFillStepForward />}
                disabled={pageNumber >= numPages}
                onClick={nextPage}
              />
            </ButtonGroup>
            <InputGroup w={'20%'} size={'sm'}>
              <Input value={pageNumber || (numPages ? 1 : '--')} />
              <InputRightAddon children={numPages || '--'} />
            </InputGroup>
          </Stack>
        </Stack>
        <Stack>
          <Stack paddingTop={10} position={'relative'}>
            <Alert status="warning">
              <AlertIcon />
              <Box flex="1">
                <AlertTitle>Preview Mode!</AlertTitle>
                <AlertDescription display="block">
                You can view only a fraction of each document. If you are a library patron and need full access
                please refer to your librarian. If you are an individual contact Al Manhal directly.
                </AlertDescription>
              </Box>
              <CloseButton position="absolute" right="8px" top="8px" />
            </Alert>
          </Stack>
          <Center paddingTop={0} bg="white">
            <Stack bg="white">
              <Document
                file={Docs.samplePDF}
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Outline onItemClick={onItemClick} />
                <Page pageNumber={pageNumber || 1} />
              </Document>
            </Stack>
          </Center>
        </Stack>
      </Stack>
    </>
  )
}

export default CenterControl
