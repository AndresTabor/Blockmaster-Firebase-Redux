import styled from "styled-components";

export const CardContainer = styled.div`
    width: 220px;
    height: 330px;
    margin:24px;
    border:none;
    &:hover{
        box-shadow: 0 0 0 0.25rem rgb(0 0 0 / 30%);
    }
    &:hover button{
        display: block;
    }
    
`
export const ImgCard = styled.img`
    width: 100%;
    min-height:100%;    
    object-fit: cover;
    border-radius: 0.25rem;
`

export const CalificacionContainer = styled.div`
    color: var(--primary-color);
    position: relative;
    top:-87%;
    left:-3%;
    background: rgba( 0,0,0,0.5 );
    border: 3px solid var(--primary-color);
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
    & svg {
        align-self:center;
        margin-right:5px;
        
    }
    & span{
        color:#ffff;
        
    }
`
export const ActionsBtnCard = styled.div`
    position: relative;
    top: -115px;
    left: 0;
    display: flex;
    justify-content: space-around;
`
export const BtnCard = styled.button`
    display: none;
    width: 20%;
    border: 1px solid rgb(254, 217, 65);
    padding: 5px;
    border-radius: 5px;
    border: 2px solid #e69c3c;
    background-color: rgba(0,0,0,0.7);
    & svg {
        color: var(--primary-color);
        margin: 0 auto;
        font-size: 1.5rem;
    }
`