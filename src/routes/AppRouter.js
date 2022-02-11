import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../components/Login';
import { AuthContext } from '../context/authContext'
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const AppRouter = () => {
  const [isLoggin, setIsLoggin] = useState()
 // const [checking, setChecking] = useState(true)
  

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if(user?.uid){
          console.log(user)
          setIsLoggin(true)
        }
        else{
          console.log('no logueado')
          setIsLoggin(false)
        }
        //setChecking(false)
    })

 
  }, [setIsLoggin])


  // if(checking){
  //   return(
  //       <h1>Espere...</h1>
  //   )
  // }
  
  return <div>
      <AuthContext.Provider value={{ isLoggin }}>
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
  </div>;
};

export default AppRouter;
