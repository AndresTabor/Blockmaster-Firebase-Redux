import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import ProfileUser from '../components/ProfileUser'
import RegistroMovie from '../components/RegistroMovie'




const PrivateRoutes = ( ) => {
    // const { isLoggin } = useContext(AuthContext)
    // console.log( isLoggin );
  return (

    <> 
    <Routes>
      <Route path='/' element={<Home/>}/>        
      <Route path='/profile' element={<ProfileUser/>}/> 
      <Route path='/*' element={<Navigate to='/'/>}/>
      <Route path='/registerMovie' element={<RegistroMovie/>}/>          
    </Routes>
    </>
  )
}

export default PrivateRoutes