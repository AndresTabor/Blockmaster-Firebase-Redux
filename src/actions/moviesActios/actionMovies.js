import { addDoc, collection } from "@firebase/firestore";
import { db } from "../../firebaseConfig/firebaseConfig";
import { typesMovies } from "../../types/types";

export const addMovie = ( movie ) => {

    return{
        type: typesMovies.add,
        payload:{
            title: movie.title,
            overview: movie.overview,
            vote_average: movie.vote_average,
            poster_path: movie.poster_path
        }
    }
}

export const addMovieAsync = ( newMovie ) => {
    //moviesDB
    return( dispatch ) => {
        addDoc(collection(db,"moviesDB"),newMovie)
        .then(resp=>{
            console.log( resp )
            dispatch( addMovie( newMovie ))
        })
        .catch(e=> {
            console.log( e );
        })
    }
}
