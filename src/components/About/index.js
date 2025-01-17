import Slider from "react-slick";

import si from '../../data/si.jpg'
import nptel1 from '../../data/nptel1.jpg'
import nxt1 from '../../data/nxt1.jpg'
import nptel2 from '../../data/nptel2.jpg'
import nptel3 from '../../data/nptel3.jpg'



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Nav from '../Nav'
import Footer from '../Footer'

import {
    AboutDiv, 
    AboutHeading, 
    AboutPara, 
    AboutDescCon, 
    DescHeading, 
    CertificationHeading,
    DescPara,
    SliderContainer,
    SliderImgeCon,
    SliderImage,
    SliderImage1,
    HobbisList,
    HobbiesItem
} from './styledComponents'


const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          color: "#000000",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  };
  
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  };

const About = (pros) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 2000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      }
    return (
        <>
            <Nav />
            <AboutDiv>
                <AboutHeading>ABOUT ME</AboutHeading>
                <AboutPara>IT'S  A-ME,  MARIO!</AboutPara>
            </AboutDiv>
            <AboutDescCon>
                <DescHeading>MY BACKGROUND</DescHeading>
                <DescPara>
                    I am a skilled software developer with a strong foundation in HTML, CSS, Bootstrap, JavaScript and specializing in creating dynamic and user-friendly web applications. 
                    With hands-on experience in Node.js, Express, and React, I have a proven track record of building efficient, scalable, and maintainable solutions.
                    Beyond technical expertise, I am passionate about learning new technologies, continuously improving my skills, and collaborating with teams to deliver impactful software solutions.  
                </DescPara>
                <CertificationHeading>CERTIFICATIONS</CertificationHeading>
                <SliderContainer className="slider-container">
                    <Slider {...settings}>
                        <SliderImgeCon>
                            <SliderImage src={nptel1} />
                        </SliderImgeCon>
                        <SliderImgeCon>
                            <SliderImage src={nxt1} />
                        </SliderImgeCon>
                        <SliderImgeCon>
                            <SliderImage src={nptel2} />
                        </SliderImgeCon>
                        <SliderImgeCon>
                            <SliderImage1 src={si} />
                        </SliderImgeCon>
                        <SliderImgeCon>
                            <SliderImage src={nptel3} />
                        </SliderImgeCon>
                    </Slider>
                </SliderContainer>
                <DescHeading>MY HOBBIES AND INTERESTS</DescHeading>
                <HobbisList>
                    <HobbiesItem>Passionate about mastering bodyweight exercises to build strength and flexibility</HobbiesItem>
                    <HobbiesItem>Love playing basketball to stay active and improve team collaboration</HobbiesItem>
                    <HobbiesItem>Enjoy strategic and multiplayer games to enhance problem-solving and teamwork</HobbiesItem>
                    <HobbiesItem>Enthusiastic about exploring new cultures, cuisines, and landscapes around the world</HobbiesItem>
                </HobbisList>
                <DescHeading>ACHIEVEMENTS</DescHeading>
                <HobbisList>
                    <HobbiesItem>Runner up in GDSC group based Hackathon on a total participation of 30 groups</HobbiesItem>
                    <HobbiesItem>Winner in Tech Xplore Hackathon on Web Development among 50 student participants</HobbiesItem>
                </HobbisList>
            </AboutDescCon>
            <Footer />
        </>
    )
}
export default About;