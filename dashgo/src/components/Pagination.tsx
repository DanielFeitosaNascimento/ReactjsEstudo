import { Stack, Button, Box } from "@chakra-ui/react";


export function Pagination() {
  return (
    <Stack
      direction='row'
      mt='8'
      justify='space-between'
      align='center'
      spacing='6'
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction='row' spacing='2'>
        <Button
          size='sm'
          fontSize='xs'
          w='4'
          colorScheme='yellow'
          disabled
          _disabled={{ colorScheme: 'yellow', cursor: 'default' }}
        >
          1
        </Button>
        <Button
          size='sm'
          w='4'
          fontSize='xs'
          bgColor='gray.700'
          _hover={{ bg: 'gray.500', cursor: 'pointer'}}
        >
          2
        </Button>
        <Button
          size='sm'
          fontSize='xs'
          w='4'
          bgColor='gray.700'
          _hover={{ bg: 'gray.500', cursor: 'pointer'}}
        >
          3
        </Button>
        <Button
          size='sm'
          fontSize='xs'
          w='4'
          bgColor='gray.700'
          _hover={{ bg: 'gray.500', cursor: 'pointer'}}
        >
          4
        </Button>
      </Stack>
    </Stack>
  )
}