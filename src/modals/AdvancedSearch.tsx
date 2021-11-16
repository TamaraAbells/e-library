import React from "react";
import {
  Box,
  Stack,
  HStack,
  Flex,
  Button,
  ButtonGroup,
  Text,
  VStack,
  Icon,
  IconButton,
  Divider,
  Select,
  SimpleGrid,
  Input,
  InputGroup,
  Spacer,
  Modal,
  ModalHeader,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useBreakpointValue,
} from '@chakra-ui/react';

export interface AdvancedSearchProps {
  isOpen: boolean;
  onClose: VoidFunction;
}

const AdvancedSearch = (props: AdvancedSearchProps) => {

  return (
    <Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
      isCentered
      size={'full'}
      motionPreset={'slideInBottom'}
      scrollBehavior={'inside'}
    >
      <ModalOverlay />
      <ModalContent sx={{ background: 'white', borderRadius: 0 }} padding={useBreakpointValue(['0', '0 100px'])}>
        <ModalCloseButton
          fontSize={useBreakpointValue(['1rem', '1.5rem'])}
          borderRadius={'50%'}
          padding={'20px'}
          bg={'white'}
          _hover={{ bg: '#000', color: '#FFF', padding: '20px' }}
        />
        <ModalHeader
          marginTop={['0', '50px']}
          fontSize={['1.5rem', '2.5em']}
        >
          Advanced Search
        </ModalHeader>
        <ModalBody>
          <Stack w={'100%'} lineHeight={'70px'}>
            <Stack
              spacing={2}
              direction={useBreakpointValue({ base: 'column', md: 'row', lg: 'row' })}
              alignItems={'center'}
              w={'100%'}
            >
              <Input w={useBreakpointValue(['100%', '70%'])} size={'lg'} borderColor={'#2c5282'} />
              <Select w={useBreakpointValue(['100%', '30%'])} size={'lg'} borderColor={'#2c5282'} placeholder="Select option">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </Stack>
            <Stack
              spacing={2}
              direction={useBreakpointValue({ base: 'column', md: 'row', lg: 'row' })}
              alignItems={'center'}
              w={'100%'}
            >
              <Select w={useBreakpointValue(['100%', '20%'])} size={'lg'} borderColor={'#2c5282'} placeholder="Select option">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
              <Input w={useBreakpointValue(['100%', '50%'])} size={'lg'} borderColor={'#2c5282'} />
              <Select w={useBreakpointValue(['100%', '30%'])} size={'lg'} borderColor={'#2c5282'} placeholder="Select option">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </Stack>
            <Stack
              spacing={2}
              direction={useBreakpointValue({ base: 'column', md: 'row', lg: 'row' })}
              alignItems={'center'}
              w={'100%'}
            >
              <Select w={useBreakpointValue(['100%', '20%'])} size={'lg'} borderColor={'#2c5282'} placeholder="Select option">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
              <Input w={useBreakpointValue(['100%', '50%'])} size={'lg'} borderColor={'#2c5282'} />
              <Select w={useBreakpointValue(['100%', '30%'])} size={'lg'} borderColor={'#2c5282'} placeholder="Select option">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </Stack>
            <Stack
              spacing={2}
              direction={useBreakpointValue({ base: 'column', md: 'row', lg: 'row' })}
              alignItems={'center'}
              w={'100%'}
            >
              <Select w={useBreakpointValue(['100%', '30%'])} size={'lg'} borderColor={'#2c5282'} placeholder="Select option">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
              <Input w={useBreakpointValue(['100%', '70%'])} size={'lg'} borderColor={'#2c5282'} />
            </Stack>
            <Stack paddingTop={5}>
              <Button
                size={'lg'}
                isLoading={false}
                loadingText="Searching"
                bg={'#2c5282'}
                color={'#FFFFFF'}
              >
                Submit
              </Button>
            </Stack>
          </Stack>
        </ModalBody>
    </ModalContent>
  </Modal>
  )
}

export default AdvancedSearch