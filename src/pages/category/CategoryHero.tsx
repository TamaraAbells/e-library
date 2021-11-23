import React from "react"
import {
  Stack,
  Flex,
  Text,
  VStack,
  HStack,
  Divider,
  useBreakpointValue,
} from '@chakra-ui/react'
  
export default function CategoryHero() {
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
              Category Title
            </Text>
            <Divider w={'5%'} border={2} borderColor={'#48bb78'} />
          </HStack>
        </Stack>
      </VStack>
    </Flex>
  );
}