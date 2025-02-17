import styled from "styled-components";


export const HomeDiv = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    padding-left: 7%;
    padding-right: 10%;
    background-color: #000000;
    @media (min-width: 786px){
        height: 100vh;
    }
    @media (max-width: 786px){
        flex-direction: column;
        justify-content: space-between;
    }
`

export const HomeLeftImage = styled.img.attrs((props) => ({
    src: props.src,
}))`
    height: 70%;
    width: 35%;
    boreder-radius: 100%;
    @media (max-width: 786px){
        width: 60%;
        margin-top: 10%;
    }
`

export const HomeMiddle = styled.button.attrs((props) => ({
    type: props.type,
    download: props.download,
}))`
    background: none;
    border: none;
    align-self: start;
    height: 50px;
    cursor: pointer;

    @media (max-width: 768px) {
        display: none;
    }
`

export const HomeMiddleImage = styled.img.attrs((props) => ({
    src: props.src,
}))`
    transform: rotate(-180deg);
`

export const HomeRight = styled.div`
    display:flex;
    flex-direction:column;
    align-items: end;
    width: 55%;
    text-align: right;
    @media (max-width: 786px){
        text-align: center;
        justify-content: space-between;
        margin-top: 10%;
        width: 100%;
    }
`

export const HomeName = styled.h1`
    font-family: 'BebasNeueRegular', sans-serif;
    font-size: 250%;
    font-weight: 900;
    color: #F3F4F6;
    margin: 0px;
    @media (max-width: 786px){
        font-size: 150%;
        margin-bottom: 10%;
    }
`

export const Name = styled.span`
    color: #B336FF;

`

export const HomePara = styled.p`
    font-family: 'BebasNeueRegular', sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: #F3F4F6;
    @media (max-width: 786px){
        font-size: 12px;
        margin-bottom: 10%;
    }
`

export const SocialMedia = styled.div`
    display:flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    @media (max-width: 786px){
        justify-content: center;
        width: 100%;
        margin-bottom: 10%;
    }
`

export const HomeButton = styled.button`
    border-radius: 15px;
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1%;
    background-color: #000000;
    font-family: 'BebasNeueRegular', sans-serif;
    color: #ffffff;
    font-size: 15px;
    box-shadow: 0 0 5px 1px #B336FF;
    cursor: pointer;
`

export const HomeAnchor = styled.a.attrs((props) => ({
    href: props.href,
}))`
    text-decoration: none;
    margin-left: 5%;
`

export const LinksContainer = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content:space-between;
    width: 40%;
`

export const HomeBottom = styled.div`
    display:flex;
    flex-direction:column;
    aligen-items: center;
    text-align: left;
    background-color: #ffffff;
    padding-top: 8%;
`

export const HomeHeading = styled.h1`
    font-family: 'League Spartan';
    font-size: 200%;
    color: #000000;
    font-weight: 900;
    padding-left: 25%;
    padding-right: 25%;
    @media (max-width: 786px){
        padding-left: 15%;
        padding-right: 15%;
    }
    `
    
    export const HomeParagraph  = styled.p`
    font-family: 'League Spartan';
    font-size: 100%;
    color: #000000;
    font-weight: 500;
    line-height: 1.2em;
    padding-left: 25%;
    padding-right: 25%;
    @media (max-width: 786px){
        padding-left: 15%;
        padding-right: 15%;
    }
    `
    
    export const SkillsCon = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: 25%;
    padding-right: 25%;
    @media (max-width: 786px){
        padding-left: 15%;
        padding-right: 15%;
        flex-direction: column;
        height: 200px;
    }
    `
    export const SkillItem = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 10%;
    margin-right: 10%;
    `
    
    export const SkillIcon = styled.img.attrs(props => ({
        src: props.src,
    }))`
    height: 40%;
    width: 40%;
    `
    
    export const SkillPara = styled.p`
    font-size: 100%;
    color: #000000;
    font-weight: bold;
    margin: 10px;
    font-family: 'Roboto';
    `
    
    export const ProjectsCon = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    padding-left: 10%;
    padding-right: 10%;
    @media (max-width: 786px){
        padding-left: 4%;
        padding-right: 4%;
        flex-direction: column;
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

export const ButtonCon = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 786px){
        flex-direction: column;
        margin-bottom: 10%;
    }
`