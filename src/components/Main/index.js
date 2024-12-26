import { Component } from "react";
import {Link} from "react-router-dom"

// import { BsLinkedin } from "react-icons/bs";
// import { BsGithub } from "react-icons/bs";
// import { BsTwitterX } from "react-icons/bs";
// import { BsFillTelephoneFill } from "react-icons/bs";
// import { FaLocationDot } from "react-icons/fa6";
// import { IoIosMail } from "react-icons/io";

import Home from '../Home'

import {NavBar, NavLeft, NavRight, NavItem,} from "./styledComponents";

import './index.css'

class Main extends Component{
    render(){
        return (
            <>
            <NavBar>
                <NavLeft>
                    About<span className="span">ME.</span>
                </NavLeft>
                <NavRight>
                    <NavItem>
                        <Link to="/" className="link">HOME</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="#about" className="link">ABOUT</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="#service" className="link"> SERVICE</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="#portfolio" className="link">PORTFOLIO</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="#resume" className="link">RESUME</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="#contact" className="link">CONTACT</Link>
                    </NavItem>
                </NavRight>
            </NavBar>
            <Home />
            </>
          );
    }
}

export default Main;