import '@testing-library/jest-dom'
import { loginSincrono, logoutSincrono } from '../../actions/authActions/actionLogin';

import { typesUser } from '../../types/types'

describe('Verificar acciones de Login', () =>{
    test('Validar login sincrono', () => { 
        const uid = 'ABC123';
        const dsplayName = 'Fernando';
        const photo = 'https://res.cloudinary.com/andrestaborda/image/upload/v1645128775/kmwfunhgj70wxajqa1rl.jpg';

        const loginAction = loginSincrono( uid, dsplayName, photo );
        
        expect( loginAction ).toEqual({
            type: typesUser.login,
            payload:{
                id:   uid,
                name: dsplayName,
                photo_url:photo
            }
        }); 
    })
    test('Verificar accion de logout', () => { 

        const logoutAction = logoutSincrono();
        
        expect( logoutAction ).toEqual({
            type: typesUser.logout,
            payload: {}
        }); 
    })
})