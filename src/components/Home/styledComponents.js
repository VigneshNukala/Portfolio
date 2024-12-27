import styled from "styled-components";


export const HomeDiv = styled.div`
    // background-color: #111827;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10%;
    padding-right: 10%;
    height: 90vh;
    width: 80%;
`

export const HomeLeft = styled.div`
    display:flex;
    flex-direction:column;
    width: 50%;
`

export const HomeLeftWelcome = styled.h4`
    font-family: Roboto;
    font-size: 24px;
    color: #EAB308;

`
export const HomeName = styled.h1`
    font-family: Lexend Deca;
    font-size: 42px;
    font-weight: bold;
    color: #F3F4F6;
    margin: 0px;
`

export const HomePara = styled.p`
    font-family: Lexend Deca;
    font-size: 20px;
    font-weight: 500;
    color: #F3F4F6;
`

export const HomeButton = styled.button`
    background-color: #FACC15;
    border: none;
    border-radius: 10px;
    width: 30%;
    padding: 10px;
`

export const HomeRightImage = styled.img.attrs((props) => ({
    src: props.src,
}))`
    height: 80%;
    width: 40%;
    boreder-radius: 100%;
`
