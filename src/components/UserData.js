import React, { useContext, useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { loginSincrono } from '../actions/authActions/actionLogin'
import { deleUserAsync, updateUserAsync } from '../actions/profileActions/actionsProfile'
import { AuthContext } from '../context/authContext'
import { useForm } from '../hooks/useForm'
import { ActionsBtn, AvatarImage, BtnAvatar, DataContainer, H2, UserDataContainer } from '../styles/profileStyles/UserDataStyle'
import AvatarModal from './AvatarModal'


const UserData = () => {
    const dispatch = useDispatch();
    const { userData, userKey } = useContext( AuthContext )
    const [count, setCount] = useState( 1 )
    const [avatar, setAvatar] = useState( userData.photoURL )
    const [changeAvatar, setChangeAvatar] = useState( false )

    useEffect(() => {
      console.log('montaje');
      document.getElementById( 'btn-avatar' ).disabled = true;
    }, [])
    
    const handleSubmit = ( e ) => {
        e.preventDefault();
    }

    const [ registro, handleFormChange ] = useForm({
        name: userData.displayName,
        email: userData.email,
        password: '',
        photo_url:avatar
        
    })

    const { name, email, password } = registro

    const showAvatars = () => {
        setChangeAvatar( true );
    }

    const editData = () => {                
        const editName = document.getElementById( 'input-name' );
        const editEmail = document.getElementById( 'input-email' );
        const btnEdit = document.getElementById('btn-edit');
        const editPass = document.getElementById( 'input-pass' );
        const btnAvatar = document.getElementById( 'btn-avatar' );
        btnAvatar.disabled= false;
        editName.disabled = false;      
        btnEdit.innerHTML = 'Confirmar'
        if ( userData.providerData[0].providerId !== 'google.com' ) {
            editPass.disabled = false;
            editEmail.disabled = false;
        } 
        if ( count % 2 === 0 ) {
            registro.photo_url= avatar;
            dispatch( updateUserAsync( registro, userKey ) );
            dispatch( loginSincrono( userKey, name, avatar ) ); 
            setCount( 1 );
            setChangeAvatar( false );
            editName.disabled = true;
            editPass.disabled = true;
            editEmail.disabled = true; 
            btnAvatar.disabled= true;
            btnEdit.innerHTML = 'Editar';
        }else{
            setCount( count + 1 );
        }        
        console.log(count);
    }  
    
    const cancelEdit = () => {
        setChangeAvatar( false );
        setAvatar( userData.photoURL )
        if (count !== 1) {
            document.getElementById( 'input-name' ).disabled = true;
            document.getElementById( 'input-email' ).disabled = true;
            document.getElementById( 'input-pass' ).disabled = true;
            document.getElementById( 'btn-avatar' ).disabled = true;
            document.getElementById('btn-edit').innerHTML = 'Editar'; 
            setCount( 1 ); 
            registro.name = userData.displayName;
            registro.email = userData.email;
            registro.password = ''                       
        }
    }

  return (
    <DataContainer>
        <H2 className='text-white'>¡Bienvenido, {userData.displayName}!</H2>
        <UserDataContainer>
            <BtnAvatar id='btn-avatar' className='btn' onClick={() => showAvatars()}>
                <AvatarImage src={avatar} alt='avatar'/> 
            </BtnAvatar>
            <Form onSubmit={handleSubmit} className='w-100 ms-3'>
                <Form.Group className="mb-2">
                    <Form.Label>Nombre Completo</Form.Label>
                    <Form.Control type="text" className='text-white'                  
                    name='name'
                    id='input-name'
                    value={name}
                    autoComplete='off'
                    disabled                
                    required                    
                    onChange={handleFormChange}/>
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control type="email" className='text-white ' 
                    name='email'
                    id='input-email'
                    value={email} 
                    autoComplete='off'
                    disabled
                    required                    
                    onChange={handleFormChange}/>
                </Form.Group>
                <Form.Group className="mb-2" >
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" 
                    placeholder="************" 
                    name='password'
                    id='input-pass'
                    value={password}
                    autoComplete='off'
                    disabled
                    required                    
                    onChange={handleFormChange}/>
                </Form.Group>
            </Form>
        </UserDataContainer>
        <ActionsBtn>
            <button type='button' id='btn-edit' className='text-white btn-warning' onClick={() => editData()}>Editar</button>
            <button type='button' id='btn-cancel' onClick={() => cancelEdit()}>Cancelar</button>
            <button type='button' id='btn-delete' onClick={() => dispatch( deleUserAsync() )}>Eliminar perfil</button>
        </ActionsBtn>
        {
            changeAvatar === true ?
            <AvatarModal showAvatar={changeAvatar} setAvatar={setAvatar}/>
            : console.log()
        }
    </DataContainer>
  )
}

export default UserData