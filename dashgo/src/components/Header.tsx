import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react';
import { RiNotificationOffLine, RiSearch2Line, RiUserAddLine } from 'react-icons/ri';

export function Header() {
  return (
    <Flex
      w='100%'
      as='header'
      maxW={1120}
      h='20'
      mx='auto'
      mt='4'
      px='6'
      align='center'
    >
      <Text
        fontSize='3xl'
        fontWeight='bold'
        letterSpacing=''
      >
        DashGO
        <Text
          as='span'
          fontSize='3xl'
          ml='1'
          color='orange.400'
        >
          .
        </Text>
      </Text>
      <Flex
          as='label'
          flex='1'
          py='4'
          px='8'
          ml='6'
          maxW={400}
          alignSelf='center'
          bg='gray.800'
          borderRadius='full'
        >
          <Input
            color='gray.50'
            variant='unstyled'
            px='4'
            mr='4'
            placeholder='Buscar na plataforma'
            _placeholder={{color: 'gray.400'}}
          />

          <Icon as={RiSearch2Line} fontSize={20} />
        </Flex>

        <Flex
          align="center"
          ml='auto'
        >
          <HStack
            spacing='6'
            mx='8'
            pr='8'
            py='1'
            color='gray.300'
            borderRightWidth={1}
            borderColor='gray.700'
          >
            <Icon as={RiNotificationOffLine} fontSize={20} ></Icon>
            <Icon as={RiUserAddLine}  fontSize={20}></Icon>
          </HStack>
          <Flex
            align="center"
          >
            <Box mr='4' textAlign='right'>
              <Text>Daniel Feitosa</Text>
              <Text
                color='gray.300' fontSize='small'
              >
                danfeitosan@hotmail.com
              </Text>
              
            </Box>
            <Avatar name='Daniel Feitosa' src='https://github.com/DanielFeitosaNascimento.png' />
          </Flex>
        </Flex>
    </Flex>
  )
}