import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../components/Login';
import Navbar from '../components/Navbar';
import Registro from '../components/Registro';

const AppRouter = () => {
  
  return <div>

      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Navbar/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Registro/>}/>
        </Routes>
      </BrowserRouter>
  </div>;
};

export default AppRouter;
