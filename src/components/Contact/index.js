import Nav from '../Nav'
import Footer from '../Footer'
import {ContactDiv, ContactHeading, ContactPara, ContactDescCon, ContactDescHeading} from './styledComponents'
const Contact = (pros) => {
    return (
        <>
            <Nav />
            <ContactDiv>
                <ContactHeading>CONTACT ME</ContactHeading>
                <ContactPara>SAY HELLO TO ME</ContactPara>
            </ContactDiv>
            <ContactDescCon>
                <ContactDescHeading>Contact Me</ContactDescHeading>
                
            </ContactDescCon>
            <Footer />
        </>
    )
}
export default Contact;