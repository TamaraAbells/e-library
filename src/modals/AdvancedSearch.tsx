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

const AdvancedSearch = ({ isOpen, onClose, onOpen }) => {

  return (
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
  )
}

export default AdvancedSearch