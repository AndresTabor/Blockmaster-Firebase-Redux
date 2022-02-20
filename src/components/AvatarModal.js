import React, { useEffect } from 'react'
import { urlAvatars } from '../helpers/AvatarsData';
import { AvatarsContainer, BtnOptionAvatar } from '../styles/profileStyles/AvatarModalStyle';


const AvatarModal = ( {setAvatar} ) => {
    
    useEffect(() => {
        
    }, [])
    

    const changeAvatar = ( setAvatar, url ) => {
        setAvatar( url );
    }
  return (
    <>
        <AvatarsContainer>
            {
                urlAvatars.map( (item, index) => (
                    <BtnOptionAvatar key={index} 
                    onClick={() => changeAvatar( setAvatar, item )}>
                        <img src={item} alt='Avatar option'/>
                    </BtnOptionAvatar>
                ))
            }
        </AvatarsContainer>
    </>
  )
}

export default AvatarModal