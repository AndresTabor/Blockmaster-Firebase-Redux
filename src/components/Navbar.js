import React from 'react';
import { Form, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { NavList, InputSearch, ButtonSearch, ButtonLocation } from '../styles/homeStyles/NavStyles';
import { RiSearchLine } from 'react-icons/ri'
import { MdLocationOn } from 'react-icons/md'
import { BiUser } from 'react-icons/bi'
import { useGetLocation } from '../hooks/useGetLocation';



const Navbar = () => {

    const [location, getCoordenadas] = useGetLocation()

    return <header>
            <Nav className="mb-5 text-Light px-5 py-3 nav">
                <NavList className="navbar-nav me-auto mb-2 mb-lg-0">                    
                    <Link to="/" className="nav-link">
                        <img src="https://res.cloudinary.com/andrestaborda/image/upload/v1638995924/BlockMasterLogo_1_avst1e.svg"
                        width="106px" alt=''/>
                    </Link> 
                    <div className="nav-item">                        
                        <NavLink
                            name="Todas las peliculas"
                            className="nav-link text-white"
                            to="/"
                                
                        >Todas</NavLink>
                        
                    </div>
                    <div className="nav-item">
                        <NavLink
                        name="Peliculas más valoradas"
                        className="nav-link text-white"
                        to="/"
                         
                        >Mas Valoradas</NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink
                        name="Peliculas menos valoradas"
                        className="nav-link text-white"
                        to="/"
                        >Menos Valoradas</NavLink>
                    </div>
                    <Form className='d-flex w-50'>
                        <InputSearch
                        type="text"
                        placeholder="Buscar tu pelicula favorita"
                        
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
                        <ButtonLocation type="button" >
                            <BiUser/>
                        </ButtonLocation>
                    </div>                    
                    
                </NavList> 
            </Nav>
    </header>;
};

export default Navbar;
