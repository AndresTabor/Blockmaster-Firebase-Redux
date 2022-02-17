import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { doc, setDoc } from "@firebase/firestore";
import { typesUser } from "../../types/types"
import { db } from "../../firebaseConfig/firebaseConfig";

const auth = getAuth();

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
            console.log( user );           
            updateProfile( auth.currentUser,{
                displayName: name
            }).then( resp => {
                console.log( user ); 
                const userRef = doc(db, 'moviesDB', `${user.uid}`)                             
                setDoc(userRef,{
                    name: user.displayName,
                    email:email,                    
                    favorites: [],
                    upload_movies: []
                }).then(resp => console.log(resp))
            })
            dispatch( regitroSincrono( email, password, name ) )
        })  
        .catch( error => {
            console.log( error.code );
            if (error.code === "auth/email-already-in-use") {
                alert("Correo electrónico esta en uso");
            }else if (error.code === "auth/weak-password"){
                alert("La contraseña debe tener minimo 10 caracteres");
            }
        })
    }
}