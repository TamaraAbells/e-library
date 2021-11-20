import React from "react"
import { Stack, Spacer } from "@chakra-ui/react"
import { useQuery } from "react-query"
import { getSearchResult } from "../../services/request"
import SearchResult from "./SearchResult"
import SearchFilter from "./SearchFilter"
import SearchHero from "./SearchHero"
import { Images } from "../../assets"

const navItems = [
  { title: 'Main Subjects', items: [{ label: 'Home', href: '#' },{ label: 'Services', href: '#' }]},
  { title: 'Language', items: [{ label: 'Home', href: '#' },{ label: 'Services', href: '#' }]},
  { title: 'Country', items: [{ label: 'Home', href: '#' },{ label: 'Services', href: '#' }]},
  { title: 'University', items: [{ label: 'Home', href: '#' },{ label: 'Services', href: '#' }]},
  { title: 'Department', items: [{ label: 'Home', href: '#' },{ label: 'Services', href: '#' }]},
  { title: 'Authors', items: [{ label: 'Home', href: '#' },{ label: 'Services', href: '#' }]},
  { title: 'Topics', items: [{ label: 'Home', href: '#' },{ label: 'Services', href: '#' }]},
]

const books = [
  { title: 'Book Title For One Book', author: 'Jarez Polli', journal: 'Jupiter Ascending', topic: 'Law', publisher: 'AuthOne', image: Images.CategoryImages.Art },
  { title: 'Book Title For Two Book', author: 'Elixerbeth Polli', journal: 'Fouruer Serues', topic: 'Education', publisher: 'Albert Kaon', image: Images.CategoryImages.Educational },
  { title: 'Title For Three Book', author: 'Jarez Polli', journal: 'Akadd Dees', topic: 'Science', publisher: 'Figma Sank', image: Images.CategoryImages.Science },
]

interface SearchProps {
    navItems?: Array<SearchProps>;
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
          padding={['10px 20px', '10px 30px']}
        >
          <Stack w={['100%', '30%']}>
            <SearchFilter navItems={navItems} />
          </Stack>
          <Spacer />
          <Spacer />
          <Stack w={['100%', '70%']}>
            <Stack w={'100%'}>
              {books.map((book) => ( <SearchResult book={book} /> ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}

export default Search;