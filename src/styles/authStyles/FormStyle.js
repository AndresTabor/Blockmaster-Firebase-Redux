import styled from "styled-components";

export const OverlayForm = styled.div`
    background-color: rgba(83, 82, 84, 0.8);
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    & form{
        width: 30%;
        height: 500px;
        border-radius: 10px;
        padding: 20px;
        margin: 0 auto;
        background: rgb(49,59,93);
        background: linear-gradient(185deg, rgba(49,59,93,1) 0%, rgba(24,35,71,0.8) 48%, rgba(8,15,40,1) 100%);
        color: #ffff;
    }
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


