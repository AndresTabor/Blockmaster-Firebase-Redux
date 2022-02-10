import { typesUser } from "../../types/types";
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { google } from "../../firebaseConfig/firebaseConfig";

const auth = getAuth();

export const loginSincrono = ( uid, dsplayName ) => {
    return{

        type: typesUser.login,
        payload: {
            id:   uid,
            name: dsplayName
        }
        
    }
}

export const loginGoogleAsync = () => {
    return( dispatch ) => {
        
        signInWithPopup( auth, google )
        .then( ( {user} ) => {
            console.log( user.displayName );
            dispatch(loginSincrono( user.uid, user.displayName));
        })
        .catch( error => {
            console.log( error.code );
        })
    }
}

export const loginWithEmailPass = ( email, password ) => {
    return( dispatch ) => {
        
        signInWithEmailAndPassword( auth, email, password )
        .then( ( {user} ) => {
            console.log( user );
            dispatch(loginSincrono( user.uid, user.displayName));
        })
        .catch( error => {
            console.log( error.code );
            if (error.code === "auth/invalid-email") {
                alert("Correo invalido")
            }else if( error.code === "auth/wrong-password"){
                alert("Contraseña incorrecta")
            }
        })
    }
}