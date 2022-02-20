import styled from "styled-components";

export const AvatarsContainer = styled.div`
    display: flex; 
    justify-content: space-around;
    flex-wrap: wrap;    
    background-color: rgba(68,57,100,0.8);
    border-radius: 10px;
    padding: 10px 5px;
    width: 200px;
    position: absolute;
    top: 45%;
    left: 7%;
    transition: all ease-in-out;
`

export const BtnOptionAvatar = styled.button`
    width: 75px;
    height: 75px;
    margin: 10px 0;
    padding: 0;
    border-radius: 50%;
    border: none;
    background: none;
    :hover{
        box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
    }
    & img {
        width: 100%;
    }

`