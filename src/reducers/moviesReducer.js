import { typesMovies } from "../types/types";

const inicialState = {
    movies:[]
}

export const moviesReducer = ( state= inicialState, action) => {
    switch ( action.type ) {
        case typesMovies.add:
            return{
                movies: [...state.movies, action.payload]
            }
        case typesMovies.delete:
            return{
                
            }    
        case typesMovies.list:
            return{
                    
            }
        default:
            return state
    }
}