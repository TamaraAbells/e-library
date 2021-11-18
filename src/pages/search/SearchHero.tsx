import React from "react"
import {
  Stack,
  Flex,
  Button,
  Box,
  Text,
  VStack,
  HStack,
  Select,
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
            justifyContent={'space-between'}
            >
            <Stack direction={'row'}>
              <Input
                w={'20vw'}
                display={useBreakpointValue({ base: 'none', lg: 'flex' })}
                borderRadius={'5px 0 0 0'}
                placeholder={'Your Search'}
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                border={0}
                mx={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <HStack
                borderRadius={'0 5px 0 0'}
                marginLeft={'0 !important'}
                bg={useColorModeValue('green.400', 'green.800')}
                color={useColorModeValue('white', 'gray.800')}
              >
                <IconButton
                  size={'sm'}
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
                  px={0}
                  pr={2}
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
            <Stack direction={'row'}>
              <HStack
                borderRadius={'0 5px 0 0'}
                marginLeft={'0 !important'}
              >
                <Button
                  // display={useBreakpointValue({ base: 'none', lg: 'flex' })}
                  size={'sm'}
                  px={2}
                  pr={2}
                  bg={useColorModeValue('green.400', 'green.800')}
                  color={useColorModeValue('white', 'gray.800')}
                  borderRadius={0}
                  _hover={{
                    bg: 'inherit',
                  }}
                >
                  Sort By
                </Button>
                <Select
                  display={useBreakpointValue({ base: 'none', lg: 'flex' })}
                  bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                  // color={useColorModeValue('white', 'gray.800')}
                  borderRadius={'5px 0 0 0'}
                  placeholder={'Your Search'}
                  border={0}
                  mx={0}
                  _focus={{
                    bg: 'whiteAlpha.300',
                  }}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </HStack>
            </Stack>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}