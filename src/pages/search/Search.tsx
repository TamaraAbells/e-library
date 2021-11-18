import React from "react"
import {
  Box,
  Stack,
  Center,
  Spinner,
  useBreakpointValue
} from "@chakra-ui/react"
import { useQuery } from "react-query"
import { getSearchResult } from "../../services/request"
import SearchResult from "./SearchResult"
import SearchFilter from "./SearchFilter"
import SearchHero from "./SearchHero"

interface SearchProps {
    title?: string
    backgroundImage?: string
  }

const Search = (props: SearchProps): JSX.Element => {
  // const { isLoading, error, data } = useQuery('SearchQuery', async() => (getSearchResult()))
  // if(isLoading) return (<Center height={'50vh'}><Spinner /></Center>)
//    if(error) return error

  return(
    <>
      <Stack>
        <SearchHero />
        <Stack
          w={'100%'}
          direction={{ base: 'column', lg: 'row' }}
          padding={['10px 30px', '50px 100px']}
        >
          <Box>
            <SearchFilter />
          </Box>
          <Box>
            <SearchResult />
          </Box>
        </Stack>
      </Stack>
    </>
  )
}

export default Search;