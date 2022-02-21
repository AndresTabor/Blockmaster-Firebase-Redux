import React, { useContext, useEffect, useState } from 'react'
import { BiCameraMovie } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux'
import { listMoviesAsync } from '../actions/moviesActios/actionMovies';
import { AuthContext } from '../context/authContext';
import { ListMoviesContainer } from '../styles/homeStyles/MoviesSectionStyle'
import { MessegeContainer } from '../styles/profileStyles/UserDataStyle';
import CardMoviesProfile from './CardMoviesProfile';
import DescriptionModal from './DescriptionModal';


const UploadMovies = ( {categoryList} ) => { 
  const [showItem, setShowItem] = useState({})
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

  const showDetails = ( id ) => {
    document.getElementById( 'details').style.display="block";

    if ( categoryList === 'Mis películas') {
      setShowItem(movies.find( movie => movie.id === id ) );
    }

  }

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
            showDetails={showDetails}
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
          showDetails={showDetails}
          />              
        )):console.log('algo salio mal')        
      }
      <DescriptionModal showItem={showItem}/>
  </ListMoviesContainer>
  )
}

export default UploadMovies