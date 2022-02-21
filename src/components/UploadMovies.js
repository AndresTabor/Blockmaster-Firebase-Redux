import React, { useContext, useEffect } from 'react'
import { BiCameraMovie } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux'
import { listMoviesAsync } from '../actions/moviesActios/actionMovies';
import { AuthContext } from '../context/authContext';
import { ListMoviesContainer } from '../styles/homeStyles/MoviesSectionStyle'
import { MessegeContainer } from '../styles/profileStyles/UserDataStyle';
import CardMoviesProfile from './CardMoviesProfile';


const UploadMovies = ( {categoryList} ) => { 

  const { userKey } = useContext( AuthContext )
  const dispatch = useDispatch();

  useEffect(() => {
    if ( categoryList === 'Mis favoritas' ) {
      dispatch(listMoviesAsync( userKey, 'favoritas' ))
    }else if (categoryList === 'Mis películas'){
      dispatch(listMoviesAsync( userKey, 'upload_movies' ))
    }    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryList])
    
  const { movies } = useSelector(store => store.movies)
  const { favorites } = useSelector(store => store.movies)

  return (
    <ListMoviesContainer>
      {  
        categoryList === 'Mis favoritas' & favorites.length === 0?  
          <MessegeContainer>
            <h2>Aun no haz agregado películas</h2>
            <BiCameraMovie/>
          </MessegeContainer>
        :categoryList === 'Mis favoritas'?
          favorites.map( movie => (
            <CardMoviesProfile
            key={movie.id}
            movie={movie}
            />              
          ))
        :categoryList === 'Mis películas' & movies.length === 0?  
        <MessegeContainer>
          <h2>Aun no haz agregado películas</h2>
          <BiCameraMovie/>
        </MessegeContainer>
        : categoryList === 'Mis películas'?
        movies.map( movie => (
          <CardMoviesProfile
          key={movie.id}
          movie={movie}
          />              
        )):console.log('algo salio mal')        
      }
  </ListMoviesContainer>
  )
}

export default UploadMovies