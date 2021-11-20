import React from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
  import {
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';

export default function NavDropdown(props: NavDropdownProps) {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box w={'100%'}>
      <Button
        w={'100%'}
        display={'flex'}
        justifyContent={'space-between'}
        onClick={onToggle}
        rightIcon={
        isOpen ? <ChevronDownIcon w={5} h={5} /> : <ChevronRightIcon w={5} h={5} />
        }
        variant={'ghost'}
        aria-label={'Subjects'}
        _hover={{ bg: 'transparent' }}
      >
        {props.title}
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <SearchNav items={props.items} />
      </Collapse>
    </Box>
  );
}

const SearchNav = ({ items }: SearchNav) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
    >
      {items?.map((navItem) => (
        <SearchNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const SearchNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
        textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            )
          )}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface SearchNav {
  items?: Array<NavItem>;
  label?: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}
interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}
interface NavDropdownProps {
  title?: string;
  items?: Array<NavItem>;
  item?: Array<NavItem>;
  label?: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}
