import React, { useEffect, useState } from 'react'
import { getData } from '../helpers/Crud'
import { AllMoviesUrl } from '../helpers/Uls'
import Cards from './Cards'
import Carrousel from './Carrousel'
import Navbar from './Navbar'

const Home = () => {
  const [movies, setMovies] = useState([]) //Data de las peliculas
  const [page, setPage] = useState(1) //Paginacion de la Data
  const [searchMovie, setSearchMovie] = useState('') // Estado del buscador
  const [category, setCategory] = useState('Todas las peliculas') //Categoria Inicial de la Data
  const [estado, setEstado] = useState(false)
  const [showInfo, setInfo] = useState({})

  const checkSearch = () => {
    let endPoint = '';    
    if( searchMovie.length > 0 ) {
      endPoint = `https://api.themoviedb.org/3/search/movie?api_key=fa031f96936e4b36067a690a2e64116c&language=en-US&query=${searchMovie}&api_key=0ca79cfff3d14page=1&include_adult=false`
    } else {
      endPoint = AllMoviesUrl
    }
    getData( endPoint, setMovies )
  }


  useEffect(() => {
    console.log('montaje Home');
    checkSearch()
    //getData( )

// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


//   useEffect(() => {

//     getScroll()

// // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [page])

  return (
    <>
      <Navbar setCategory={setCategory}/>
      <Carrousel/>
      {                    
      // eslint-disable-next-line eqeqeq
        category == 'Todas las peliculas' ?
          movies.map(data => (
            <Cards
              key={data.id}
              movie={data}
              // mostrar={mostrarModal} 
              //onClick={() =>mostrar(movie.id)}                               
            />
                            
            // eslint-disable-next-line eqeqeq
            )) : category == 'Peliculas más valoradas' ?
                movies.filter(vote => vote.vote_average >= 7.0).sort().map(data => (
                    <Cards
                        key={data.id}
                        movie={data}
                        // mostrar={mostrarModal}
                    />
            // eslint-disable-next-line eqeqeq
            )) : category == 'Peliculas menos valoradas' ?
                movies.filter(voto => voto.vote_average < 7.0).sort().map(data => (
                    <Cards
                        key={data.id}
                        movie={data}
                        // mostrar={mostrarModal}
                    />
            )) : console.log('no existe')                            
      }
    </>
  )
}

export default Home