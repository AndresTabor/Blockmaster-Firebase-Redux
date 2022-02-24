import '@testing-library/jest-dom'
import { loginReducer, registroReducer } from '../../reducers/userReducer'
import { typesUser } from '../../types/types'

describe('Pruebas en LoginReducer', () =>{
    test('debe de realizar el login', () => {
        const initState = {};
        const action = {
            type: typesUser.login,
            payload:{
                id:   '2549dfdzsd',
                name: 'Andres',
                photo_url: 'https://res.cloudinary.com/andrestaborda/image/upload/v1645128775/kmwfunhgj70wxajqa1rl.jpg'
            }
        };
        const state = loginReducer( initState, action );
        expect( state ).toEqual({
            id:   action.payload.id,
            name: action.payload.name,
            photo_url: action.payload.photo_url
        }) 
    })
    test('debe de realizar registro', () => {
        const initState = {};
        const action = {
            type: typesUser.registro,
            payload:{
                email:'jose@gmail.com' ,  
                password: 'c1234567',
                name: 'andres'   
            }
        };
        const state = registroReducer( initState, action );
        expect( state ).toEqual({
            email:   action.payload.email,
            password: action.payload.password,
            name: action.payload.name
        }) 
    })
    
})