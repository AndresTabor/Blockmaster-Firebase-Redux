import React, { useContext, useState } from 'react'
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addMovieAsync, deleteMovieAsync } from '../actions/moviesActios/actionMovies';
import { AuthContext } from '../context/authContext';
import { uploadImage } from '../helpers/uploadImage';
//import { useForm } from '../hooks/useForm';

const Input = styled.input`
    background-color: orange;
`

const RegistroMovie = () => {
    const dispatch = useDispatch();
    const { userKey } = useContext(AuthContext)
    

    const [newMovie, setNewMovie] = useState({
        title: '',
        overview: '',
        vote_average: 0,
        poster_path: ''
    })


    const handleFormChange = ( {target} ) => {
        setNewMovie({
            ...newMovie,
            [target.name]: target.value
        }) 
    }


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        uploadImage( file )
        .then(response => {
            setNewMovie( {...newMovie, poster_path: response} )
           console.log(response);
        }).catch(error => {
            console.log( error.message )
        }) 
    }

    const hadleSubmit = ( e ) => {
        e.preventDefault(); 
        console.log( newMovie ); 
            
    }
  return (
    <>
        <div className="container mt-5">

            <hr/>
            <div className="row">

                <div div className="col-12 text-light">
                    <h3 className="text-center"> Movies </h3>

                    <Form  onSubmit={hadleSubmit}>
                        <Form.Group className="mb-3" controlId="formGroupPosterPath">
                            <input id="inputImage" 
                            type="file" className="form-control"                             
                            name="poster_path"  
                            onChange={handleFileChange}/>
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formGroupTitle">
                            <input id="inputTitle" 
                            type="text" className="form-control mt-2" 
                            name="title" autoComplete="off"
                            placeholder="Movie Title" required 
                            onChange={handleFormChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupOverview">
                            <input id="inputOverview" 
                            type="text" 
                            className="form-control mt-2" 
                            name="overview" 
                            autoComplete="off"
                            placeholder="Overview" required 
                            onChange={handleFormChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupVote">
                            <input id="inputVote" 
                            type="text" 
                            className="form-control mt-2" 
                            name="vote_average" autoComplete="off"
                            placeholder="Vote Avarege" required 
                            onChange={handleFormChange}/>
                        </Form.Group>
                        
                        <div className="d-grid gap-2 mx-auto mt-2">
                            <Input value="Upload" type="submit" className="btn btn-outline-dark" 
                            onClick={() => dispatch( addMovieAsync( newMovie, userKey ))  }/>
                        </div>
                    </Form>
                </div>

                <div className="d-grid gap-2 mx-auto mt-2">
                    <Input value="Delete" type="button" className="btn btn-outline-dark"  
                    onClick={() => dispatch(deleteMovieAsync( "1", userKey ))}/>
                </div>
                <table className="table text-center mt-3">
            
                    <thead>
                        <tr className='text-light'>
                            <th scope="col">Title</th>
                            <th scope="col">Overview</th>
                            <th scope="col">Vote_average</th>
                            <th scope="col">Poster_path</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>

            </div>
        </div>
    </>
  )
}

export default RegistroMovie