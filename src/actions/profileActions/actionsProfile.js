import { getAuth, updateProfile, deleteUser } from "firebase/auth";
import { doc, updateDoc, deleteDoc } from "@firebase/firestore";
//import { typesUser } from "../../types/types"
import { db } from "../../firebaseConfig/firebaseConfig";
import { logoutSincrono } from "../authActions/actionLogin";


const auth = getAuth();

export const updateUserAsync = ( newData, keyUser ) => {
    console.log(newData.photo_url);
    const userDataRef = doc(db, "moviesDB", `${keyUser}`);
    return() => {
        updateProfile( auth.currentUser,{
            displayName: newData.name,
            email: newData.email,
            photoURL:newData.photo_url
        }).then( resp => {
            updateDoc(userDataRef, { 
               name: newData.name,
               email: newData.email,
               photo_url:newData.photo_url
            })
        }).catch( e => console.log( e )) 
    }
}


export const deleUserAsync = () => {
    return ( dispatch ) => {
        const user = auth.currentUser;        
        deleteUser(user)
        .then( () => {
            dispatch( logoutSincrono );
            deleteDoc(doc(db, "moviesDB", user.uid))
            .then(resp => console.log( resp ))            
        })
        .catch( e => {
            console.log( e );
        });
        
    }
}