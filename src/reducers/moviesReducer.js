import { typesMovies } from "../types/types";

const inicialState = {
    movies:[],
    favorites: []
}

export const moviesReducer = ( state= inicialState, action) => {
    switch ( action.type ) {
        case typesMovies.add:
            return{
                movies: [...state.movies, action.payload],
                favorites: [...state.favorites]
            }
        case typesMovies.add_favorites:
            return{
                movies: [...state.movies],
                favorites: [...state.favorites, action.payload]
            }
        case typesMovies.delete:
            return{
                movies: state.movies.filter(movie => movie.id !== action.payload),
                favorites: [...state.favorites]
            }
        case typesMovies.updat:
            return{
                movies: [...action.payload],
                favorites: [...state.favorites]
            }    
        case typesMovies.list_movies:
            return{
                movies: [...action.payload],
                favorites: [...state.favorites]
            }
        case typesMovies.list_favorites:
            return{
                movies: [...state.movies],
                favorites: [...action.payload]
            }
        default:
            return state
    }
}