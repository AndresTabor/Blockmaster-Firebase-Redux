import styled from "styled-components";

export const DataContainer = styled.div`
    display: flex;
    width: 80%;
    flex-direction: column;
    margin: 200px auto;
    align-items: center;
    & h2{
      width: 60%;
      text-align: center;  
    }

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
    width: 60%;
    display: flex;
    align-items: center;
    & input{
        background: none!important;
        border: none;
        border-bottom: 1.5px solid rgb(68,57,100);
    }
`
export const BtnAvatar = styled.button`
    width: 70%;
    height: 100%;
    border-radius: 50%;
    padding: 0;
`
export const AvatarImage = styled.img`
    width: 100%;
    
`

export const ActionsBtn = styled.div`
    width: 60%;
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

