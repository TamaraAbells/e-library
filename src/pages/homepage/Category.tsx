import React from "react";
import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
  } from '@chakra-ui/react';
import Card from "../../components/cards/Card";

const arry = [0,0,0,0,0,0,0,0];

const Category = () => (
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
      <SimpleGrid columns={[2, null, 4]} spacing="40px">
        {arry.map((a) => (
            <Card />
        ))}
      </SimpleGrid>
    </>
);

export default Category;