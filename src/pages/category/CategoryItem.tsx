import React from "react"
import { Link as RouterLink } from "react-router-dom"
import {
  Heading,
  Text,
  Box,
  Stack,
  HStack,
  Link,
  Divider,
  List,
  ListItem,
  ListIcon,
  Image
} from "@chakra-ui/react"
import { GoEye, GoCreditCard } from "react-icons/go"
import { GrShare, GrBook } from "react-icons/gr"

interface SearchResultProps {
  title?: string
  backgroundImage?: string
  book: any
}

const CategoryItem = ({ book }: SearchResultProps): JSX.Element => {
  return(
    <>
      <Stack
        boxShadow={'1px 1px 1px rgba(0, 0, 0, 0.25)'}
        padding={'10px 20px'}
        borderRadius={'5px'}
      >
        <Stack direction="row">
          <Image boxSize={'100px'} src={book.image} />
          <Stack>
            <Link as={RouterLink} to={'/reader'}>
              <Heading fontSize={['15px', '20px']}>{book.title}</Heading>
            </Link>
            <Box fontSize={'12px'}>
              <HStack>
                <Text fontWeight={'700'}>Authors: </Text>
                <Text>{book.author}</Text>
              </HStack>
              <HStack>
                <Text fontWeight={'700'}>Journal: </Text>
                <Text>{book.journal}</Text>
              </HStack>
              <HStack>
                <Text fontWeight={'700'}>Main Topic: </Text>
                <Text>{book.topic}</Text>
              </HStack>
              <HStack>
                <Text fontWeight={'700'}>Publisher: </Text>
                <Text>{book.publisher}</Text>
              </HStack>
            </Box>
          </Stack>
        </Stack>
        <Divider />
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
        >
          <List
            display={'flex'}
            justifyContent={'space-between'}
            w={'100%'}
            fontSize={['11px', '13px']}
          >
            <HStack justifyContent={'space-between'}>
              <Link as={RouterLink} to={'/reader'}>
                <ListItem>
                  <ListIcon as={GoEye} />
                  Read
                </ListItem>
              </Link>
              <ListItem as={Link}>
                <ListIcon as={GoCreditCard} />
                Details
              </ListItem>
              <ListItem as={Link}>
                <ListIcon as={GrShare} />
                Share
              </ListItem>
            </HStack>
            <ListItem>
              <ListIcon as={GrBook} />
              7000 Reads
            </ListItem>
          </List>
        </Stack>
      </Stack>
    </>
  )
}

export default CategoryItem