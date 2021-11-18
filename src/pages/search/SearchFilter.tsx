import React from "react"
import { Stack, Box } from "@chakra-ui/react"

interface SearchFilterProps {
  title?: string
  backgroundImage?: string
}

const SearchFilter = (props: SearchFilterProps): JSX.Element => {

  return(
    <>
      <Stack w={'100%'}>
        <Box>This is Search Filter</Box>
      </Stack>
    </>
  )
}

export default SearchFilter