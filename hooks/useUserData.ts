import { useEffect, useState } from 'react';

import { loadUser } from 'helpers/user';

const useUserData = () => {
  const [user, setUser] = useState(loadUser);

  useEffect(() => {
    const handleChangeStorage = () => setUser(loadUser);

    window.addEventListener('storage', handleChangeStorage);
    return () => window.removeEventListener('storage', handleChangeStorage);
  }, []);

  return user;
};

export default useUserData;
