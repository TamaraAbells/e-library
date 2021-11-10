import React from "react";
import {
  Box,
  Stack,
  Flex,
  Button,
  ButtonGroup,
  Input,
  Text,
  VStack,
  Icon,
  IconButton,
  Divider,
  Modal,
  ModalHeader,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
} from '@chakra-ui/icons';

export default function Hero() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={
          'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'4xl'} align={'center'} spacing={6}>
            <Text
              color={'white'}
              textAlign={'center'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '5xl', md: '5xl' })}>
              Lorem Ipsum Dolor Sit Amet Consectetur
            </Text>
            <Stack
              w={'5xl'}
              direction={'row'}
              spacing={0}
              align={'center'}
              alignSelf={'center'}
              position={'relative'}
              justifyContent={'space-around'}
              border={'1px solid #2c5282'}
              borderRadius={'10px'}
            >
              <Input h={'60px'} borderRadius={'10px 0 0 10px'} bg={'whiteAlpha.800'} />
              <ButtonGroup spacing={0}>
                <IconButton
                  bg={'blue.700'}
                  color={'white'}
                  p={6}
                  h={'60px'}
                  borderRadius={0}
                  _hover={{
                    bg: 'blue.800',
                  }}
                  icon={ <HamburgerIcon /> }
                  onClick={onOpen}
                />
                <Divider w={'1px'} />
                <Button
                  w={'200px'}
                  colorScheme={'blue'}
                  bg={'blue.700'}
                  px={6}
                  h={'60px'}
                  borderRadius={'0 8px 8px 0'}
                  _hover={{
                    bg: 'blue.800',
                  }}
                  fontSize={'1.5rem'}
                >
                  Search
                </Button>
              </ButtonGroup>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="full">
        <ModalOverlay />
        <ModalContent sx={{ background: 'white', borderRadius: 0 }}>
          <ModalCloseButton
            fontSize={'1.5rem'}
            borderRadius={'50%'}
            padding={'20px'}
            bg={'white'}
            _hover={{ bg: '#000', color: '#FFF', padding: '20px' }}
          />
          <ModalHeader
            marginTop={'50px'}
            fontSize={'2em'}
          >
            Advanced Search
          </ModalHeader>
          <ModalBody display="flex" alignItems="center" justifyContent="center">
            ModalBody
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}