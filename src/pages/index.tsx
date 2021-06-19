import { Flex, Button, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

import { Input } from '../components/Form/Input'

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória')
})

type SignInFormData = {
  email: string;
  password: string;
}

export default function Home() {
  const { register, formState, handleSubmit } = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  const { errors } = formState;

  console.log('Errors', errors)

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    return new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Values', values);
  }

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input 
            name="email" 
            type="email" 
            label="E-mail"
            error={errors.email}
            {...register("email")}
          />

          <Input 
            name="password" 
            type="password" 
            label="Senha"
            error={errors.password}
            {...register("password")}
          />

        </Stack>

        <Button 
          type="submit" 
          mt="6" 
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >Entrar</Button>
      </Flex>
    </Flex>
  )
}
