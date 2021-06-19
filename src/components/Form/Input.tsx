import { FormControl, FormLabel, FormErrorMessage, Input as ChakraInput, InputProps as ChakraInputPros } from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

interface InputProps extends ChakraInputPros {
  name: string;
  label?: string;
  error?: FieldError
}

const InputBase:ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, error = null, ...rest }, ref) => {
  return (
    <FormControl isInvalid={!!error}>

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
        ref={ref}
        {...rest}
      />

      { !!error && (
        <FormErrorMessage>
          {error.message}
        </FormErrorMessage>
      )}

    </FormControl>
    );
  }
  

  export const Input = forwardRef(InputBase);