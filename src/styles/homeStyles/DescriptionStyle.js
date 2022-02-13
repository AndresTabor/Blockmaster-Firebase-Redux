import styled from "styled-components"

export const Overley = styled.div`
    width:100vw;
    height:100vh;
    position:fixed;
    top:0;
    background-color: rgba(1,1,1,0.9);    
    display: none;
`

export const ContenedorModal= styled.div`
    width: 90%;
    height: 579px;  
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 0px;
    margin: 100px auto;
    position:relative;
`
export const ImagenModal= styled.div`
    width: 220px;
    height: 330px;
    transform: matrix(0.71, -0.55, 1, 0.71, 0, 0);
    border-radius:10px;
    & img {
        width: 100%;
        min-height:100%;    
        object-fit: cover;
        border-radius: 0.25rem;
    }
`


export const DataMovie= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    position: static;
    width: 465px;
    height: 332px;
    left: 634.04px;
    top: 123.5px;
    margin: 0px 40px;
`
export const ModalButtons = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 24px;    
    width:48%;
    border-radius: 4px;
    border: none;
    font-weight:700;
    font-size:18px;
    & svg{
        margin-right:10px;
    }

`
export const ModalBtnContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    width: 100%;

`
export const ModalBtnCerrar = styled.button `
    position:absolute;
    top:0px;
    left:2%;
    border:none;
    background-color: transparent;
    font-weight:700;
    color:#ffff;
    & svg {
        font-size: 2rem;
    }
`