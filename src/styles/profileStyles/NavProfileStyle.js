import styled from "styled-components";

export const SectionProfile = styled.section`
    display: flex;
    
`
export const NavbarProfile = styled.nav`
    padding: 20px;    
    position: fixed;
    border-radius: 20px;    
    min-width: 290px;
    top: 10%;
    left: 0;
    width: 20%;
    min-height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & img {
        background-color: #ffff;
        border-radius: 50%;
    }
`
export const BackArrow = styled.span`
    font-size: 24px;
    position: relative;
    top: -97px;
    right: 154px;
    &:hover{
        color: #e69c3c;
    }

`
export const NavList = styled.ul`
    list-style: none;    
    margin: 50px 0;
    padding-left: 0;

    & li{
        padding: 0 5px;
        margin:20px 0;
        transition: all 0.02s ease-out;
        &:hover{
            background-color: #e69c3c;
            border-radius: 20px;
            box-shadow: -7px 14px 17px -2px rgba(0,0,0,0.19);
            -webkit-box-shadow: -7px 14px 17px -2px rgba(0,0,0,0.19);
            -moz-box-shadow: -7px 14px 17px -2px rgba(0,0,0,0.19);
            & svg, span {color: white; }
        }
    }

    & svg {
        color: #e69c3c;
        font-size: 1.8rem;
        margin-right: 20px;
    }
    & span {
        color: #ffff;
        font-size: 1.2rem;
        vertical-align: middle;
    }
`
export const InfoList = styled.div`
    position: absolute;
    right: 0;
    background:  rgb(38,35,53);
    margin-left: 410px;
    width: 79%;
    height: 100vh;
`