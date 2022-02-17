import React, { useContext } from 'react'
import { CalificacionContainer, CardContainer, ImgCard } from '../styles/homeStyles/CardStyles'
import { AiFillStar } from 'react-icons/ai'
import { BtnDeleteCard } from '../styles/profileStyles/UserDataStyle'
import { MdDeleteForever } from 'react-icons/md'
import { AuthContext } from '../context/authContext'
import { useDispatch } from 'react-redux'
import { deleteMovieAsync } from '../actions/moviesActios/actionMovies'

const CardMoviesProfile = ( {movie} ) => {
  const { userKey } = useContext(AuthContext)
  const dispatch = useDispatch()

  
  return (
        <CardContainer className='rounded-2' id={movie.id}>
            <ImgCard src={movie.poster_path} alt={movie.tittle}/>
            <BtnDeleteCard onClick={() => dispatch( deleteMovieAsync( movie.id, userKey)) }>
              <MdDeleteForever/>
            </BtnDeleteCard>
            <CalificacionContainer>
                <AiFillStar/>            
                <span>{movie.vote_average}</span>
            </CalificacionContainer>
        </CardContainer>
  )
}

export default CardMoviesProfile