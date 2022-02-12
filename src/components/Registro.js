import React from 'react';
import { Form } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { loginGoogleAsync } from '../actions/authActions/actionLogin';
import { registerAsync } from '../actions/authActions/actionRegister';
import { useForm } from '../hooks/useForm';
import { OverlayForm } from '../styles/authStyles/FormStyle';
import { BtnForm } from '../styles/authStyles/FormStyle';

const Registro = () => {

    const dispatch = useDispatch();

    const [ registro, handleFormChange ] = useForm({
        name:   '',
        email:    '',
        password: ''
        
    })

    const { name, email, password } = registro

    

    const handleRegisterGoogle = () => {
        dispatch(loginGoogleAsync())
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        dispatch( registerAsync( email, password, name))
    }
  return <>
            <OverlayForm>
                <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Nombre Completo</Form.Label>
                    <Form.Control type="text" 
                    placeholder="Nombres y apellidos" 
                    name='name'
                    required                    
                    onChange={handleFormChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control type="email" 
                    placeholder="ejemplo@ejemplo.com" 
                    name='email'
                    required                    
                    onChange={handleFormChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" 
                    placeholder="*******" 
                    name='password'
                    required                    
                    onChange={handleFormChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupBtn">
                    <BtnForm>
                        <span>Registrarse</span>
                    </BtnForm>
                </Form.Group>
                <BtnForm onClick={() => handleRegisterGoogle()}>
                    <FcGoogle/> <span>Register with Google</span>
                </BtnForm>
                </Form>
            </OverlayForm>;
        </>;
};

export default Registro;
