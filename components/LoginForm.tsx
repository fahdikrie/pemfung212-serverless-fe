import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from '@chakra-ui/react';
import { useState } from 'react';

const LoginForm = () => {
  const [isShowingPassword, setShowingPassword] = useState(false);
  const handleClick = () => setShowingPassword((prev) => !prev);

  return (
    <Stack spacing={3} padding="1rem" background="white" borderRadius="5px">
      <InputGroup size="md">
        <Input pr="10rem" type="text" placeholder="Enter username" />
      </InputGroup>
      <InputGroup size="md">
        <Input
          pr="10rem"
          type={isShowingPassword ? 'text' : 'password'}
          placeholder="Enter password"
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {isShowingPassword ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
    </Stack>
  );
};

export default LoginForm;
