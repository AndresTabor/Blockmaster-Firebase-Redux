import React from 'react';
import { Form, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { Categorias } from '../styles/homeStyles/NavStyles';

const Navbar = () => {


    return <header>
            <Nav className="mb-5 text-Light px-5 py-3 nav">
                <Categorias className="navbar-nav me-auto mb-2 mb-lg-0">                    
                    <Link to="/" className="nav-link">
                        <img src="https://res.cloudinary.com/andrestaborda/image/upload/v1638995924/BlockMasterLogo_1_avst1e.svg"
                        width="106px" alt=''/>
                    </Link> 
                    <div className="nav-item ms-5 ">                        
                        <NavLink
                            name="Todas las peliculas"
                            className="nav-link text-white"
                            to="/"
                                
                        >Todas</NavLink>
                        
                    </div>
                    <div className="nav-item ms-5 ">
                        <NavLink
                        name="Peliculas más valoradas"
                        className="nav-link text-white"
                        to="/"
                         
                        >Mas Valoradas</NavLink>
                    </div>
                    <div className="nav-item ms-5 ">
                        <NavLink
                        name="Peliculas menos valoradas"
                        className="nav-link text-white"
                        to="/"
                        >Menos Valoradas</NavLink>
                    </div>
                    <Form>
                        
                    </Form> 
                    
                </Categorias> 
            </Nav>
    </header>;
};

export default Navbar;
