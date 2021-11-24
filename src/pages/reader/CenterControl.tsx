import React, { useState } from "react"
import {
  Box,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  InputRightAddon,
  Center,
  IconButton,
  ButtonGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Checkbox,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useDisclosure
} from "@chakra-ui/react"
import {
  FiSearch,
  FiChevronDown
} from "react-icons/fi"
import {
  AiFillStepBackward,
  AiFillBackward,
  AiFillForward,
  AiFillStepForward
} from "react-icons/ai"
import { CloseButton } from "@chakra-ui/close-button"

import Reader from "./Reader"

interface ContainerProps {
  navItems?: Array<ContainerProps>
}

 const CenterControl = (props: ContainerProps): JSX.Element => {

  return (
    <>
      <Stack position={'relative'} bg={'#f7fafc'}>
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          position={'fixed'}
          bg={'#f7fafc'}
          w={'75%'}
          zIndex={2}
          padding={3}
        >
          <Stack w={'30%'} bg={'#edf2f7'} justifyContent={'flex-start'} position={'relative'}>
            <InputGroup size={'sm'} bg={'#f7fafc'}>
              <Input placeholder="Search within document" />
              <InputRightElement
                marginRight={8}
                borderRadius={0}
                as={IconButton}
                icon={<FiSearch />}
              />
              <InputRightElement
                children={
                  <Menu>
                  {({ isOpen }) => (
                    <>
                      <MenuButton
                        size={'sm'}
                        borderRadius={0}
                        isActive={isOpen}
                        as={IconButton}
                        icon={<FiChevronDown />}
                      />
                      <MenuList>
                        <MenuItem>
                          <Checkbox>Highlights</Checkbox>
                        </MenuItem>
                        <MenuItem>
                          <Checkbox>Match case</Checkbox>
                        </MenuItem>
                        <MenuItem>
                          <Checkbox>Match full phrase</Checkbox>
                        </MenuItem>
                      </MenuList>
                    </>
                  )}
                </Menu>
                }
              />
            </InputGroup>
          </Stack>
          <Stack direction={'row'} w={'50%'} justifyContent={'flex-end'}>
            <ButtonGroup
              size={'sm'}
              w={'auto'}
              justifyContent={'flex-end'}
              bg={'#edf2f7'}
            >
              <IconButton borderRadius={0} aria-label={'icon'} icon={<AiFillStepBackward />} />
              <IconButton borderRadius={0} aria-label={'icon'} icon={<AiFillBackward />} />
              <IconButton borderRadius={0} aria-label={'icon'} icon={<AiFillForward />} />
              <IconButton borderRadius={0} aria-label={'icon'} icon={<AiFillStepForward />} />
            </ButtonGroup>
            <InputGroup w={'20%'} size={'sm'}>
              <Input />
              <InputRightAddon children={'20'} />
            </InputGroup>
          </Stack>
        </Stack>
        <Stack>
          <Stack paddingTop={10} position={'relative'}>
            <Alert status="warning">
              <AlertIcon />
              <Box flex="1">
                <AlertTitle>Preview Mode!</AlertTitle>
                <AlertDescription display="block">
                You can view only a fraction of each document. If you are a library patron and need full access
                please refer to your librarian. If you are an individual contact Al Manhal directly.
                </AlertDescription>
              </Box>
              <CloseButton position="absolute" right="8px" top="8px" />
            </Alert>
          </Stack>
          <Center paddingTop={0} bg="white">
            <Reader />
          </Center>
        </Stack>
      </Stack>
    </>
  )
}

export default CenterControl
