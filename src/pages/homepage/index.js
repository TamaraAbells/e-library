import React from "react";
import { Stack } from "@chakra-ui/react";
import HeroComponent from "./HeroComponent";
import Statistics from "./Statistics";
import Category from "./Category";
import Features from "./Features";

const Homepage = () => {
  return(
      <Stack >
        <HeroComponent />
        <Statistics />
        <Category />
        <Features />
    </Stack>
  )
}

export default Homepage;