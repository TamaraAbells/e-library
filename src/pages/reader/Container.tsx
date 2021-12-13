import React, { useState, useEffect, useMemo, useRef, createRef } from "react"
import ReactPDF from "@intelllex/react-pdf"
import { useDebounce } from "use-debounce"
import DownloadLink from "react-download-link"
import { useReactToPrint } from "react-to-print"
import { Document, Page, Outline, pdfjs } from "react-pdf"
import { PDFReader } from 'reactjs-pdf-reader';
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

  function handlePageChange(page: number){
    console.log('handlePageChange', page)
  }

  function handleZoomIn(){
    console.log('handleZoomIn')
  }
  function handleZoomOut(){
    console.log('handleZoomOut')
  }

  return(
    <>
      <Stack h={'100vh'}>
        <ReactPDF
          url={`${process.env.REACT_APP_BASE_URL}/${Docs.samplePDF}`}
          showProgressBar
          showToolbox
          onChangePage={handlePageChange}
          onZoomIn={handleZoomIn}
          onZoomOut={handleZoomOut}
        />
      </Stack>
    </>
  )
}

export default Container
