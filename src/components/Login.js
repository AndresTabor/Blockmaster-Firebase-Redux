import React from 'react';
import { Form } from 'react-bootstrap';
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from 'react-redux';
import { loginGoogleAsync, loginWithEmailPass, logoutAsync } from '../actions/authActions/actionLogin';
import { useForm } from '../hooks/useForm';
import { OverlayForm } from '../styles/authStyles/FormStyle';
import { BtnForm } from '../styles/authStyles/FormStyle';

const Login = () => {
    const dispatch = useDispatch();
    const [ registro, handleFormChange ] = useForm({
        email:    '',
        password: ''
        
    })

    const { email, password } = registro

    const handleLoginGoogle = () => {
        dispatch(loginGoogleAsync())
    }
    const handleSubmit = ( e ) => {
        e.preventDefault();
    }

    const handleLoginEmailPass = () => {
        dispatch( loginWithEmailPass( email, password))
    }

    return <OverlayForm>
                <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control type="email" 
                    placeholder="Ejemplo@ejemplo.com"
                    name='email' 
                    onChange={handleFormChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" 
                    placeholder="*****"
                    name='password' 
                    onChange={handleFormChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <BtnForm type='submit' onClick={() => handleLoginEmailPass()}>
                        <span>Iniciar sesión</span>
                    </BtnForm>
                </Form.Group>
                <BtnForm type='button' onClick={() => handleLoginGoogle()}>
                    <FcGoogle/> <span>Sign in with Google</span>
                </BtnForm>
                <BtnForm type='button' onClick={() => dispatch(logoutAsync())}>
                    <span>Logout</span>
                </BtnForm>
                </Form>
            </OverlayForm>;
};

export default Login;
