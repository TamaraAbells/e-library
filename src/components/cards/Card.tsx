import React from "react"
import { Link as RouterLink } from "react-router-dom"
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button,
  } from '@chakra-ui/react'
  
export interface CategoryProps {
  title: string;
  image: string;
  books: number;
  id: number;
}
  
  export default function Card(category: CategoryProps) {
    return (
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${category.image})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={category.image}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              {`+${category.books} study materials`}
            </Text>
            <Heading textAlign={'center'} fontSize={'xl'} fontFamily={'body'} fontWeight={700}>
              {category.title}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Button as={RouterLink} to={'/category'} >View All Books</Button>
            </Stack>
          </Stack>
        </Box>
      </Center>
    );
  }