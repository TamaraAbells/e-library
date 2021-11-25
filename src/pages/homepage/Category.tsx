import React from "react"
import {
  Center,
  Spinner,
  Heading,
  SimpleGrid,
  Text,
  Stack,
  } from '@chakra-ui/react'
import Card from "../../components/cards/Card"

interface CategoryProps {
  title?: string
  backgroundImage?: string,
  categories?: Array<CategoryProps>
}

const Category = ({ categories }: CategoryProps) => {
  console.log('CATEGORis', categories)
 return (
    <>
      <Stack
        alignSelf={'center'}
        spacing={4}
        textAlign={'center'}
        maxW="5xl"
        mx={'auto'}
        pt={100}
        px={{ base: 2, sm: 12, md: 17 }}
      >
        <Heading fontSize={'4xl'}>Most Visited Subject Areas</Heading>
        <Text color={'gray.600'} fontSize={'md'}>
        Hundreds of thousands of full-text searchable publications (books, peer-reviewed journals, strategic studies, academic dissertations and educational videos) from the Arab world’s leading publishers, across a diverse range of topics, with more being added every week.
        </Text>
      </Stack>
      <SimpleGrid columns={[1, 1, 2, 3]} spacing={0}>
        {categories?.length ? (
          categories.map((category: any) => (<Card {...category} key={category.id} />))
          ) : (
            <Center height={'50vh'} width={'100vw'}>
              <Spinner />
            </Center>
          )}
      </SimpleGrid>
    </>
  )
}
export default Category