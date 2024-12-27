import { Component } from "react";


// import { BsLinkedin } from "react-icons/bs";
// import { BsGithub } from "react-icons/bs";
// import { BsTwitterX } from "react-icons/bs";
// import { BsFillTelephoneFill } from "react-icons/bs";
// import { FaLocationDot } from "react-icons/fa6";
// import { IoIosMail } from "react-icons/io";

import Home from '../Home'
import Nav from "../Nav";

import './index.css'

class Main extends Component{
    render(){
        return (
            <div className="main">
            <Nav />
            <Home />
            </div>
          );
    }
}

export default Main;