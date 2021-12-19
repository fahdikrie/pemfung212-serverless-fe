import { Button } from '@chakra-ui/react';

import { clearUser } from 'helpers/user';
import { ContentProps } from 'types/content';

const Content = ({ setLoggedIn }: ContentProps): JSX.Element => {
  const onLogout = () => {
    clearUser();
    setLoggedIn(false);
  };

  return (
    <>
      <Button colorScheme="red" onClick={onLogout}>
        Logout
      </Button>
    </>
  );
};

export default Content;
