import React from 'react';
import {
    Box,
    chakra,
    Flex,
    Stack,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  import { BsPerson } from 'react-icons/bs';
  import { GrArticle } from 'react-icons/gr';
  import { GoLocation } from 'react-icons/go';
  
  interface StatsCardProps {
    title: string;
    stat: string;
    icon: ReactNode;
    desc: string,
  }
  function StatsCard(props: StatsCardProps) {
    const { title, stat, icon, desc } = props;
    return (
      <Stat
        px={{ base: 2, md: 4 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}>
        <Stack>
            <Flex justifyContent={'space-between'}>
            <Box pl={{ base: 2, md: 4 }}>
                <StatLabel fontWeight={'medium'} isTruncated>
                {title}
                </StatLabel>
                <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                {stat}
                </StatNumber>
            </Box>
            <Box
                my={'auto'}
                color={useColorModeValue('gray.800', 'gray.200')}
                alignContent={'center'}>
                {icon}
            </Box>
            </Flex>
            <StatHelpText textAlign={'center'} fontSize={'md'} fontWeight={'medium'}>
              {desc}
            </StatHelpText>
        </Stack>
      </Stat>
    );
  }
  
  export default function BasicStatistics() {
    return (
      <Stack maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1
          textAlign={'center'}
          fontSize={'4xl'}
          py={10}
          fontWeight={'bold'}>
          Our resource is expanding, you could be too.
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard
            title={'Users'}
            stat={'100,000 +'}
            icon={<BsPerson size={'3em'} />}
            desc={'Increase your personal expertise'}
            
          />
          <StatsCard
            title={'Publishers'}
            stat={'1,000 +'}
            icon={<GoLocation size={'3em'} />}
            desc={'Find your favorite authors'}
          />
          <StatsCard
            title={'Publications'}
            stat={'70,000 +'}
            icon={<GrArticle size={'3em'} />}
            desc={'Read a variety of fresh topics'}
          />
        </SimpleGrid>
      </Stack>
    );
  }