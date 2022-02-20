import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logoutAsync } from '../actions/authActions/actionLogin'
import { BtnForm } from '../styles/authStyles/FormStyle'
import { MdFavorite, MdLocalMovies, MdOutlineArrowBackIosNew } from 'react-icons/md'
import { RiVideoUploadFill } from 'react-icons/ri'
import { HiUser } from 'react-icons/hi'
import { BackArrow, BtnShowUpload, InfoList, InfoTitle, NavbarProfile, NavList, SectionProfile } from '../styles/profileStyles/NavProfileStyle'
import UserData from './UserData'
import UploadMovies from './UploadMovies'
import UploadModal from './UploadModal'



const ProfileUser = () => { 
  const [info, setinfo] = useState('Mi perfil')
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleShow = () => setShowModal(true);

  const changeInfo = ( data ) => {
    setinfo( data )
  }
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
          <img src='https://res.cloudinary.com/andrestaborda/image/upload/v1638995924/BlockMasterLogo_1_avst1e.svg' alt='avatar' width='50%'/> 
        </div>
        <NavList>
            <li>
              <NavLink
              name="Profile"
              className="nav-link text-white"
              to="/profile"
              onClick={() => changeInfo('Mi perfil')}>
                <HiUser/>
                <span> Perfil </span>
              </NavLink>
            </li>
            <li>
              <NavLink
              name="Profile"
              className="nav-link text-white"
              to="/profile"
              onClick={() => changeInfo( 'Mis favoritas' )}>
                <MdFavorite/>
                <span> Favoritas </span>
              </NavLink>
            </li>
            <li>
              <NavLink
              name="Profile"
              className="nav-link text-white"
              to="/profile"
              onClick={() => changeInfo( 'Mis películas' )}>
                <MdLocalMovies/>
                <span> Mis Películas </span>
              </NavLink>
            </li>
            <li>
              <BtnShowUpload onClick={() => handleShow()}>
                <RiVideoUploadFill/>
                <span> Subir Película </span>
              </BtnShowUpload>
              {/* <NavLink
              name="Profile"
              className="nav-link text-white"
              to="/registerMovie">
                <RiVideoUploadFill/>
                <span> Subir Película </span>
              </NavLink> */}
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
        {
          info === 'Mi perfil'? <UserData/>
          : <UploadMovies categoryList={info}/>          
        }
      </InfoList>
      <UploadModal setShowModal={setShowModal} showModal={showModal}/>
    </SectionProfile>
  )
}

export default ProfileUser