import React from 'react'
import { imageUrl } from '../helpers/Uls'
import { CalificacionContainer, CardContainer, ImgCard } from '../styles/homeStyles/CardStyles'
import { AiFillStar } from 'react-icons/ai'

const Cards = ( {movie} ) => {

    
  return (
        <CardContainer className='rounded-2'>
            <ImgCard src={imageUrl+movie.poster_path} alt={movie.tittle}/>
            <CalificacionContainer>
                <AiFillStar/>            
                <span>{movie.vote_average}</span>
            </CalificacionContainer>
        </CardContainer>
  )
}

export default Cards