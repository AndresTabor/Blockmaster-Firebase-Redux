import styled from "styled-components";

export const OverlayForm = styled.div`
    display: none; 
    z-index: 1;
    position: fixed;
    margin: 0;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    width: 100vw;
    height: 100vh;
    align-items: center;
    & form{
        width: 20%;
        max-height: 550px;
        border-radius: 10px;
        padding: 15px 24px;
        margin: 150px auto;
        background: rgb(49,59,93);
        background: linear-gradient(185deg, rgba(49,59,93,1) 0%, rgba(24,35,71,1) 48%, rgba(8,15,40,1) 100%);
        color: #ffff;
        
    }
`
export const BtnClose = styled.button`
    position: relative;
    font-size: 24px;
    left: 90%;
    background: none;
    border: none;
    color: whitesmoke;
    &:hover{
        color: orange;
    }
    
`
export const BtnFormRegister = styled.button`
    background: none;
    border: none;
    color: orange;
    margin-top: 1rem;
`
export const BtnForm = styled.button`
    border-radius: 5px;
    background-color: #ffff;
    padding: 10px 15px;
    border: none;
    box-shadow: -7px 14px 17px -2px rgba(0,0,0,0.19);
    -webkit-box-shadow: -7px 14px 17px -2px rgba(0,0,0,0.19);
    -moz-box-shadow: -7px 14px 17px -2px rgba(0,0,0,0.19);
`


