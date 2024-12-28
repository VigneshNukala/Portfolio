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
    
    `
export const ContactPara = styled.div`
    font-size: 200%;
    font-family: League Gothic;
    color: #ffffff;
    font-weight: 500;
    letter-spacing: 0.4em;
`

export const ContactDescCon = styled.div`
    display:flex;
    flex-direction:column;
    aligen-items: center;
    text-align: left;
    background-color: #ffffff;
    padding-left: 20%;
    padding-right: 20%;
    padding-top: 10%;
`

export const ContactDescHeading = styled.h1`
    font-family: 'League Spartan';
    font-size: 200%;
    color: #000000;
    font-weight: 900;
`