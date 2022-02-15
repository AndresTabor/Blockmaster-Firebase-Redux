import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutAsync } from '../actions/authActions/actionLogin'
import { BtnForm } from '../styles/authStyles/FormStyle'

const ProfileUser = () => {
  
  const dispatch = useDispatch();

  return (
    <div>
      <BtnForm type='button' onClick={() => dispatch(logoutAsync())}>
        <span>Logout</span>
      </BtnForm>
    </div>
  )
}

export default ProfileUser