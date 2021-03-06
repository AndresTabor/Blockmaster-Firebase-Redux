/* eslint-disable react-hooks/exhaustive-deps */
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { loginSincrono } from '../actions/authActions/actionLogin';
import { AuthContext } from '../context/authContext'
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const AppRouter = () => {
  const [isLoggin, setIsLoggin] = useState()
  const [userKey, setUserKey] = useState('')
  const [userData, setUserData] = useState({})
 // const [checking, setChecking] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if(user?.uid){
          dispatch( loginSincrono( user.uid, user.displayName, user.photoURL ) )
          console.log(user)
          setUserData( user )
          setUserKey( user.uid )
          setIsLoggin(true)
        }
        else{
          //console.log('no logueado')
          setIsLoggin(false)
        }
    })
  }, [setIsLoggin])

  return <>
      <AuthContext.Provider value={{ isLoggin, userKey, userData }}>
        <BrowserRouter>
        {
          isLoggin === true?
          <PrivateRoutes/> 
          : isLoggin === undefined ?
          console.log("cat")
          :<PublicRoutes/>
        }                                                                                     
        </BrowserRouter>

      </AuthContext.Provider>
  </>;
};

export default AppRouter;
