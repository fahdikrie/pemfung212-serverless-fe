import { Box, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';

import useUserData from 'hooks/useUserData';
import SignUpForm from 'components/SignUpForm';
import { checkIfObjectEmpty } from 'helpers/util';

const SignUp: NextPage = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const router = useRouter();
  const user = useUserData();

  useEffect(() => {
    if (!checkIfObjectEmpty(user)) setLoggedIn(true);
    else setLoggedIn(false);
  }, [user]);

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
      {!isLoggedIn ? <SignUpForm /> : router.replace('/')}
    </Box>
  );
};

export default SignUp;
