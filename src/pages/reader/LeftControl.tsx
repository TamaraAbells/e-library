import React, { useState } from "react"
import {
  Stack,
  VStack,
  Collapse,
  Box,
  Button,
  Text,
  useDisclosure
} from "@chakra-ui/react"
import { MdFormatListBulleted, MdInfoOutline } from "react-icons/md"
import { Docs } from "../../assets"

interface ContainerProps {
  navItems?: Array<ContainerProps>
}

 const LeftControl = (props: ContainerProps): JSX.Element => {
  const { isOpen: contentIsOpen, onToggle: contentOnToggle } = useDisclosure()
  const { isOpen: detailIsOpen, onToggle: detailOnToggle } = useDisclosure()

  return(
    <>
      <Stack position={'fixed'}>
        <Stack direction="row">
          <Button colorScheme="green" boxSize={'70px'} onClick={contentOnToggle}>
            <VStack fontSize={'40px'}>
            <MdFormatListBulleted />
            <Text fontSize={'10px'}>Content</Text>
            </VStack>
          </Button>
          <Collapse in={contentIsOpen} animateOpacity>
            <Box
              p="40px"
              color="white"
              mt="4"
              bg="teal.500"
              rounded="md"
              shadow="md"
            >
              <Text>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and
                publishing industries for previewing layouts and visual mockups.
              </Text>
            </Box>
          </Collapse>
        </Stack>
        <Stack direction="row">
          <Button colorScheme="green" boxSize={'70px'} onClick={detailOnToggle}>
            <VStack fontSize={'40px'}>
              <MdInfoOutline />
              <Text fontSize={'10px'}>Detail</Text>
            </VStack>
          </Button>
          <Collapse in={detailIsOpen} animateOpacity>
            <Box
              p="40px"
              color="white"
              mt="4"
              bg="teal.500"
              rounded="md"
              shadow="md"
            >
              <Text>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and
                publishing industries for previewing layouts and visual mockups.
              </Text>
            </Box>
          </Collapse>
        </Stack>
      </Stack>
    </>
  )
}

export default LeftControl
