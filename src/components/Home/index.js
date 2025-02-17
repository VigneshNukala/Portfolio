import {Link} from "react-router-dom"

//  photos import
import mylogo from '../../data/mylogo.png'
import lightbulb from '../../data/lightbulb.png'
import VIGNESHNUKALA from '../../data/VIGNESHNUKALA.pdf'
import CSS3 from '../../data/CSS3.png'
import HTML5 from '../../data/HTML5.png'
import JS from '../../data/JS.png'
import NodejS from '../../data/Nodejs.png'
import React from '../../data/React.png'
import Sqlite from '../../data/Sqlite.png'
import python from '../../data/python.png'
import ecommerce from '../../data/ecommerce.jpg'
import nxtwatch from '../../data/nxtwatch.jpg'
import smartpot from '../../data/smartpot.jpg'
import iotlogo from '../../data/iotlogo.jpg'
import dsalogo from '../../data/dsalogo.jpg'

import Nav from '../Nav'
import Footer from '../Footer'

import { IoCloudDownloadOutline } from "react-icons/io5";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";

import { HomeDiv, 
    HomeLeftImage, 
    HomeMiddle, 
    HomeMiddleImage, 
    HomeRight, 
    HomeName, 
    Name, 
    HomePara, 
    SocialMedia, 
    HomeButton, 
    HomeAnchor, 
    LinksContainer, 
    HomeBottom, 
    HomeHeading, 
    HomeParagraph,
    SkillsCon,
    SkillItem,
    SkillIcon,
    SkillPara,
    ProjectsCon,
    ProjectsItem,
    ProjectHeading,
    ProjectPara,
    ButtonCon,
} from "./styledComponents";

import './index.css'

const skillsList = [
    {id: 1, name: 'HTML5', src: HTML5},
    {id: 2, name: 'CSS', src: CSS3},
    {id: 3, name: 'JavaScript', src: JS},
    {id: 4, name: 'ReactJS', src: React},
    {id: 5, name: 'NodeJS', src: NodejS},
    {id: 6, name: 'SQLite', src: Sqlite},
    {id: 7, name: 'PYTHON', src: python},
    {id: 8, name: 'DSA', src: dsalogo},
    {id: 9, name: 'IOT', src: iotlogo},
    {id: 7, name: 'PYTHON', src: python},
]


const Home = () => {
    return (
        <>
        <Nav />
        <HomeDiv>
            <HomeLeftImage src={mylogo} type="button" />
            <HomeMiddle>
                <HomeMiddleImage src={lightbulb} />
            </HomeMiddle>
            <HomeRight>
                <HomeName>I AM <Name>VIGNESH NUKALA</Name></HomeName>
                <HomePara>RESPONSIBLE AND MOTIVATES STUDENT READY TO APPLY EDUCATION IN THE WORKPLACE. OFFERS EXCELLENT TECHNICAL ABILITIES WITH SOFTWARE AND APPLICATIONS,
                    ABILITIEY TO CHALLENGING WORK, AND EXCELLENT TIME MANAGEMENT SKILLS.
                    </HomePara>
                <SocialMedia>
                    <HomeButton>
                        RESUME<HomeAnchor href={VIGNESHNUKALA} download="VIGNESHNUKALA" ><IoCloudDownloadOutline className='download'/></HomeAnchor>
                    </HomeButton>
                    <LinksContainer>
                        <Link to="https://www.linkedin.com/in/vigneshnukala/" className='link'><BsLinkedin className='icon'/></Link>
                        <Link to="https://github.com/VigneshNukala" className='link'><BsGithub className='icon' /></Link>
                        <Link to="https://x.com/VigneshNukala" className='link'><BsTwitterX className='icon' /></Link>
                        <IoIosMail  className='icon'/>
                    </LinksContainer>
                </SocialMedia>
            </HomeRight>
        </HomeDiv>
        <HomeBottom>
            <HomeHeading>About me</HomeHeading>
            <HomeParagraph>Detail-oriented software developer with expertise in HTML, CSS, Bootstrap, JavaScript, and web development frameworks like React. Proficient in building scalable, efficient, and user-friendly applications. Experienced in working with RESTful APIs, databases, and front-end optimization. Passionate about solving complex problems with simple and elegant solutions.</HomeParagraph>
            <HomeHeading>My Skills</HomeHeading>
            <SkillsCon>
            {skillsList.map(each => (
                <SkillItem>
                    <SkillIcon key={each.id} src={each.src} alt={each.name} />
                    <SkillPara>{each.name}</SkillPara>
                </SkillItem>
            ))}
            </SkillsCon>
            <ProjectsCon>
                <ProjectsItem imageUrl={smartpot} href='' target="_blank" rel="noopener noreferrer">
                    <ProjectHeading>Slef Watering Smart Pot</ProjectHeading>
                    <ProjectPara>IOT, Aruino, C Language, Senosrs</ProjectPara>
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
            </ProjectsCon>
            <ButtonCon>
                <Link to="/projects" className="bottom-link"><FaArrowRightLong className='arrow'/>All Projects</Link>
                <Link to="/about" className="bottom-link"><FaArrowRightLong className='arrow'/>About Me</Link>
                <Link to="/contact" className="bottom-link"><FaArrowRightLong className='arrow'/>Contact me</Link>
            </ButtonCon>
        </HomeBottom>
        <Footer />
        </>
    )
}

export default Home;
