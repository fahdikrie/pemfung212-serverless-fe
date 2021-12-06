import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from '@chakra-ui/react';
import { signUp } from 'api/services/sign-up';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { SignUpFormData } from 'types/sign-up';

const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>();
  const [isShowingPassword, setShowingPassword] = useState(false);
  const handleClick = () => setShowingPassword((prev) => !prev);

  const onSubmit = async (data: SignUpFormData) => {
    try {
      await signUp(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Stack spacing={4} padding="1rem" background="white" borderRadius="5px">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!errors.name}>
          <FormLabel htmlFor="username">Name</FormLabel>
          <InputGroup size="md">
            <Input
              pr="15rem"
              type="text"
              placeholder="Enter name"
              {...register('name', {
                required: 'This is required',
              })}
            />
          </InputGroup>
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl mt="1rem" isInvalid={!!errors.fullname}>
          <FormLabel htmlFor="fullname">Fullname</FormLabel>
          <InputGroup size="md">
            <Input
              pr="15rem"
              type="text"
              placeholder="Enter fullname"
              {...register('fullname', {
                required: 'This is required',
              })}
            />
          </InputGroup>
          <FormErrorMessage>
            {errors.username && errors.username.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl mt="1rem" isInvalid={!!errors.username}>
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
          Create Account
        </Button>
      </form>
    </Stack>
  );
};

export default LoginForm;
