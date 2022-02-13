import React, { useEffect, useState } from 'react'
import { getData } from '../helpers/Crud'
import { ShowDetails } from '../helpers/ShowDetails'
import { AllMoviesUrl } from '../helpers/Uls'
import { ListMoviesContainer } from '../styles/homeStyles/MoviesSectionStyle'
import Cards from './Cards'
import Carrousel from './Carrousel'
import DescriptionModal from './DescriptionModal'
import Navbar from './Navbar'

const Home = () => {
  const [movies, setMovies] = useState([]) //Data de las peliculas
  const [page, setPage] = useState(1) //Paginacion de la Data
  const [searchMovie, setSearchMovie] = useState('') // Estado del buscador
  const [category, setCategory] = useState('Todas las peliculas') //Categoria Inicial de la Data
  const [showItem, setItem] = useState({}) // Elemento a mostrar en detalle
  

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
    console.log('montaje Home standar');
    checkSearch()
    

// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchMovie])
  useEffect(() => {
    getScroll()

    //eslint-disable-next-line react-hooks/exhaustive-deps
   }, [page])

  const getScroll = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=0ca79cfff3d14ef15bb56bac5dad90f8&page=${page}&language=es-LA`)
    const data = await res.json()
    setMovies([...movies, ...data.results])
    
  }


  const scrollToEnd = () => {
    setPage(page + 1)
    console.log("traigo");
  }

  window.onscroll = function () {
    const elemento= document.querySelector('body')    
    if ( document.documentElement.scrollTop + window.innerHeight >= elemento.scrollHeight ) {
      scrollToEnd()
    }
  }
  
  const showModal = ( id ) => {
    document.getElementById( 'details').style.display="block";
    ShowDetails( id ).then(resp => setItem( resp ))
  }
  

  return (
    <>
      <Navbar setCategory={setCategory} setSearchMovie={setSearchMovie}/>
      <Carrousel/>
      <ListMoviesContainer>
        {                    
        // eslint-disable-next-line eqeqeq
          category == 'Todas las peliculas' ?
            movies.map(data => (
              <Cards
                key={data.id}
                movie={data}              
                showModal={showModal}                                              
              />
                              
              // eslint-disable-next-line eqeqeq
              )) : category == 'Peliculas más valoradas' ?
                  movies.filter(vote => vote.vote_average >= 7.0).sort().map(data => (
                      <Cards
                        key={data.id}
                        movie={data}                       
                        showModal={showModal} 
                      />
              // eslint-disable-next-line eqeqeq
              )) : category == 'Peliculas menos valoradas' ?
                  movies.filter(voto => voto.vote_average < 7.0).sort().map(data => (
                      <Cards
                        key={data.id}
                        movie={data}
                        showModal={showModal} 
                      />
              )) : console.log('no existe')                            
        }
      </ListMoviesContainer>
      <DescriptionModal showItem={showItem}/>
    </>
  )
}

export default Home