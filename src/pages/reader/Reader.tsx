import React, { useState, useEffect } from "react"
import { Stack, useBreakpointValue } from "@chakra-ui/react"
import { Document, Page, Outline, pdfjs } from 'react-pdf'
import pdfjsWorker from "react-pdf/node_modules/pdfjs-dist/build/pdf.worker.entry"

import { useWindowSize } from "../../hooks/useWindowSize"
import { Docs } from "../../assets"

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker

interface CategoryProps {
  navItems?: Array<CategoryProps>
}

const Category = (props: CategoryProps): JSX.Element => {
  const [computedWidth, setComputedWidth] = useState(0)
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const { width } = useWindowSize() as any

  useEffect(() => {
    setComputedWidth(width - 370)
  }, [width])

console.log(computedWidth)

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

  return(
    <>
      <Stack bg="white">
        <Document
          file={Docs.samplePDF}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.from(
            new Array(numPages),
            (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={computedWidth}
              />
            ),
          )}
        </Document>
        <div>
          <p>
            Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
          </p>
          <button
            type="button"
            disabled={pageNumber <= 1}
            onClick={previousPage}
          >
            Previous
          </button>
          <button
            type="button"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
          >
            Next
          </button>
        </div>
      </Stack>
    </>
  )
}

export default Category;