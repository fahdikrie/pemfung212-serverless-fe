import { ProfileProps } from 'types/profile';

const Profile = ({ user }: ProfileProps): JSX.Element => {
  const { name, fullname, username } = user;

  return (
    <>
      {name} {fullname} {username}
    </>
  );
};

export default Profile;
