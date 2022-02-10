import { typesUser } from "../types/types";


export const loginReducer = (state = {}, action) => {

    switch (action.type) {
        case typesUser.login:            
            return {
                id:   action.payload.id,
                name: action.payload.name
            }
        
        case typesUser.logout:            
           return {}
        default:
           return state
    }
} 

export const registroReducer = (state = {}, action) => {

    switch (action.type) {
        case typesUser.registro:            
            return {
                email:    action.payload.id,
                password: action.payload.password,
                name:     action.payload.name
            }

        default:
           return state
    }
} 