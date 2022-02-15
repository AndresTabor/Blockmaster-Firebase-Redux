import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutAsync } from '../actions/authActions/actionLogin'
import { BtnForm } from '../styles/authStyles/FormStyle'

const ProfileUser = () => {
  const dispatch = useDispatch
  return (
    <di>
      <div><h1 className='text-light'>ProfileUser</h1></div>
      <BtnForm type='button' onClick={() => dispatch(logoutAsync())}>
        <span>Logout</span>
      </BtnForm>
    </di>
  )
}

export default ProfileUser