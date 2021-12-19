import {
  Box,
  Button as ChakraButton,
  Flex,
  Skeleton,
  Text,
} from '@chakra-ui/react';
import { CodeBlock, atomOneLight } from 'react-code-blocks';
import { useState } from 'react';

import { clearUser } from 'helpers/user';
import { ContentProps, ButtonProps } from 'types/content';
import { profile as fetchProfile } from 'api/services/profile';
import { users as fetchUsers } from 'api/services/users';
import { helloWorld as fetchHelloWorld } from 'api/services/hello-world';
import { pokedex as fetchPokedex } from 'api/services/pokedex';

const Button = ({ children, onClick, colorScheme }: ButtonProps) => (
  <ChakraButton mx="1rem" onClick={onClick} colorScheme={colorScheme}>
    {children}
  </ChakraButton>
);

const Content = ({ setLoggedIn, username }: ContentProps): JSX.Element => {
  const [activeContent, setActiveContent] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(true);

  const onFetchProfile = async () => {
    try {
      setLoading(true);
      const {
        data: { user },
      } = await fetchProfile();
      setActiveContent(JSON.stringify(user, null, 2));
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const onFetchUsers = async () => {
    try {
      setLoading(true);
      const {
        data: { users },
      } = await fetchUsers();
      setActiveContent(JSON.stringify(users, null, 2));
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const onFetchHelloWorld = async () => {
    try {
      setLoading(true);
      const {
        data: { message },
      } = await fetchHelloWorld();
      setActiveContent(JSON.stringify(message, null, 2));
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const onFetchPokedex = async () => {
    try {
      setLoading(true);
      const { data } = await fetchPokedex();
      setActiveContent(JSON.stringify(data, null, 2));
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

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
        <Button onClick={onFetchProfile} colorScheme="blue">
          Profile
        </Button>
        <Button onClick={onFetchUsers} colorScheme="red">
          Users
        </Button>
        <Button onClick={onFetchHelloWorld} colorScheme="yellow">
          Hello World!
        </Button>
        <Button onClick={onFetchPokedex} colorScheme="green">
          Pokedex
        </Button>
      </Flex>

      {activeContent && (
        <Skeleton
          mt="2rem"
          width="500px"
          minHeight="250px"
          maxHeight="500px"
          endColor="purple.500"
          startColor="purple.300"
          isLoaded={!isLoading && Boolean(activeContent)}
        >
          <CodeBlock
            customStyle={{
              minHeight: '250px',
              maxHeight: '500px',
              overflow: 'scroll',
            }}
            text={activeContent ?? 'None'}
            theme={atomOneLight}
            language="json"
          />
        </Skeleton>
      )}
    </>
  );
};

export default Content;
