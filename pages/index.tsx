import { Box, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';

import LoginForm from 'components/LoginForm';

const Home: NextPage = () => {
  const isLoggedIn = false;

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
      {isLoggedIn ? <></> : <LoginForm />}
    </Box>
  );
};

export default Home;
