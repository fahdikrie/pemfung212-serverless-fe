import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from '@chakra-ui/react';
import { login } from 'api/services/login';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { LoginFormData } from 'types/login';

const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>();
  const [isShowingPassword, setShowingPassword] = useState(false);
  const handleClick = () => setShowingPassword((prev) => !prev);

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Stack spacing={4} padding="1rem" background="white" borderRadius="5px">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!errors.username}>
          <FormLabel htmlFor="username">Username</FormLabel>
          <InputGroup size="md">
            <Input
              pr="15rem"
              type="text"
              placeholder="Enter username"
              {...register('username', {
                required: 'This is required',
              })}
            />
          </InputGroup>
          <FormErrorMessage>
            {errors.username && errors.username.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl mt="1rem" isInvalid={!!errors.password}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <InputGroup size="md">
            <Input
              pr="15rem"
              type={isShowingPassword ? 'text' : 'password'}
              placeholder="Enter password"
              {...register('password', {
                required: 'This is required',
              })}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {isShowingPassword ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>

        <Button
          isLoading={isSubmitting}
          type="submit"
          mx="auto"
          d="block"
          mt="1rem"
        >
          Submit
        </Button>

        <Text mt="1rem" textAlign="center">
          Don&apos;t have an account yet?{' '}
          <Text fontWeight="bold" cursor="pointer" d="inline">
            <Link href="/sign-up">Sign up.</Link>
          </Text>
        </Text>
      </form>
    </Stack>
  );
};

export default LoginForm;
