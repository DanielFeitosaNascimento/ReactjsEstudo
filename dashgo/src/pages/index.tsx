import { Input } from '../components/Form/Input';
import { Flex, Button} from '@chakra-ui/react'

export default function SingIn() {
  return (
    <Flex
      w='100vw'
      h='100vh'
      align='center'
      justify='center'
    >
      <Flex
        as='form'
        w='100%'
        maxW={400}
        bg='gray.700'
        p='8'
        borderRadius={8}
        flexDir='column'
      >
        <Flex
          as='h1'
          align='center'
          justify='center'
          fontSize='2xl'
        >
          Sing In
        </Flex>
        
        <Input name='email' type='email' label='E-mail:' />
        <Input name='password' type='password' label='Password:' />

        <Button
          type='submit'
          mt={6}
          colorScheme='orange'
          size='lg'
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
