import React from 'react';
import { Form } from 'react-bootstrap';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { registerAsync } from '../actions/authActions/actionRegister';
import { useForm } from '../hooks/useForm';
import { BtnClose, BtnFormRegister, OverlayForm } from '../styles/authStyles/FormStyle';
import { BtnForm } from '../styles/authStyles/FormStyle';

const Registro = () => {

    const dispatch = useDispatch();

    const [ registro, handleFormChange ] = useForm({
        name:   '',
        email:    '',
        password: ''
        
    })

    const { name, email, password } = registro

    const handleSubmit = ( e ) => {
        e.preventDefault();
        dispatch( registerAsync( email, password, name))
    }
    const closeForm = () => {
        document.getElementById('form-register').style.display="none";
    }
    const showLogin = () => {  
        closeForm()      
        document.getElementById('form-login').style.display="block";
    }
  return <>
            <OverlayForm id='form-register'>
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
                    placeholder="************" 
                    name='password'
                    required                    
                    minLength='10'                   
                    onChange={handleFormChange}/>
                </Form.Group>
                <Form.Group controlId="formGroupBtn">
                    <BtnForm className="btn text-black btn-outline-warning w-100">
                        <span>Registrarse</span>
                    </BtnForm>
                </Form.Group>
                <BtnFormRegister type='button' className="w-100" onClick={() => showLogin()}>
                    Inicia Sesión
                </BtnFormRegister>
                </Form>
            </OverlayForm>;
        </>;
};

export default Registro;
