import { Link } from 'react-router-dom'

import ecommerce from '../../data/ecommerce.jpg'
import nxtwatch from '../../data/nxtwatch.jpg'
import smartpot from '../../data/smartpot.jpg'
import wecare from '../../data/wecare.jpg'
import foodmunch from '../../data/foodmunch.png'
import twitterapi from '../../data/twitterapi.jpg'

import { FaArrowRightLong } from "react-icons/fa6";

import Nav from '../Nav'
import Footer from '../Footer'

import {
    ContactDiv, 
    ContactHeading, 
    ContactPara, 
    ContactDescCon, 
    ProjectsCon,
    ProjectsItem,
    ProjectHeading,
    ProjectPara,} from './styledComponents'

const Projects = (pros) => {

    return (
        <>
            <Nav />
            <ContactDiv>
                <ContactHeading>PROJECTS</ContactHeading>
                <ContactPara>MADE WITH LOVE</ContactPara>
            </ContactDiv>
            <ContactDescCon>

            <ProjectsCon>
                <ProjectsItem imageUrl={foodmunch} href="https://foodmunch12345.ccbp.tech/" target="_blank" rel="noopener noreferrer">
                    <ProjectHeading>Food Munch</ProjectHeading>
                    <ProjectPara>HTML, CSS, JavaScript, Bootstrap</ProjectPara>
                </ProjectsItem>
                <ProjectsItem imageUrl={twitterapi} href='https://github.com/VigneshNukala/Twitter-API' target="_blank" rel="noopener noreferrer">
                    <ProjectHeading>Twitter API</ProjectHeading>
                    <ProjectPara>NodeJS, ExpressJS, SQLite</ProjectPara>
                </ProjectsItem>
                <ProjectsItem imageUrl={ecommerce} href='https://shoppyease.ccbp.tech/login' target="_blank" rel="noopener noreferrer">
                    <ProjectHeading>E-Commerce</ProjectHeading>
                    <ProjectPara>ReactJS, NodeJS, SQLite</ProjectPara>
                    <br />
                    <ProjectPara>Username: rahul</ProjectPara>
                    <ProjectPara>password: rahul@2021</ProjectPara>
                </ProjectsItem>
                <ProjectsItem imageUrl={nxtwatch} href='https://youwatchweb.ccbp.tech/' target="_blank" rel="noopener noreferrer">
                    <ProjectHeading>You Watch</ProjectHeading>
                    <ProjectPara>ReactJS, NodeJS, ExpressJS, SQLite</ProjectPara>
                    <br />
                    <ProjectPara>Username: rahul</ProjectPara>
                    <ProjectPara>password: rahul@2021</ProjectPara>
                </ProjectsItem>
                <ProjectsItem imageUrl={smartpot} href='' target="_blank" rel="noopener noreferrer">
                    <ProjectHeading>Slef Watering Smart Pot</ProjectHeading>
                    <ProjectPara>IOT, Aruino, C Language, Senosrs</ProjectPara>
                </ProjectsItem>
                <ProjectsItem imageUrl={wecare} href='https://github.com/VigneshNukala/wecare' target="_blank" rel="noopener noreferrer">
                    <ProjectHeading>Wecare</ProjectHeading>
                    <ProjectPara>IOT, Aruino, C Language, Senosrs, Python, Web Dev</ProjectPara>
                </ProjectsItem>
            </ProjectsCon>
            <Link to="/contact" className="bottom-link"><FaArrowRightLong className='arrow'/>Contact me</Link>              
            </ContactDescCon>
            <Footer />
        </>
    )
}
export default Projects;