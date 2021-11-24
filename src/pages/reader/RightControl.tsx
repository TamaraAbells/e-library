import React, { useState } from "react"
import {
  Stack,
  VStack,
  Collapse,
  Box,
  Button,
  Text,
  List,
  ListItem,
  ListIcon,
  useDisclosure
} from "@chakra-ui/react"
import {
  IoMdDownload,
  IoMdPhotos,
  IoMdPrint,
  IoMdShare,
  IoMdChatboxes,
  IoMdBook,
  IoMdCreate
} from "react-icons/io"
import { Docs } from "../../assets"

interface ContainerProps {
  navItems?: Array<ContainerProps>
}

 const RightControl = (props: ContainerProps): JSX.Element => {
  const { isOpen: contentIsOpen, onToggle: contentOnToggle } = useDisclosure()
  const { isOpen: detailIsOpen, onToggle: detailOnToggle } = useDisclosure()

  return(
    <>
      <Stack>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={IoMdDownload} color="green.500" />
            Download
          </ListItem>
          <ListItem>
            <ListIcon as={IoMdPhotos} color="green.500" />
            Screenshot
          </ListItem>
          <ListItem>
            <ListIcon as={IoMdPrint} color="green.500" />
            Print
          </ListItem>
          <ListItem>
            <ListIcon as={IoMdShare} color="green.500" />
            Share
          </ListItem>
          <ListItem>
            <ListIcon as={IoMdChatboxes} color="green.500" />
            Anotate
          </ListItem>
          <ListItem>
            <ListIcon as={IoMdBook} color="green.500" />
            Cite
          </ListItem>
          <ListItem>
            <ListIcon as={IoMdCreate} color="green.500" />
            Highlight
          </ListItem>
        </List>
      </Stack>
    </>
  )
}

export default RightControl
