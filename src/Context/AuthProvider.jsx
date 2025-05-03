import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../Components/Authintication/fireBase';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [load, setLoad] = useState(true)
  const createUser = (email, password) => {
    setLoad(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const LoginUser = (email, password) => {
    setLoad(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logOut = () => {
    setLoad(true)
    return signOut(auth)
  }

  useEffect(() => {

    const usSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log('user inside useEffect', currentUser)
      setUser(currentUser)
      setLoad(false)
    })
    return () => {
      usSubscribe()
    }

  }, [])

  const userInfo = { createUser, LoginUser, user, logOut, load }
  return (
    <AuthContext value={userInfo}>
      {children}
    </AuthContext>

  );
};

export default AuthProvider;