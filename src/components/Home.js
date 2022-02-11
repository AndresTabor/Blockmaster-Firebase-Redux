import React, { useEffect, useState } from 'react'
import { getData } from '../helpers/Crud'
import { AllMoviesUrl } from '../helpers/Uls'
import Carrousel from './Carrousel'
import Navbar from './Navbar'

const Home = () => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [estado, setEstado] = useState(false)
  const [showInfo, setInfo] = useState({})
  const [searchMovie, setSearchMovie] = useState('')

  const checkSearch = () => {
    let endPoint = '';
    
    if( searchMovie.length > 0 ) {
      endPoint = `https://api.themoviedb.org/3/search/movie?api_key=fa031f96936e4b36067a690a2e64116c&language=en-US&query=${searchMovie}&api_key=0ca79cfff3d14page=1&include_adult=false`
    } else {
      endPoint = AllMoviesUrl
    }
  }


  useEffect(() => {

    //getData( )

// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


//   useEffect(() => {

//     getScroll()

// // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [page])

  return (
    <>
      <Navbar/>
      <Carrousel/>

    </>
  )
}

export default Home