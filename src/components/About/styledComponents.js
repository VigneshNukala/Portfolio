import styled from 'styled-components'
import '@fontsource/league-gothic';
import '@fontsource/league-spartan';

export const AboutDiv = styled.div`
    height:90vh;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    background-color: #ffffff;
`
export const AboutHeading = styled.div`
    font-size: 500%;
    font-family: 'League Gothic';
    color: #000000;
    font-weight: 500;
    letter-spacing: 0.1em;
    @media (max-width: 786px){
        font-size: 400%;
    }
    
    `
export const AboutPara = styled.div`
    font-size: 200%;
    font-family: League Gothic;
    color: #000000;
    font-weight: 500;
    letter-spacing: 0.4em;
    @media (max-width: 786px){
        font-size: 100%;
    }
`

export const AboutDescCon = styled.div`
    display:flex;
    flex-direction:column;
    aligen-items: center;
    text-align: left;
    background-color: #000000;
    padding-left: 20%;
    padding-right: 20%;
    padding-top: 10%;
    border-bottom: 2px solid #ffffff;
`

export const DescHeading = styled.h1`
    font-family: 'League Spartan';
    font-size: 200%;
    color: #ffffff;
    font-weight: 900;
    text-decoration: underline;
`
export const CertificationHeading = styled.h1`
    font-family: 'League Spartan';
    font-size: 200%;
    color: #ffffff;
    font-weight: 900;
    text-decoration: underline;
    @media (max-width: 786px){
        display: none;
    }
`

export const DescPara = styled.p`
    font-family: 'League Spartan';
    font-size: 100%;
    color: #ffffff;
    font-weight: 500;
    line-height: 1.2em;
`

export const SliderContainer = styled.div`
    padding: 50px;
    width: 50%;
    margin: 0 auto;
    @media (max-width: 786px){
        display: none;
    }
`

export const SliderImgeCon = styled.div`
    display:felx;
    justify-content: center;
`

export const SliderImage = styled.img.attrs((props) => ({
    src : props.src
}))`
    height: 40vh;
    width: 30vw;
`
export const SliderImage1 = styled.img.attrs((props) => ({
    src : props.src
}))`
    height: 50vh;
    width: 20vw;
`

export const HobbisList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const HobbiesItem = styled.li`
    font-size: 150%;
    font-family: 'League Gothic';
    color: #ffffff;
    letter-spacing: 0.05em;
    margin-bottom: 10px;
    @media (max-width: 786px){
        font-size: 70%;
    }
`