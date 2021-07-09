import { Box, Flex, Button, Text, Heading, Divider, VStack, SimpleGrid, HStack } from "@chakra-ui/react";
import React from "react";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";


export default function CreateUser() {
  return (
    <Box h='100vh' direction='column'>
      <Header />

      <Flex w='100%' my='6' mx='auto' px='6' maxW={1480}>
        <Sidebar />

        <Box flex='1' p='8' bg='gray.800' borderRadius={8} >
          <Heading size='lg' fontWeight='normal' >Criar usuário</Heading>

          <Divider my='6' borderColor='gray.700' />

          <VStack>
            <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
              <Input name='name' type='text' label='Nome Completo' />
              <Input name='email' type='email' label='E-mail' />
            </SimpleGrid>
            <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
              <Input name='password' type='password' label='Senha' />
              <Input name='passwordConfirm' type='password' label='Confirmar Senha' />
            </SimpleGrid>
          </VStack>

          <Flex mt='8' justify='flex-end' >
            <HStack spacing='4'>
              <Button colorScheme='whiteAlpha'>Cancelar</Button>
              <Button colorScheme='yellow' >Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}