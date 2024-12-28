import Nav from '../Nav'
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
        </>
    )
}
export default Contact;