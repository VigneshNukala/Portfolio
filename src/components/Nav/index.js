import {Link} from "react-router-dom"
import {NavBar, NavLeft, NavRight, NavItem,} from "./styledComponents";
import './index.css'
const Nav = () => {
return (
    <NavBar>
        <NavLeft>
            WELCOME !
        </NavLeft>
            <NavRight>
                <NavItem>
                    <Link to="#home" className="link">HOME</Link>
                </NavItem>
                <NavItem>
                    <Link to="#about" className="link">ABOUT</Link>
                </NavItem>
                <NavItem>
                    <Link to="#projects" className="link">PROJECTS</Link>
                </NavItem>
                <NavItem>
                    <Link to="#contact" className="link">CONTACT ME</Link>
                </NavItem>
            </NavRight>        
        </NavBar>
    )
}

export default Nav