import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';

export interface SigninProps {
  isOpen: boolean
  onClose: VoidFunction
}

const Signin = (props: SigninProps) => {

  return (
    <Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
      isCentered
      size={'2xl'}
      motionPreset={'slideInBottom'}
      // scrollBehavior={'inside'}
    >
      <ModalOverlay />
      <ModalContent bg={useColorModeValue('gray.50', 'gray.800')}>
        <ModalCloseButton />
        <ModalBody>
          <Flex
            align={'center'}
            justify={'center'}
          >
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={5} px={2}>
              <Stack align={'center'}>
                <Heading fontSize={'4xl'}>Sign in</Heading>
                <Text fontSize={'lg'} color={'gray.600'}>
                  Sign in to your account
                </Text>
              </Stack>
              <Box
                rounded={'lg'}
                bg={useColorModeValue('white', 'gray.700')}
                boxShadow={'lg'}
                p={14}>
                <Stack spacing={4}>
                  <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" />
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input type="password" />
                  </FormControl>
                  <Stack spacing={10}>
                    <Stack
                      direction={{ base: 'column', sm: 'row' }}
                      align={'start'}
                      justify={'space-between'}>
                      <Checkbox>Remember me</Checkbox>
                      <Link color={'blue.400'}>Forgot password?</Link>
                    </Stack>
                    <Button
                      bg={'blue.400'}
                      color={'white'}
                      _hover={{
                        bg: 'blue.500',
                      }}>
                      Sign in
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Flex>
        </ModalBody>
    </ModalContent>
  </Modal>
  )
}

export default Signin