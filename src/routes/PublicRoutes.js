import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home';
import Login from '../components/Login';
import Registro from '../components/Registro';
import RegistroMovie from '../components/RegistroMovie';

import { AuthContext } from '../context/authContext'

const PublicRoutes = ( ) => {
  // const { isLoggin } = useContext(AuthContext)
  //   console.log( isLoggin );    
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Registro/>}/> 
      <Route path='/registerMovie' element={<RegistroMovie/>}/>                                                                            
    </Routes>
    </>
  )
}

export default PublicRoutes