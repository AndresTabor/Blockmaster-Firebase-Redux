import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import ProfileUser from '../components/ProfileUser'
import { AuthContext } from '../context/authContext'



const PrivateRoutes = ( ) => {
    const { isLoggin } = useContext(AuthContext)
    console.log( isLoggin );
  return (

    <> 
    <Routes>
      <Route path='/' element={<Home/>}/>        
      <Route path='/profile' element={<ProfileUser/>}/> 
      <Route path='/*' element={<Navigate to='/'/>}/>         
    </Routes>
    </>
  )
}

export default PrivateRoutes