import React from "react"
import { Stack, Box } from "@chakra-ui/react"

interface SearchResultProps {
  title?: string
  backgroundImage?: string
}

const SearchResult = (props: SearchResultProps): JSX.Element => {

  return(
    <>
      <Stack w={'100%'}>
        <Box>This is Search Result</Box>
      </Stack>
    </>
  )
}

export default SearchResult