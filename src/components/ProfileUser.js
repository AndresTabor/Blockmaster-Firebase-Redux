import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logoutAsync } from '../actions/authActions/actionLogin'
import { BtnForm } from '../styles/authStyles/FormStyle'
import { MdFavorite, MdLocalMovies, MdOutlineArrowBackIosNew } from 'react-icons/md'
import { RiVideoUploadFill } from 'react-icons/ri'
import { HiUser } from 'react-icons/hi'
import { BackArrow, InfoList, InfoTitle, NavbarProfile, NavList, SectionProfile } from '../styles/profileStyles/NavProfileStyle'
import UserData from './UserData'
import UploadMovies from './UploadMovies'



const ProfileUser = () => { 
  const [info, setinfo] = useState('Mi perfil')
  

  const dispatch = useDispatch();

  return (
    <SectionProfile id='profile-section'>
      <NavbarProfile id="navbar-profile">
        <NavLink
        name="Back"
        className="nav-link text-white"
        to="/">
          <BackArrow>
            <MdOutlineArrowBackIosNew/>                          
          </BackArrow>
        </NavLink>
        <div className='text-center'>
          <img src='https://i.ibb.co/sKZXF1S/avatar3.png' alt='avatar' width='50%'/> 
        </div>
        <NavList>
            <li>
              <NavLink
              name="Profile"
              className="nav-link text-white"
              to="/profile">
                <HiUser/>
                <span> Perfil </span>
              </NavLink>
            </li>
            <li>
              <NavLink
              name="Profile"
              className="nav-link text-white"
              to="/profile">
                <MdFavorite/>
                <span> Favoritas </span>
              </NavLink>
            </li>
            <li>
              <NavLink
              name="Profile"
              className="nav-link text-white"
              to="/profile">
                <MdLocalMovies/>
                <span> Mis Películas </span>
              </NavLink>
            </li>
            <li>
              <NavLink
              name="Profile"
              className="nav-link text-white"
              to="/registerMovie">
                <RiVideoUploadFill/>
                <span> Subir Película </span>
              </NavLink>
            </li> 
            <BtnForm type='button'
            className='mt-5 w-100 btn-outline-warning' 
            onClick={() => dispatch(logoutAsync())}>
              <span>Logout</span>
            </BtnForm>           
        </NavList>
      </NavbarProfile>
      <InfoList id='info-list'>
        <InfoTitle id='info-title'> {info} </InfoTitle>
        {/* <UserData/> */}
        <UploadMovies/>
      </InfoList>
      
    </SectionProfile>
  )
}

export default ProfileUser