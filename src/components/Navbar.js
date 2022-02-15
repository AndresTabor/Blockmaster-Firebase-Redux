import React, { memo, useContext, useEffect } from 'react';
import { Form, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { NavList, InputSearch, ButtonSearch, ButtonLocation } from '../styles/homeStyles/NavStyles';
import { RiSearchLine } from 'react-icons/ri'
import { MdLocationOn } from 'react-icons/md'
import { BiUser } from 'react-icons/bi'
import { useGetLocation } from '../hooks/useGetLocation';
import { AuthContext } from '../context/authContext';
import Login from './Login';
import Registro from './Registro';




const Navbar = memo(( {setCategory, setSearchMovie} ) => {

    const [location, getCoordenadas] = useGetLocation()
    const { isLoggin } = useContext(AuthContext)

    const handleInputChange = (e) => {
        setSearchMovie(e.target.value)
    }
    

    useEffect(() => {
        console.log('montaje nav');
    }, [])
    
    const showFormLogin = () => {
        document.getElementById('form-login').style.display="block";
    }
    
    return <header>
            <Nav className="mb-5 text-Light px-5 py-3 nav">
                <NavList className="navbar-nav me-auto mb-2 mb-lg-0">                    
                    <Link to="/" className="nav-link" onClick={() =>setCategory('Todas las peliculas')}>
                        <img src="https://res.cloudinary.com/andrestaborda/image/upload/v1638995924/BlockMasterLogo_1_avst1e.svg"
                        width="106px" alt='Logo Block Master'/>
                    </Link> 
                    <div className="nav-item">                        
                        <NavLink
                            name="Todas las peliculas"
                            className="nav-link text-white"
                            to="/"
                            onClick={() =>setCategory('Todas las peliculas')}   
                        >Todas</NavLink>
                        
                    </div>
                    <div className="nav-item">
                        <NavLink
                        name="Peliculas más valoradas"
                        className="nav-link text-white"
                        to="/"
                        onClick={() =>setCategory('Peliculas más valoradas')}   
                        >Mas Valoradas</NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink
                        name="Peliculas menos valoradas"
                        className="nav-link text-white"
                        to="/"
                        onClick={() =>setCategory('Peliculas menos valoradas')} 
                        >Menos Valoradas</NavLink>
                    </div>
                    <Form className='d-flex w-50'>
                        <InputSearch
                        type="text"
                        placeholder="Buscar tu pelicula favorita"
                        onChange={handleInputChange}
                        />
                        <ButtonSearch type="submit">
                            <RiSearchLine/>
                        </ButtonSearch>
                    </Form> 
                    <div className="nav-item">
                        <ButtonLocation type="button" onClick={() => getCoordenadas()}>
                            <MdLocationOn/>
                            {location? <span>{location}</span>: <span>Tu ubicación</span>} 
                        </ButtonLocation>
                    </div>
                    <div className="nav-item">
                        {
                            isLoggin === false?
                            <ButtonLocation type="button" onClick={() => showFormLogin()}>
                                <BiUser/>
                            </ButtonLocation>
                            : 
                            <link to='/profile'>
                                <img src='https://ibb.co/RPmNrkp' alt='avatar'/>
                            </link>
                        }
                    </div>                    
                    <Login/>
                    <Registro/>
                </NavList> 
            </Nav>
    </header>;
});

export default Navbar;
