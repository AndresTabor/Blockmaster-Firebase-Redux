import React from 'react';
import { Form } from 'react-bootstrap';
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from 'react-redux';
import { loginGoogleAsync, loginWithEmailPass } from '../actions/authActions/actionLogin';
import { AiOutlineClose } from 'react-icons/ai';
import { useForm } from '../hooks/useForm';
import { BtnClose, BtnFormRegister, OverlayForm } from '../styles/authStyles/FormStyle';
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
    const closeForm = () => {
        document.getElementById('form-login').style.display="none";
    }
    const showRegister = () => {  
        closeForm()      
        document.getElementById('form-register').style.display="block";
    }

    return <OverlayForm id='form-login'>
                <Form onSubmit={handleSubmit}>
                <BtnClose onClick={() => closeForm()}>
                    <AiOutlineClose/>
                </BtnClose>
                <div className='text-center mt-1 mb-5'> 
                    <img src="https://res.cloudinary.com/andrestaborda/image/upload/v1638995924/BlockMasterLogo_1_avst1e.svg"
                    width="150px" 
                    alt='Logo Block Master'
                    />                        
                </div>
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
                    placeholder="************"
                    name='password' 
                    onChange={handleFormChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <BtnForm type='submit' className="btn text-black btn-outline-warning w-100" onClick={() => handleLoginEmailPass()}>
                        <span>Iniciar sesión</span>
                    </BtnForm>
                </Form.Group>
                <BtnForm type='button' className="btn  text-black btn-outline-warning w-100" onClick={() => handleLoginGoogle()}>
                    <FcGoogle/> <span>Inicia con Google</span>
                </BtnForm>
                <BtnFormRegister type='button' className="w-100" onClick={() => showRegister()}>
                    Registrate
                </BtnFormRegister>
                
                </Form>
            </OverlayForm>;
};

export default Login;
