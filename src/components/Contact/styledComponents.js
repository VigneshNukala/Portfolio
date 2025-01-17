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
export const ContactHeading = styled.h1`
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
    aligen-items: center;
    text-align: left;
    background-color: #ffffff;
    padding-left: 20%;
    padding-right: 20%;
    padding-top: 5%;
`

export const ContactDescHeading = styled.h1`
    font-family: 'League Spartan';
    font-size: 200%;
    color: #000000;
    font-weight: 900;
`

export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    text-align:left;
`

export const Label = styled.label`
    font-family: 'League Spartan';
    font-size: 150%;
    color: #000000;
    font-weight: 900;
    margin-bottom: 1%;
    @media (max-width: 786px){
        margin-bottom: 5%;
        font-size: 75%;
    }
    `
    
export const Input1 = styled.input`
    border: none;
    border-bottom: 2px solid #000000;
    margin-bottom: 5%;
    font-size: 90%;
    @media (max-width: 786px){
        margin-bottom: 10%;
        font-size: 50%;
    }
    `
    
export const Input2 = styled.textarea`
    border:none;
    border-bottom: 2px solid #000000;
    margin-bottom: 5%;
    font-size: 90%;
    height: 2vh;
    @media (max-width: 786px){
        margin-bottom: 10%;
    }
`

export const Button = styled.button`
    margin: 1%;
    padding: 1%;
    padding-left: 2%;
    padding-right: 2%;
    background-color: #D9D9D9;
    color: #000000;
    font-weight: 500;
    border: none;
    font-size: 100%;
    width: 30%;
    align-self: center;
    margin-bottom: 5%;
    @media (max-width: 786px){
        font-size: 50%;
        width: 30%;
    }
`