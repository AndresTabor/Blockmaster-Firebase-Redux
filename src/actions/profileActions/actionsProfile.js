import { getAuth, updateProfile, deleteUser, reauthenticateWithCredential } from "firebase/auth";
import { doc, updateDoc, deleteDoc } from "@firebase/firestore";
//import { typesUser } from "../../types/types"
import { db } from "../../firebaseConfig/firebaseConfig";

const auth = getAuth();

export const updateUserAsync = ( newData, keyUser ) => {
    
    const userDataRef = doc(db, "moviesDB", `${keyUser}`);
    return() => {
        updateProfile( auth.currentUser,{
            displayName: newData.name,
            email: newData.email
        }).then( resp => {
            updateDoc(userDataRef, { 
               name: newData.name,
               email: newData.email
            })
        }).catch( e => console.log( e )) 
    }
}


export const deleUserAsync = () => {
    return () => {
        const user = auth.currentUser;
        
        deleteUser(user)
        .then( () => {
            deleteDoc(doc(db, "moviesDB", user.uid))
            .then(resp => console.log( resp ))            
        })
        .catch( e => {
            console.log( e );
        });
    }
}