import styled from "styled-components";

export const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 200px;
    align-items: center;
`
export const H2 = styled.h2`
    font-size: 2.8rem;
    border-bottom: 2.5px solid rgb(68,57,100);
    padding-bottom: 10px;
`

export const MessegeContainer = styled.div`
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & h2 {
        color: #ffff;
        margin-bottom: 80px;
    }
    & svg {
        color: #ffff;
        font-size: 7rem;
        color: var(--primary-color);
        
    }
`

export const UserDataContainer = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
`
export const BtnAvatar = styled.button`
    width: 100%;
    height: 100%;
`
export const AvatarImage = styled.img`
    width: 80%;
    &:hover{cursor: pointer;}
`

export const ActionsBtn = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-between;
    margin-top: 28px;
    padding-top: 29px;
    border-top: 2.5px solid rgb(68,57,100);
    & button {
        border: none;
        padding: 10px;
        width: 30%;
        border-radius: 5px;
        :disabled{
            background-color: rgb(68,57,100);
            color: whitesmoke;
        }
    }
`

