import React from "react"
import { Stack, VStack, Box, Center, Spinner } from "@chakra-ui/react"
import { useQuery } from "react-query"
import HeroComponent from "../../components/hero/Hero"
import StatsCardProps from "../../components/cards/Stats"
import CategoryComponent from "./Category"
import { getCategoryList } from "../../services/request"

interface CategoryProps {
    title?: string
    backgroundImage?: string
  }

const heroBgImage = 'https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'


const Category = (props: CategoryProps): JSX.Element => {
  const { isLoading, error, data } = useQuery('CategoryList', async() => (getCategoryList()))
  if(isLoading) return (<Center height={'50vh'}><Spinner /></Center>)
//    if(error) return error

  return(
    <>
      <Stack w={'100%'}>
        This is Category
      </Stack>
    </>
  )
}

export default Category;