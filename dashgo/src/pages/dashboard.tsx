import dynamic from 'next/dynamic'
import { Flex, SimpleGrid, Box, Text, theme } from '@chakra-ui/react'
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

const Chart = dynamic(() => 
  import('react-apexcharts')
, {
  ssr: false
})

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,

  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    categories: [
      'Seg',
      'Ter',
      'Qua',
      'Qui',
      'Sex',
    ],
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [
  { name: 'Series1', data: [200, 100, 150 , 300, 500] }
]

export default function Dashboard() {
  return (  
    <Flex h='100vh' direction='column'>
      <Header />

      <Flex
        w='100%'
        my='6'
        mx='auto'
        px='6'
        maxW={1480}
      >
        <Sidebar />

        <SimpleGrid flex='1' gap='4' minChildWidth='320px' minHeight='320' align='flex-start'>
          <Box
            p='8'
            bg='gray.800'
            borderRadius={8}
            pb='4'
          >
            <Text
              fontSize='x-small'
              mb='4'
            >
              TAXA 31 - PRIMEIRO EMPLACAMENTO</Text>
            <Chart  options={options} series={series} type='area' height={160} />
          </Box>
          <Box
            p='8'
            bg='gray.800'
            borderRadius={8}
            pb='4'
          >
            <Text
              fontSize='x-small'
            >
              TAXA 1 - PRIMEIRO EMPLACAMENTO - 50CC</Text>
            <Chart options={options} series={series} type='area' height={160} />
          </Box>
          <Box
            p='8'
            bg='gray.800'
            borderRadius={8}
            pb='4'
          >
            <Text
              fontSize='x-small'
            >
              TAXA 40 - AUTORIZAÇÃO DE GRAVAME</Text>
            <Chart options={options} series={series} type='area' height={160} />
          </Box>
          <Box
            p='8'
            bg='gray.800'
            borderRadius={8}
            pb='4'
          >
            <Text
              fontSize='x-small'
            >
              TAXA 87 - LICENCIAMENTO</Text>
            <Chart options={options} series={series} type='area' height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}