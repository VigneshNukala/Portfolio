import mylogo from '../../data/mylogo.png'
import lightbulb from '../../data/lightbulb.png'
import myresume from '../../data/myresume.pdf'

import Nav from '../Nav'

import {Link} from 'react-router-dom'

import { IoCloudDownloadOutline } from "react-icons/io5";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
// import { BsFillTelephoneFill } from "react-icons/bs";
// import { FaLocationDot } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { SiSqlite } from "react-icons/si";
import { FaPython } from "react-icons/fa";

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
} from "./styledComponents";

import './index.css'

const skillsList = [
    {id: 1, name: 'HTML5', src: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Tpa-mII4icyuzl-iDk1WDw.png'},
    {id: 2, name: 'CSS', src: <FaCss3Alt />},
    {id: 3, name: 'JavaScript', src: <FaJs />},
    {id: 4, name: 'ReactJS', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'},
    {id: 5, name: 'NodeJS', src: <FaNodeJs />},
    {id: 6, name: 'SQLite', src: <SiSqlite />},
    {id: 7, name: 'PYTHON', src: <FaPython />},
    {id: 7, name: 'PYTHON', src: <FaReact />},
    {id: 7, name: 'PYTHON', src: <FaReact />},
    {id: 7, name: 'PYTHON', src: <FaReact />},
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
                        RESUME<HomeAnchor href={myresume} download="resume" ><IoCloudDownloadOutline className='download'/></HomeAnchor>
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
            <HomeParagraph>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla</HomeParagraph>
            <HomeHeading>My Skills</HomeHeading>
            <SkillsCon>
            {skillsList.map(each => (
                <SkillItem>
                    <SkillIcon src={each.src} alt={each.name} />
                    <SkillPara>{each.name}</SkillPara>
                </SkillItem>
                
            ))}
            </SkillsCon>
        </HomeBottom>
        </>
    )
}

export default Home;