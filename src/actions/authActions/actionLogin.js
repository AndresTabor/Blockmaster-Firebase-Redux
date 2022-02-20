import { typesUser } from "../../types/types";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { google } from "../../firebaseConfig/firebaseConfig";
import { doc, setDoc, collection, query, where, getDocs } from "@firebase/firestore";
import { db } from "../../firebaseConfig/firebaseConfig";


const auth = getAuth();


export const logoutAsync = () => {
    return( dispatch ) => {
        const auth = getAuth();
        signOut( auth )
        .then(user => {
            dispatch( logoutSincrono() )
            window.location = '/';
        })
        .catch(error => {
            console.log( error )
        })
    }
}
export const logoutSincrono = () => {
    return{
        type: typesUser.logout,
        payload: {}
    }
 }

export const loginSincrono = ( uid, dsplayName, photo ) => {
    return{

        type: typesUser.login,
        payload: {
            id:   uid,
            name: dsplayName,
            photo_url:photo
        }
        
    }
}


export const loginGoogleAsync = () => {
    return async( dispatch ) => {
        
        signInWithPopup( auth, google )
        .then( async ( {user} ) => {
            dispatch( loginSincrono( user.uid, user.displayName, user.photoURL ) );
            const q = query(collection(db, "moviesDB"), where("email", "==", user.email));     
            const validacion = await getDocs(q)
            const response = await validacion.docs
            if (response.length === 0) {
                updateProfile( auth.currentUser,{                
                    photoURL:'https://i.ibb.co/sKZXF1S/avatar3.png'
                }).then(rep => {                    
                    dispatch( loginSincrono( user.uid, user.displayName, user.photoURL ) );
                    const userRef = doc(db, 'moviesDB', `${user.uid}`);
                    setDoc(userRef,{
                        name: user.displayName,
                        email:user.email,
                        photo_url: 'https://i.ibb.co/sKZXF1S/avatar3.png',                    
                        favorites: [],
                        upload_movies: []
                    } )
                })
            }                          
            
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