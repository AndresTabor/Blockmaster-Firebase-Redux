/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import { doc, updateDoc, arrayUnion, getDoc, onSnapshot } from "@firebase/firestore";
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

export const addMovieAsync = ( newMovie, keyUser ) => {
    const userDataRef = doc(db, "moviesDB", `${keyUser}`);
    //moviesDB
    return( dispatch ) => {
        updateDoc(userDataRef, { 
            upload_movies: arrayUnion( newMovie ), merge: true
        })
        .then(resp =>{
            dispatch( addMovie( newMovie ))
        })
        .catch(e=> {
            console.log( e );
        })
    }
}

export const deleteMovieAsync = ( id, keyUser ) =>{
    console.log("elimino");
    return( dispatch ) => {
        const userDataRef = doc(db, "moviesDB", `${keyUser}`);
         getDoc(userDataRef)
        .then( resp => {
            const dataMovies = resp._document.data.value.mapValue.fields.upload_movies.arrayValue.values;
            const focusMovies = dataMovies.filter( movie => movie.mapValue.fields.id.stringValue !== id)
            //console.log(focusMovies);
            const updateMovies = []
            focusMovies.map( element => {
                const movie = {
                    overview: element.mapValue.fields.overview.stringValue,
                    poster_path:  element.mapValue.fields.poster_path.stringValue,
                    title:  element.mapValue.fields.title.stringValue,
                    vote_average:  element.mapValue.fields.vote_average.stringValue,
                    id:  element.mapValue.fields.id.stringValue,
    
                }
                updateMovies.push(movie)
            })
            updateDoc(userDataRef, { 
                upload_movies: updateMovies
            })
            dispatch( deleteMovie( id )) 
        }).catch( e => console.log(e))          
    }
}

export const deleteMovie = ( id ) => {
    return{
        type: typesMovies.delete,
        payload: id
    }
}

export const listMoviesAsync = ( keyUser, typeList ) => {
    console.log( typeList );
    return( dispatch ) => {
        const userDataRef = doc(db, "moviesDB", `${keyUser}`);
        const unsub = onSnapshot(userDataRef, (doc) => {
            if ( typeList === 'upload_movies') {
                const movieData = ( doc.data().upload_movies)
                console.log( movieData );
                dispatch( listMovies( movieData, typeList ) )
            }else {
                const movieData = ( doc.data().favorites)
                console.log( movieData );
                dispatch( listMovies( movieData, typeList ) )
            }
        })
    }
}

export const listMovies = ( moviesData, typeList ) => {
    if ( typeList === 'upload_movies' ) {
        return{
            type: typesMovies.list_movies,
            payload: moviesData
        }        
    }else{
        return{
            type: typesMovies.list_favorites,
            payload: moviesData
        } 
    }
}

export const updateMovieAsync = () =>{
    return async ( dispatch )=>{
        
    } 
}
