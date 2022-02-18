import React, { useContext, useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateMovieAsync } from '../actions/moviesActios/actionMovies';
import { AuthContext } from '../context/authContext';
import { uploadImage } from '../helpers/uploadImage';
import { useForm } from '../hooks/useForm';

const UpdateModal = ( {showModal, movieData, closeModal} ) => {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const { userKey } = useContext(AuthContext);
    
    const [ registro, handleFormChange ] = useForm({
        id: movieData.id,
        title: movieData.title,
        overview: movieData.overview,
        genres: movieData.genres,
        poster_path: movieData.poster_path,
        vote_average: movieData.vote_average,
        video_path: ''
    })

    const { title, overview } = registro

    const handleClose = () => {
        setShow(false);
        closeModal(false);
    }

    useEffect(() => {
      setShow( showModal );
      
    }, [showModal])

    const handleSubmit = ( e ) => {
        e.preventDefault();
        dispatch( updateMovieAsync( movieData.id, userKey, registro ) );
        handleClose();
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        uploadImage( file )
        .then(response => {
            registro.poster_path = response
            console.log(response);
        }).catch(error => {
            console.log( error.message );
        }) 
    }
    const handleVideoChange = (e) => {
        const file = e.target.files[0];
        uploadImage( file )
        .then(response => {
            registro.video_path = response
           console.log(response);
        }).catch(error => {
            console.log( error.message );
        }) 
    }
    

  return (
    <>        
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Editar Película</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasictTitle">
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control type="text"
                    name='title' 
                    placeholder={title} 
                    defaultValue={movieData.title}
                    onChange={handleFormChange}
                   />                
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicOverview">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text"
                    name='overview' 
                    placeholder={overview} 
                    defaultValue={movieData.overview}
                    onChange={handleFormChange}/>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formGroupCategory">
                    <Form.Label>Categoría</Form.Label>
                    <Form.Select aria-label="Default select" name='genres' onChange={handleFormChange}>
                    <option>{movieData.genres}</option>
                    <option value="Acción">Acción</option>
                    <option value="Comedia">Comedia</option>
                    <option value="Aventuras">Aventuras</option>
                    <option value="Ciencia Ficción">Ciencia Ficción</option>
                    <option value="Drama">Drama</option>
                    <option value="Animación">Animación</option>
                    <option value="Terror">Terror</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupPosterPath">
                    <Form.Label>Imagen de portada</Form.Label>
                    <input id="inputImage" 
                    type="file" className="form-control"                             
                    name="poster_path"  
                    onChange={handleImageChange}/>
                </Form.Group>

                <Form.Group className="mb-5" controlId="formGroupVidePath">
                    <Form.Label>Video trailer</Form.Label>
                    <input id="inputVideo" 
                    type="file" className="form-control"                             
                    name="video_path"  
                    onChange={handleVideoChange}/>
                </Form.Group>

                <Form.Group className="mb-3 text-end" controlId="formGroupButtons">
                    <Button variant="secondary" type='button' onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="warning" className='ms-4' type='submit'>
                        Guardar cambios
                    </Button>
                </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
    </>
  )
}

export default UpdateModal