import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getCredentials from './AuthService';
import { addUsersData } from '../movixerSlice';

const AuthFlow = ({ children }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    const authenticateUser = async () => {
      const credentials = await getCredentials();
      if (credentials) {
        dispatch(addUsersData(credentials));
      }
    };
    authenticateUser();
  }, []);

  return isLoggedIn ? children : null;
};

export default AuthFlow;
