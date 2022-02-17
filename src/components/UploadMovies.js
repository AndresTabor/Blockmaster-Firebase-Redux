import React, { useContext, useEffect, useState } from 'react'
import { BiCameraMovie } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux'
import { listMoviesAsync } from '../actions/moviesActios/actionMovies';
import { AuthContext } from '../context/authContext';
import { ListMoviesContainer } from '../styles/homeStyles/MoviesSectionStyle'
import { MessegeContainer } from '../styles/profileStyles/UserDataStyle';
import CardMoviesProfile from './CardMoviesProfile';


const UploadMovies = () => {
    const [prueba, setPrueba] = useState([])

    const { userKey } = useContext( AuthContext )
    const dispatch = useDispatch();
    const { movies } = useSelector(store => store.movies)
   

    useEffect(() => {
        dispatch(listMoviesAsync( userKey, 'upload_movies' ))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userKey])
    


  return (
    <ListMoviesContainer>
        {   
            movies.length === 0? 
            <MessegeContainer>
                <h2>Aun no haz agregado películas</h2>
                <BiCameraMovie/>
            </MessegeContainer>
            :movies.map(data => (
                <CardMoviesProfile
                  key={data.id}
                  movie={data}              
                //   showModal={showModal}                                              
            />))
        }
    </ListMoviesContainer>
  )
}

export default UploadMovies