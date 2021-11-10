import React from "react";
import {
  Box,
  HStack,
  VStack,
  Stack,
  Button,
  Input,
} from "@chakra-ui/react";

const SearchComponent = () => (
  <Box>
    <HStack>
      <Input />
      <Button>Button</Button>
    </HStack>
  </Box>
);

export default SearchComponent;