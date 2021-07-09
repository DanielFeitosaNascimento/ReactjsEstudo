import { Box, Flex, Heading, Button, Icon, Table, Tr, Th, Thead, Tbody, Td, Checkbox, Text } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";


export default function Users() {
  return (
    <Box h='100vh' direction='column'>
      <Header />

      <Flex w='100%' my='6' mx='auto' px='6' maxW={1480}>
        <Sidebar />

        <Box flex='1' p='8' bg='gray.800' borderRadius={8} >
          <Flex mb='8' justify='space-between' align='center' >
            <Heading size='lg' fontWeight='normal' >Usuários</Heading>

            <Button
              as='a'
              leftIcon={<Icon as={RiAddLine} fontSize='20' />}
              fontSize='sm'
              colorScheme='yellow'
            >
              Criar Novo
            </Button>
          </Flex>
          <Table colorScheme='whiteAlpha'>
            <Thead>
              <Tr>
                <Th px='6' color='gray.300' width='8'>
                  <Checkbox colorScheme='yellow' />
                </Th>
                <Th>
                  Usuário
                </Th>
                <Th>
                  Data de cadastro
                </Th>
                <Th w='8'></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px='6'>
                  <Checkbox colorScheme='yellow' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Daniel Feitosa</Text>
                    <Text
                      color='gray.300'
                      fontSize='small'
                      >danfeitosan@hotmail.com</Text
                    >
                  </Box>
                </Td>
                <Td>
                  04 de Abril, 2021
                </Td>
                <Td>
                  <Button
                    as='a'
                    leftIcon={<Icon as={RiPencilLine} fontSize='16' />}
                    fontSize='sm'
                    colorScheme='blackAlpha'
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}