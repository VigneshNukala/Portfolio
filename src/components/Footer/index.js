import vn from '../../data/vn.jpg'

import {
    FooterDiv,
    FooterLeft,
    FooterMiddle,
    FooterPara,
    FooterImage,
    FooterRight,
} from './styledComponents'

const Footer = () => {
    return (
        <FooterDiv>
            <FooterLeft>VIGNESH NUKALA</FooterLeft>
            <FooterRight>
                <FooterMiddle>
                    <FooterPara>vigneshnukala@gmail.com</FooterPara>
                    <FooterPara>+91 8247416510</FooterPara>
                </FooterMiddle>
                <FooterImage src={vn} />
            </FooterRight>
        </FooterDiv>
    )
}


export default Footer;