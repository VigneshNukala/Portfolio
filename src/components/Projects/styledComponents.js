import styled from 'styled-components'
import '@fontsource/league-gothic';
import '@fontsource/league-spartan';

export const ContactDiv = styled.div`
    height:90vh;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    background-color: #000000;
`
export const ContactHeading = styled.div`
    font-size: 500%;
    font-family: 'League Gothic';
    color: #ffffff;
    font-weight: 500;
    letter-spacing: 0.1em;
    @media (max-width: 786px){
        font-size: 400%;
    }
    
    `
export const ContactPara = styled.div`
    font-size: 200%;
    font-family: League Gothic;
    color: #ffffff;
    font-weight: 500;
    letter-spacing: 0.4em;
    @media (max-width: 786px){
        font-size: 100%;
    }
`

export const ContactDescCon = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    padding-top: 10%;
    @media (max-width: 786px){
        padding-bottom: 10%;
    }
`

export const ProjectsCon = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0px;
    padding-left: 10%;
    padding-right: 10%;
    @media (max-width: 786px){
        flex-direction: column;
        height: 100%;
        padding-bottom: 10%;
    }
`

export const ProjectsItem = styled.a`
    padding: 1%;
    background-image: url(${(props) => props.imageUrl});
    height: 60vh;
    width: 20vw;
    background-size: cover;
    margin: 2%;
    border-radius: 5px;
    text-decoration: none;
    @media (max-width: 786px){
        width: 85vw;
    }
`

export const ProjectHeading = styled.h1`
    font-family: 'League Spartan';
    font-size: 200%;
    color: #ffffff;
    font-weight: 900;
`

export const ProjectPara = styled.h1`
    font-family: 'League Spartan';
    font-size: 100%;
    color: #ffffff;
    font-weight: 900;
`