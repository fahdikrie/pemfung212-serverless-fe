import {
  Box,
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
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { LoginFormData, LoginProps } from 'types/login';
import { login } from 'api/services/login';
import { storeUser } from 'helpers/user';

const LoginForm = ({ setLoggedIn }: LoginProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>();
  const [isShowingPassword, setShowingPassword] = useState(false);

  const handleClick = () => setShowingPassword((prev) => !prev);

  const onSubmit = async (formData: LoginFormData) => {
    try {
      const { data } = await login(formData);
      storeUser(await data.user);
      setLoggedIn(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Stack spacing={4} padding="1rem" background="white" borderRadius="5px">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!errors.username}>
          <FormLabel id="username" htmlFor="username">
            Username
          </FormLabel>
          <InputGroup size="md">
            <Input
              pr="15rem"
              type="text"
              id="username"
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
          <FormLabel id="password" htmlFor="password">
            Password
          </FormLabel>
          <InputGroup size="md">
            <Input
              pr="15rem"
              id="password"
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

        <Box mt="1rem" textAlign="center">
          Don&apos;t have an account yet?{' '}
          <Text fontWeight="bold" cursor="pointer" d="inline">
            <Link href="/signup">Sign up.</Link>
          </Text>
        </Box>
      </form>
    </Stack>
  );
};

export default LoginForm;
