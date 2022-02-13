import React from 'react'
import { imageUrl } from '../helpers/Uls'
import { CalificacionContainer, CardContainer, ImgCard } from '../styles/homeStyles/CardStyles'
import { AiFillStar } from 'react-icons/ai'

const Cards = ( {movie, showModal} ) => {

    
  return (
        <CardContainer className='rounded-2' id={movie.id} onClick={() => showModal( movie.id )}>
            <ImgCard src={imageUrl+movie.poster_path} alt={movie.tittle}/>
            <CalificacionContainer>
                <AiFillStar/>            
                <span>{movie.vote_average}</span>
            </CalificacionContainer>
        </CardContainer>
  )
}

export default Cards