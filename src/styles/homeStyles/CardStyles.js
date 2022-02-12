import styled from "styled-components";

export const CardContainer = styled.button`
    width: 220px;
    height: 330px;
    margin:24px;
    border:none;
`
export const ImgCard = styled.img`
    width: 100%;
    
    object-fit: cover;
    border-radius: 0.25rem;
`

export const CalificacionContainer = styled.div`
    color:#FED941;
    position: relative;
    top:-87%;
    left:-3%;
    background: rgba( 0,0,0,0.5 );
    border: 3px solid #FED941;
    box-sizing: border-box;
    /* backdrop-filter: blur(130px); */
    padding: 5px;
    text-align:center;
    font-weight:700;  
    width:50%;
    font-size:28px;
    display:flex;
    justify-content:center;
    border-bottom-right-radius: 30px;
    border-top-right-radius: 30px;
    border-left:none;
    z-index: 2;
    & svg {
        align-self:center;
        margin-right:5px;
        
    }
    & span{
        color:#ffff;
        
    }
`