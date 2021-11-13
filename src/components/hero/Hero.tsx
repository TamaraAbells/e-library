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
import { GoSettings, GoSearch } from "react-icons/go";

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
          <Stack align={'center'} spacing={6}>
            <Text
              color={'white'}
              textAlign={'center'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '5xl', lg: '6xl' })}>
              Lorem Ipsum Dolor Sit Amet Consectetur
            </Text>
            <Stack
              w={{ base: '100%', md: '2xl', lg: '4xl' }}
              direction={{ base: 'column', lg: 'row' }}
              justifyContent={'center'}
              alignItems={'center'}
              spacing={0}
              align={'center'}
              alignSelf={'center'}
              position={'relative'}
              borderRadius={'10px'}
              padding={['2px']}
              bg={'whiteAlpha.700'}
            >
              <Input
                fontSize={'20px'}
                h={['40px', '40px', '60px']}
                w={'100%'}
                borderRadius={{ base: '10px', lg: '8px 0 0 8px' }}
                bg={'whiteAlpha.900'}
                borderRight={0}
              />
              <Stack
                direction={{ base: 'column', lg: 'row' }}
                spacing={[0.6, 0.6, 0.8, 0]}
                w={['100%', '100%', '100%', 'unset']}
              >
                <IconButton
                  display={{ base: 'none', lg: 'flex' }}
                  aria-label={'Search database'}
                  fontSize={'30px'}
                  bg={'blue.700'}
                  color={'white'}
                  p={6}
                  w={['100%', '100%', '100%', '100px']}
                  h={'60px'}
                  borderRadius={'8px 0 0 8px'}
                  _hover={{
                    bg: 'blue.800',
                  }}
                  icon={ <GoSearch /> }
                  onClick={onOpen}
                />
                <Divider w={0.5} />
                <IconButton
                  display={{ base: 'none', lg: 'flex' }}
                  aria-label={'Advanced search database'}
                  fontSize={'30px'}
                  bg={'blue.700'}
                  borderRadius={'0 8px 8px 0'}
                  color={'white'}
                  p={6}
                  w={['100%', '100%', '100%', '100px']}
                  h={'60px'}
                  _hover={{
                    bg: 'blue.800',
                  }}
                  icon={ <GoSettings /> }
                  onClick={onOpen}
                />    
                <Button
                  display={{ base: 'flex', lg: 'none' }}
                  aria-label={'Search database'}
                  fontSize={['20px', '30px', '30px']}
                  bg={'blue.700'}
                  color={'white'}
                  p={6}
                  w={['100%', '100%', '100%', '100px']}
                  h={['40px', '40px', '60px']}
                  borderRadius={'8px'}
                  _hover={{
                    bg: 'blue.800',
                  }}
                  icon={ <GoSearch /> }
                  onClick={onOpen}
                >
                  Search
                </Button>
                <Divider w={0.5} />
                <Button
                  display={{ base: 'flex', lg: 'none' }}
                  aria-label={'Advanced search database'}
                  fontSize={['20px', '30px', '30px']}
                  bg={'blue.700'}
                  borderRadius={'8px'}
                  color={'white'}
                  p={6}
                  w={['100%', '100%', '100%', '100px']}
                  h={['40px', '40px', '60px']}
                  _hover={{
                    bg: 'blue.800',
                  }}
                  icon={ <GoSettings /> }
                  onClick={onOpen}
                >  
                  Advanced Search
                </Button>  
              </Stack>
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