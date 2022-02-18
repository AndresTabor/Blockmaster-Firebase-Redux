import React, { useContext, useState } from 'react'
import { ActionsBtnCard, BtnCard, CalificacionContainer, CardContainer, ImgCard } from '../styles/profileStyles/CardProfileStyle'
import { AiFillStar } from 'react-icons/ai'
import { MdDeleteForever, MdSystemUpdateAlt } from 'react-icons/md'
import { AuthContext } from '../context/authContext'
import { useDispatch } from 'react-redux'
import { deleteMovieAsync } from '../actions/moviesActios/actionMovies'
import UpdateModal from './UpdateModal'
import { BiShowAlt } from 'react-icons/bi'


const CardMoviesProfile = ( {movie} ) => {
  const [show, setShow] = useState(false);
  const { userKey } = useContext(AuthContext)
  const dispatch = useDispatch()
  
  const handleShow = () => setShow(true);
  
  return (
        <CardContainer className='rounded-2' id={movie.id}>
            <ImgCard src={movie.poster_path} alt={movie.tittle}/>
            <CalificacionContainer>
                <AiFillStar/>            
                <span>{movie.vote_average}</span>
            </CalificacionContainer>
            <ActionsBtnCard>
              <BtnCard onClick={() => dispatch( deleteMovieAsync( movie.id, userKey)) }>
                <MdDeleteForever/>
              </BtnCard>
              <BtnCard variant="primary" onClick={handleShow}>
                <MdSystemUpdateAlt/>
              </BtnCard>
              <BtnCard variant="primary">
                <BiShowAlt/>
              </BtnCard>
            </ActionsBtnCard>
            <UpdateModal showModal={show} movieData={movie} closeModal={setShow}/>
        </CardContainer>
  )
}

export default CardMoviesProfile