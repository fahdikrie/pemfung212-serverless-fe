import { Box, Button as ChakraButton, Flex, Text } from '@chakra-ui/react';

import { clearUser } from 'helpers/user';
import { ContentProps, ButtonProps } from 'types/content';

const Button = ({ children, onClick, colorScheme }: ButtonProps) => (
  <ChakraButton mx="1rem" onClick={onClick} colorScheme={colorScheme}>
    {children}
  </ChakraButton>
);

const Content = ({ setLoggedIn, username }: ContentProps): JSX.Element => {
  const onLogout = () => {
    clearUser();
    setLoggedIn(false);
  };

  return (
    <>
      {username && (
        <Box color="white">
          Logged in as <b>{username}</b>.{' '}
          <Text
            d="inline"
            cursor="pointer"
            fontWeight="bold"
            onClick={onLogout}
            textDecor="underline"
          >
            Log out?
          </Text>
        </Box>
      )}

      <Flex mt="2rem">
        <Button colorScheme="blue">Profile</Button>
        <Button colorScheme="red">Users</Button>
        <Button colorScheme="yellow">Hello World!</Button>
        <Button colorScheme="green">Pokemon</Button>
      </Flex>
    </>
  );
};

export default Content;
