import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../components/Home';
import Login from '../components/Login';
import Registro from '../components/Registro';




const PublicRoutes = ( ) => {
  // const { isLoggin } = useContext(AuthContext)
  //   console.log( isLoggin );    
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Registro/>}/> 
      <Route path='/*' element={<Navigate to='/'/>}/>                                                                           
    </Routes>
    </>
  )
}

export default PublicRoutes