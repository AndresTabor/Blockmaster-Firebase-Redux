import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { doc, setDoc } from "@firebase/firestore";
import { typesUser } from "../../types/types"
import { db } from "../../firebaseConfig/firebaseConfig";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { loginSincrono } from "./actionLogin";

const auth = getAuth();
const MySwal = withReactContent(Swal);
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 900,
    timerProgressBar: true,
})

export const regitroSincrono = ( email, password, name) => {
    return{
        type: typesUser.registro,
        payload: {
            email,
            password,
            name
        }
    }
}

export const registerAsync = ( email, password, name) =>{
    
    return( dispatch ) => {
        createUserWithEmailAndPassword( auth, email, password )
        .then( ({user} ) => {                                   
            updateProfile( auth.currentUser,{
                displayName: name,
                photoURL:'https://i.ibb.co/sKZXF1S/avatar3.png'                
            }).then( resp => {
                Toast.fire({
                    icon: 'success',
                    title: 'Signed in successfully'
                })
                dispatch( loginSincrono( user.uid, user.displayName, user.photoURL ) );
                //console.log( user ); 
                const userRef = doc(db, 'moviesDB', `${user.uid}`)                             
                setDoc(userRef,{
                    name: user.displayName,
                    email:email,
                    photo_url:'https://i.ibb.co/sKZXF1S/avatar3.png',                    
                    favorites: [],
                    upload_movies: []
                }).then(resp => console.log(resp))
            })
            dispatch( regitroSincrono( email, password, name ) );
            
        })  
        .catch( error => {
            console.log( error.code );
            if ( error.code === "auth/email-already-in-use" ) {
                //alert( "Correo electrónico esta en uso" );
                MySwal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Correo electrónico en uso',
                    customClass:{
                            confirmButton: 'btn-alert',
                            actions: 'actions-alerts',
                    }                                                
                })
            }else if ( error.code === "auth/weak-password" ){
                //alert( "La contraseña debe tener minimo 10 caracteres" );
                MySwal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'La contraseña debe tener minimo 10 carácteres',
                    customClass:{
                            confirmButton: 'btn-alert',
                            actions: 'actions-alerts',
                    }                                                
                })
            }
        })
    }
}