import { typesUser } from "../../types/types";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { google } from "../../firebaseConfig/firebaseConfig";
import { doc, setDoc } from "@firebase/firestore";
import { db } from "../../firebaseConfig/firebaseConfig";


const auth = getAuth();


export const logoutAsync = () => {
    return( dispatch ) => {
        const auth = getAuth();
        signOut(auth)
        .then(user => {
            alert( 'Vuelve Pronto' )
            dispatch(logoutSincrono())
            window.location = '/';
        })
        .catch(error => {
            console.log(error)
        })
    }
}
export const logoutSincrono = () => {
    return{
        type: typesUser.logout,
        payload: {}
    }
 }

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
            alert( 'welcome' )
            dispatch(loginSincrono( user.uid, user.displayName));
            
            const userRef = doc(db, 'moviesDB', `${user.uid}`);
            console.log( userRef );                             
            setDoc(userRef,{
                name: user.displayName,
                email:user.email,                    
                favorites: [],
                upload_movies: []
            },{ merge: true })
            .then(resp => console.log(resp))
            .catch(error => console.log(error)) 
            //window.location = '/';
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
            alert( 'welcome' )
            dispatch(loginSincrono( user.uid, user.displayName));
            window.location = '/';
        })
        .catch( error => {
            console.log( error.code );
            if (error.code === "user-not-found") {
                alert("Correo invalido")
            }else if( error.code === "auth/wrong-password"){
                alert("Contraseña incorrecta")
            }else if (error.code === "user-not-found"){
                alert("usuario no enontrdo")
            }
        })
    }
}