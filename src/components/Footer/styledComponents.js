import styled from "styled-components";

export const FooterDiv = styled.div `
    background-color: #000000;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 3%;
    padding-bottom: 2%;

    @media (max-width: 786px){
        flex-direction: column;
    }

`

export const FooterLeft = styled.h1`
    font-family: 'BebasNeueRegular', sans-serif;
    font-size: 200%;
    font-weight: 900;
    color: #FFFFFF;
    @media (max-width: 786px){
        font-size: 150%;
    }

`

export const FooterRight = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

`

export const FooterMiddle = styled.div`
    display: flex;
    flex-direction: column;
    order: 1;
    @media (max-width: 786px){
        order: 2;
    }
`

export const FooterPara = styled.h1`
    font-family: 'BebasNeueRegular', sans-serif;
    font-size: 100%;
    font-weight: 900;
    color: #FFFFFF;
    @media (max-width: 786px){
        font-size: 70%;
    }
    
`

export const FooterImage = styled.img.attrs(props => ({
    src: props.src,
}))`
    height: 10%;
    width: 10%;
    order: 2;
    @media (max-width: 786px){
        order: 1;
    }
`

