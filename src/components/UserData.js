import React, { useContext } from 'react'
import { Form } from 'react-bootstrap'
import { AuthContext } from '../context/authContext'
import { useForm } from '../hooks/useForm'
import { ActionsBtn, AvatarImage, BtnAvatar, DataContainer, H2, UserDataContainer } from '../styles/profileStyles/UserDataStyle'


const UserData = () => {

    const { userData } = useContext( AuthContext )

    const handleSubmit = ( e ) => {
        e.preventDefault();
    }

    const [ registro, handleFormChange ] = useForm({
        name:   '',
        email:    '',
        password: ''
        
    })

    const { name, email, password } = registro
  return (
    <DataContainer>
        <H2 className='text-white'>¡Bienvenido, {userData.displayName}!</H2>
        <UserDataContainer>
            <BtnAvatar id='btn-avatar' className='btn'>
                <AvatarImage src='https://i.ibb.co/sKZXF1S/avatar3.png' alt='avatar'/> 
            </BtnAvatar>
            <Form onSubmit={handleSubmit} className='w-75 ms-3'>
                <Form.Group className="mb-2" controlId="formGroupEmail">
                    <Form.Label>Nombre Completo</Form.Label>
                    <Form.Control type="text" 
                    placeholder={userData.displayName} 
                    name='name'
                    autoComplete='off'
                    disabled
                    required                    
                    onChange={handleFormChange}/>
                </Form.Group>
                <Form.Group className="mb-2" controlId="formGroupEmail">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control type="email" 
                    placeholder={userData.email} 
                    name='email'
                    autoComplete='off'
                    disabled
                    required                    
                    onChange={handleFormChange}/>
                </Form.Group>
                <Form.Group className="mb-2" controlId="formGroupPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" 
                    placeholder="************" 
                    name='password'
                    autoComplete='off'
                    disabled
                    required                    
                    onChange={handleFormChange}/>
                </Form.Group>
            </Form>
        </UserDataContainer>
        <ActionsBtn>
            <button type='submit' disabled>Guardar</button>
            <button type='button' disabled>Cancelar</button>
            <button type='button' disabled>Eliminar perfil</button>
        </ActionsBtn>
    </DataContainer>
  )
}

export default UserData