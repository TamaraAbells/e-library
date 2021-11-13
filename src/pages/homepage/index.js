import React from "react";
import { VStack, Box, Center, Spinner } from "@chakra-ui/react";
import { useQuery } from "react-query";
import HeroComponent from "../../components/hero/Hero";
import StatsCardProps from "../../components/cards/Stats";
import CategoryComponent from "./Category";
import { getCategoryList } from "../../services/request";

const Homepage = () => {
  const { isLoading, error, data } = useQuery('CategoryList', async() => (getCategoryList()))
  if(isLoading) return (<Center height={'50vh'}><Spinner /></Center>)
   if(error) return error

  return(
      <VStack w={'100%'}>
        <HeroComponent />
        <Box padding={['0 20px']}>
          <StatsCardProps />
          <CategoryComponent data={data} />
        </Box>
    </VStack>
  )
}

export default Homepage;