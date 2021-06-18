import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputPros } from '@chakra-ui/react'

interface InputProps extends ChakraInputPros {
  name: string;
  label?: string;
}

export const Input = ({ name, label, ...rest }: InputProps) => {
  return (
    <FormControl>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel> }
      <ChakraInput
        name={name}
        id={name}
        bgColor="gray.900"
        focusBorderColor="pink.500"
        variant="filled"
        _hover={{
          bgColor: "gray.900"
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
    );
  }
  