import React from "react";
import { Stack } from "@chakra-ui/react";
import HeroComponent from "../../components/hero/Hero";
import StatsCardProps from "../../components/cards/Stats";
import CategoryComponent from "./Category";

const Homepage = () => {
  return(
      <Stack >
        <HeroComponent />
        <StatsCardProps />
        <CategoryComponent />
    </Stack>
  )
}

export default Homepage;