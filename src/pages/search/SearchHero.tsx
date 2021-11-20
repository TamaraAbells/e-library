import React from "react"
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  HStack,
  Input,
  IconButton,
  Divider,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import { BiSearch } from "react-icons/bi";
import { GoSettings } from "react-icons/go";
  
export default function SearchHero() {
  return (
    <Flex
      w={'full'}
      h={'30vh'}
      marginTop={'60px'}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
      pos={'relative'}
    >
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgColor={'#f7fafc'}
        pos={'relative'}
      >
        <Stack w={'100%'} spacing={6} pos={'relative'}>
          <HStack justifyContent={'center'}>
            <Divider w={'5%'} border={2} borderColor={'#48bb78'} />
            <Text
              color={'#2d3748'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '2xl', md: '3xl' })}
            >
              Search Result
            </Text>
            <Divider w={'5%'} border={2} borderColor={'#48bb78'} />
          </HStack>
          <Stack
            direction={'row'}
            justifyContent={'center'}
            alignItems={'center'}
            >
            <Stack direction={'row'} w={['70vw', '50vw']}>
              <Input
                borderRadius={'5px 0 0 5px'}
                placeholder={'Your Search'}
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                border={0}
                mx={0}
                _focus={{
                  bg: 'whiteAlpha.900',
                }}
              />
              <HStack
                w={'40%'}
                borderRadius={'0 5px 5px 0'}
                marginLeft={'0 !important'}
                bg={useColorModeValue('green.400', 'green.800')}
                color={useColorModeValue('white', 'gray.800')}
              >
                <IconButton
                  size={'sm'}
                  w={'35%'}
                  bg={useColorModeValue('green.400', 'green.800')}
                  color={useColorModeValue('white', 'gray.800')}
                  borderRight={'1px solid #e8ebed'}
                  fontSize={'20px'}
                  borderRadius={0}
                  _hover={{
                    bg: 'inherit',
                  }}
                  aria-label="Search"
                  icon={<BiSearch />}
                />
                <IconButton
                  display={useBreakpointValue({ base: 'flex', lg: 'none' })}
                  size={'sm'}
                  fontSize={'20px'}
                  pr={2}
                  bg={useColorModeValue('green.400', 'green.800')}
                  color={useColorModeValue('white', 'gray.800')}
                  borderRadius={0}
                  _hover={{
                    bg: 'inherit',
                  }}
                  aria-label="Advanced"
                  icon={<GoSettings />}
                />
                <Button
                  display={useBreakpointValue({ base: 'none', lg: 'flex' })}
                  size={'sm'}
                  bg={useColorModeValue('green.400', 'green.800')}
                  color={useColorModeValue('white', 'gray.800')}
                  borderRadius={0}
                  _hover={{
                    bg: 'inherit',
                  }}
                >
                  Advanced
                </Button>
              </HStack>
            </Stack>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}