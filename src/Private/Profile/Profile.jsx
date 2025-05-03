import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';

const Profile = () => {
  const { user } = useContext(AuthContext)
  return (
    <div>
      hi iam profiles
      <br />{user.email}
    </div>
  );
};

export default Profile;