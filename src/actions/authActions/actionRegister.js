import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { doc, addDoc } from "@firebase/firestore";
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
            updateProfile( auth.currentUser,{
                displayName: name
            }).then( () => {
                console.log( user );                              
                addDoc(doc(db, "moviesDB", `${user.uid}`),{
                    name: user.displayName,
                    email:email,
                    password: password,
                    favorites: [],
                    upload_movies: []
                },{ merge: true }).then(resp => console.log(resp))
            })
            //dispatch( regitroSincrono( email, password, name ) )
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