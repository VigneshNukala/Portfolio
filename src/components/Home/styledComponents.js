import styled from "styled-components";


export const HomeDiv = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    padding-left: 7%;
    padding-right: 10%;
    background-color: #000000;
    height: 100vh;
`

export const HomeLeftImage = styled.img.attrs((props) => ({
    src: props.src,
}))`
    height: 70%;
    width: 35%;
    boreder-radius: 100%;
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
`

export const HomeName = styled.h1`
    font-family: 'BebasNeueRegular', sans-serif;
    font-size: 250%;
    font-weight: 900;
    color: #F3F4F6;
    margin: 0px;
`

export const Name = styled.span`
    color: #B336FF;

`

export const HomePara = styled.p`
    font-family: 'BebasNeueRegular', sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: #F3F4F6;
`

export const SocialMedia = styled.div`
    display:flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
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
    padding-left: 25%;
    padding-right: 25%;
    padding-top: 8%;
    

`

export const HomeHeading = styled.h1`
    font-family: 'League Spartan';
    font-size: 200%;
    color: #000000;
    font-weight: 900;
`

export const HomeParagraph  = styled.p`
    font-family: 'League Spartan';
    font-size: 100%;
    color: #000000;
    font-weight: 500;
    line-height: 1.2em;
`

export const SkillsCon = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

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
    flex-wrap: wrap;

`
export const ProjectsItem = styled.li`
    background-image: url(${(props) => props.imageUrl});
    height: 100px;
    background-size: cover;
    background-repeat: no-repeat;
    width: 300px;
`

