import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { uploadImage } from '../helpers/uploadImage';

const UpdateModal = ( {showModal, movieData, closeModal} ) => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        closeModal(false);
    }

    useEffect(() => {
      setShow( showModal )
      
    }, [showModal])

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        uploadImage( file )
        .then(response => {
            //setNewMovie( {...newMovie, poster_path: response} )
           console.log(response);
        }).catch(error => {
            console.log( error.message )
        }) 
    }
    const handleVideoChange = (e) => {
        const file = e.target.files[0];
        uploadImage( file )
        .then(response => {
            //setNewMovie( {...newMovie, poster_path: response} )
           console.log(response);
        }).catch(error => {
            console.log( error.message )
        }) 
    }
    

  return (
    <>        
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Editar Película</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Form.Group className="mb-3" controlId="formBasictTitle">
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control type="text" placeholder={movieData.title} value={movieData.title}/>                
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicOverview">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" placeholder={movieData.overview} value={movieData.overview}/>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formGroupCategory">
                    <Form.Select aria-label="Default select">
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
                    <input id="inputImage" 
                    type="file" className="form-control"                             
                    name="poster_path"  
                    onChange={handleImageChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupVidePath">
                    <input id="inputVideo" 
                    type="file" className="form-control"                             
                    name="video_path"  
                    onChange={handleVideoChange}/>
                </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary">
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default UpdateModal