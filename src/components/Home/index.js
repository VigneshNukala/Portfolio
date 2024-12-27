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
import { FaArrowDownLong } from "react-icons/fa6";
// import { BsFillTelephoneFill } from "react-icons/bs";
// import { FaLocationDot } from "react-icons/fa6";

import { HomeDiv, HomeLeftImage, HomeMiddle, HomeMiddleImage, HomeRight, HomeName, Name, HomePara, SocialMedia, HomeButton, HomeAnchor, LinksContainer, ArrowButton} from "./styledComponents";

import './index.css'

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
        </>
    )
}

export default Home;