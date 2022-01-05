import { Box, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

import { checkIfObjectEmpty } from 'helpers/utils';
import useUserData from 'hooks/useUserData';
import LoginForm from 'components/LoginForm';
import Content from 'components/Content';
import { addAxiosRequestHeader } from 'api/config';

const Home: NextPage = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const user = useUserData();

  useEffect(() => {
    if (!checkIfObjectEmpty(user)) {
      setLoggedIn(true);
      addAxiosRequestHeader(user?.token as string);
    } else setLoggedIn(false);
  }, [user]);

  const childrenProps = {
    setLoggedIn: setLoggedIn,
  };

  return (
    <Box
      w="100vw"
      bg="black"
      minH="100vh"
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
    >
      <Heading color="white" mb="1.5rem">
        Serverless Auth Demo
      </Heading>

      {!isLoggedIn ? (
        <LoginForm {...childrenProps} />
      ) : (
        <Content username={user?.username} {...childrenProps} />
      )}
    </Box>
  );
};

export default Home;
