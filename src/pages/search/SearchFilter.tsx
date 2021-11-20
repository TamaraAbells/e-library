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
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
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

const SearchFilter = ({ navItems }: SearchFilterProps): JSX.Element => {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true  })
  
  return(
    <>
      <Stack w={'100%'}>
        <HStack justifyContent={'space-between'} color={'#4d3748'}>
          <Heading fontSize={'20px'}>Filter Search</Heading>
          <Button onClick={onToggle} fontSize={'25px'}>
            <GoSettings />
          </Button>
        </HStack>
        <Collapse in={isOpen} animateOpacity>
          <Stack>
            <Input variant="flushed" placeholder="Flushed" />
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
          <Stack>
            <Text textAlign={'center'} fontSize={'18px'} fontWeight={'bold'}>Select Range</Text>
            <RangeSlider
              aria-label={["min", "max"]}
              onChangeEnd={(val) => console.log(val)}
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
              <RangeSliderThumb index={1} />
            </RangeSlider>
          </Stack>
        </Collapse>
      </Stack>
    </>
  )
}

export default SearchFilter