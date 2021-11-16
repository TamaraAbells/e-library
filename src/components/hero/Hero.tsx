import React from "react";
import {
  Stack,
  Flex,
  Button,
  Input,
  Text,
  VStack,
  IconButton,
  Divider,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { GoSettings, GoSearch } from "react-icons/go";
import AdvancedSearch from "../../modals/AdvancedSearch";

interface HeroProps {
  title?: string;
  backgroundImage: string;
}

export default function Hero(props: HeroProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        w={'full'}
        h={'100vh'}
        bgImage={props.backgroundImage}
        bgSize={'cover'}
        bgPosition={'center center'}>
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
              fontSize={useBreakpointValue({ base: '3xl', md: '5xl', lg: '7xl' })}>
              Lorem Ipsum Dolor Sit Amet Consectetur
            </Text>
            <Stack
              w={useBreakpointValue({ base: '100%', md: '2xl', lg: '4xl' })}
              direction={useBreakpointValue({ base: 'column', lg: 'row' })}
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
                h={useBreakpointValue(['40px', '40px', '60px'])}
                w={'100%'}
                borderRadius={useBreakpointValue({ base: '10px', lg: '8px 0 0 8px' })}
                bg={'whiteAlpha.900'}
                borderRight={0}
              />
              <Stack
                direction={useBreakpointValue({ base: 'column', lg: 'row' })}
                spacing={useBreakpointValue([0.6, 0.6, 0.8, 0])}
                w={useBreakpointValue(['100%', '100%', '100%', 'unset'])}
              >
                <IconButton
                  display={useBreakpointValue({ base: 'none', lg: 'flex' })}
                  aria-label={'Search database'}
                  fontSize={'30px'}
                  bg={'blue.700'}
                  color={'white'}
                  p={6}
                  w={useBreakpointValue(['100%', '100%', '100%', '100px'])}
                  h={'60px'}
                  borderRadius={'8px 0 0 8px'}
                  _hover={{
                    bg: 'blue.800',
                  }}
                  icon={ <GoSearch /> }
                />
                <Divider w={0.5} />
                <IconButton
                  display={useBreakpointValue({ base: 'none', lg: 'flex' })}
                  aria-label={'Advanced search database'}
                  fontSize={'30px'}
                  bg={'blue.700'}
                  borderRadius={'0 8px 8px 0'}
                  color={'white'}
                  p={6}
                  w={useBreakpointValue(['100%', '100%', '100%', '100px'])}
                  h={'60px'}
                  _hover={{
                    bg: 'blue.800',
                  }}
                  icon={ <GoSettings /> }
                  onClick={onOpen}
                />    
                <Button
                  display={useBreakpointValue({ base: 'flex', lg: 'none' })}
                  aria-label={'Search database'}
                  fontSize={useBreakpointValue(['20px', '30px', '30px'])}
                  bg={'blue.700'}
                  color={'white'}
                  p={6}
                  w={useBreakpointValue(['100%', '100%', '100%', '100px'])}
                  h={useBreakpointValue(['40px', '40px', '60px'])}
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
                  display={useBreakpointValue({ base: 'flex', lg: 'none' })}
                  aria-label={'Advanced search database'}
                  fontSize={useBreakpointValue(['20px', '30px', '30px'])}
                  bg={'blue.700'}
                  borderRadius={'8px'}
                  color={'white'}
                  p={6}
                  w={useBreakpointValue(['100%', '100%', '100%', '100px'])}
                  h={useBreakpointValue(['40px', '40px', '60px'])}
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
      <AdvancedSearch isOpen={isOpen} onClose={onClose} />
    </>
  );
}