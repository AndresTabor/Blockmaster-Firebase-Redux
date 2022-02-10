import styled from "styled-components";

export const NavList = styled.ul`
    display: flex;   
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
`
export const InputSearch = styled.input`
    border-radius: 10px;
    width: 100%;    
    padding:10px;
    border:none;
`
export const ButtonSearch = styled.button`
    position: relative;
    left: -40px;
    max-width: 25%;
    height: 100%;
    background:#FED941;
    padding: 12px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border: none;
`
export const ButtonLocation = styled.button`
    display: flex;
    align-items: end;
    background: none;
    border: none;
    color: #ffff;
    & svg {
        font-size: 24px;
    }
    & span {
        margin-left: 5px;
        max-width: 60%;
        text-align: left;
    }
`