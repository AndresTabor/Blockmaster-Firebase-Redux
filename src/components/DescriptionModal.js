

import { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiPlus } from 'react-icons/bi';
import { BsFillPlayFill } from 'react-icons/bs';
import { closeDetails } from '../helpers/ShowDetails';
import { ContenedorModal, DataMovie, ImagenModal, ModalBtnCerrar, ModalBtnContainer, ModalButtons, Overley } from '../styles/homeStyles/DescriptionStyle';


const DescriptionModal = ( {showItem} ) => {
    const  [description, setDescription] = useState({})
    
    useEffect(() => {
        console.log( showItem );
        setDescription(showItem)
        console.log(showItem.original_title);
    }, [showItem])  

    const urlPoster = 'https://image.tmdb.org/t/p/w500/'+description?.poster_path;

  return (
        <>
            <Overley id='details'>
                <ContenedorModal>
                    <ModalBtnCerrar onClick={()=>closeDetails()}>
                        <AiOutlineClose/>
                    </ModalBtnCerrar>
                    <ImagenModal>
                        {
                            showItem?.original_title !== undefined?
                            <img src={urlPoster} alt='Movie Poster'/>:
                            <img src={description?.poster_path} alt='Movie Poster'/>
                        }
                    </ImagenModal>
                    <DataMovie className='text-light'>
                        {
                            showItem?.original_title !== undefined?
                            <h1>{description?.original_title}</h1>:
                            <h1>{description?.title}</h1>
                        }
                        <p>{description?.overview}</p>
                        <div className='w-100'>
                            <ul className='d-flex'>
                                <li className='me-5'>{description?.release_date}</li>
                                <li className='me-5'>{description?.new_genres}</li>
                                <li className='me-5'>{description?.new_runtime}</li>
                            </ul>
                            <ModalBtnContainer>
                                
                                <ModalButtons className='bg-warning'>
                                    {
                                        showItem?.original_title !== undefined?
                                        <a href={`https://www.youtube.com/embed/${description.video_key}?autoplay=1&amp;origin=https%3A%2F%2Fwww.themoviedb.org&amp;hl=es&amp;modestbranding=1&amp;fs=1&amp;autohide=1`} target='_blank' rel="noreferrer">
                                            <BsFillPlayFill/>
                                            <span>VER TRÁILER</span>    
                                        </a> :
                                        <a href={showItem.video_path} target='_blank' rel="noreferrer">
                                            <BsFillPlayFill/>
                                            <span>VER TRÁILER</span>    
                                        </a>                                 
                                    } 
                                </ModalButtons>
                                {
                                   showItem?.original_title !== undefined? 
                                    <ModalButtons className='border border-warning border-2 text-warning' style={{backgroundColor: "black"}}>
                                        <BiPlus/>
                                        <span>VER DESPUÉS</span>    
                                    </ModalButtons>:
                                    console.log()
                                }

                            </ModalBtnContainer>
                        </div>
                    </DataMovie>
                </ContenedorModal>
                
            </Overley> 
        </>
    )
}

export default DescriptionModal