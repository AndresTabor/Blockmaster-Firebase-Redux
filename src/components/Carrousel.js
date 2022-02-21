import React, { memo, useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { AllMoviesUrl } from '../helpers/Uls'
import { ImgSwiper } from '../styles/homeStyles/Carrousel'

const  Carrousel = memo(() => {
    const [dataCarrusel, setDataCarrusel] = useState([])


    useEffect(() => {
        //console.log("Montaje Carrousel");
        fetch( AllMoviesUrl )
            .then(response => response.json())
            .then(response => setDataCarrusel(response.results.sort(() => Math.random() > 0.5 ? 1 : -1).slice(0, 5)))
            .catch(error => console.log(error))        
    }, [])
  return (
    <>
        <Carousel itemPadding={[0, 10]} itemsToShow={1.01} outerSpacing={50} easing="cubic-bezier(1,.15,.55,1.54)"
        tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
        transitionMs={700} >
            {
                dataCarrusel.map(data => (
                    
                    <ImgSwiper key={data.id} src={`https://www.themoviedb.org/t/p/w1440_and_h320_multi_faces/${data.backdrop_path}`} alt={data.title} />                   
                ))
            }
        </Carousel>
    </>
  )
})

export default Carrousel