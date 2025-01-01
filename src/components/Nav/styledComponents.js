import styled from "styled-components";


export const NavBar = styled.div`
    background-color: #000000;
    height: 10%;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 7%;
    padding-right: 10%;
    box-shadow: 0px 2px 5px #B336FF;
    margin: 0px;

    @media (max-width: 786px){
        justify-content: center;
    }    
    
`

export const NavLeft = styled.h1`
    color:#B336FF;
    font-size: 150%;
    font-family: 'BebasNeueRegular', sans-serif;
    font-weight: bold;
    width: 50%;
`
    
export const NavRight = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    width: 50%;
    @media (max-width: 786px){
        display: none;
    }
`

export const NavItem = styled.li`
    
`