import React from "react"
import {
  Stack,
  Heading,
  Text,
  Input,
  InputLeftAddon,
  InputRightAddon,
  InputGroup,
  Select,
  Button,
  HStack,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react"
import { GoSettings } from "react-icons/go"
import NavDropdown from "../../components/features/NavDropdown"

interface SearchFilterProps {
  title?: string
  items?: [];
  item?: {};
  navItems?: Array<SearchFilterProps>;
}

const CategoryFilter = ({ navItems }: SearchFilterProps): JSX.Element => {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true  })
  
  return(
    <>
      <Stack w={'100%'}>
        <HStack justifyContent={'space-between'} color={'#4d3748'}>
          <Heading fontSize={'20px'}>Category in Search</Heading>
          <Button onClick={onToggle} fontSize={'25px'}>
            <GoSettings />
          </Button>
        </HStack>
        <Collapse in={isOpen} animateOpacity>
          <Stack>
            <Input variant="flushed" placeholder="Custom Category Search" />
            <InputGroup paddingTop={2}>
              <InputLeftAddon children={'In'} />
              <Select placeholder="Title" borderRadius={0}>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
              <InputRightAddon children={<Button p={0}>Apply</Button>} />
            </InputGroup>
            {navItems?.map((item) => (
              <NavDropdown title={item.title} items={item.items} />
            ))}
          </Stack>
        </Collapse>
      </Stack>
    </>
  )
}

export default CategoryFilter;