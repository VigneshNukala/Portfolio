import mylogo from '../../images/mylogo.jpg'

import {Link} from 'react-router-dom'

import { HomeDiv, HomeLeft, HomeLeftWelcome, HomeName, HomePara, HomeButton, HomeRightImage } from "./styledComponents";

import './index.css'

const Home = () => {
    return (
        <HomeDiv>
            <HomeLeft>
                <HomeLeftWelcome>Hello, Welcome</HomeLeftWelcome>
                <HomeName>I m Nukala Vignesh</HomeName>
                <HomePara>Responsible and motivated student ready to apply education in the workplace. Offers excellent technical abilities with software 
                and applications, ability to challenging work, and excellent time management skills. 
                </HomePara>
                <HomeButton>
                    <Link to="/contact" className='btn-link'>Contact me</Link>
                </HomeButton>
            </HomeLeft>
            <HomeRightImage src={mylogo} />
        </HomeDiv>
    )
}

export default Home;