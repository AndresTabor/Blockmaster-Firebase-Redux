import { typesUser } from "../../types/types";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { google } from "../../firebaseConfig/firebaseConfig";
import { doc, setDoc, collection, query, where, getDocs } from "@firebase/firestore";
import { db } from "../../firebaseConfig/firebaseConfig";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const auth = getAuth();
const MySwal = withReactContent(Swal);
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 900,
    timerProgressBar: true,
})

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
            Toast.fire({
                icon: 'success',
                title: 'Signed in successfully'
            })
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
            Toast.fire({
                icon: 'success',
                title: 'Signed in successfully'
            })
            dispatch( loginSincrono( user.uid, user.displayName, user.photoURL ) );            
        })
        .catch( error => {
            console.log( error.code );
            switch ( error.code ) {                
                case 'auth/user-not-found':
                    MySwal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Email no registrado',
                        customClass:{
                            confirmButton: 'btn-alert',
                            actions: 'actions-alerts',
                        }                                                                       
                    })
                    break;    
                case 'auth/wrong-password':
                    MySwal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Contraseña incorrecta',
                        customClass:{
                            confirmButton: 'btn-alert',
                            actions: 'actions-alerts',
                        }                                                 
                    })
                    break; 
                default:
                    break;
            }
        })
    }
}
//user-not-found auth/wrong-password