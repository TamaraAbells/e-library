import React, { useState } from "react"
import {
  Stack,
  useDisclosure
} from "@chakra-ui/react"
import LeftControl from "./LeftControl"
import RightControl from "./RightControl"
import CenterControl from "./CenterControl"

interface ContainerProps {
  navItems?: Array<ContainerProps>
}

 const Container = (props: ContainerProps): JSX.Element => {
  const { isOpen: contentIsOpen, onToggle: contentOnToggle } = useDisclosure()
  const { isOpen: detailIsOpen, onToggle: detailOnToggle } = useDisclosure()

  return(
    <>
      <Stack
        padding={'50px'}
        paddingTop={'60px'}
        direction={'row'}
        justifyContent={'space-between'}
        bg={'#f7fafc'}
        position={'relative'}
      >
        <Stack
          // minW={'10%'}
          paddingTop={10}
        >
          <LeftControl />
        </Stack>
        <Stack w={'80%'} bg={'#f7fafc'}>
          <CenterControl />
        </Stack>
        <Stack
          minW={'10%'}
          paddingTop={10}
        >
          <RightControl />
        </Stack>
      </Stack>
    </>
  )
}

export default Container
