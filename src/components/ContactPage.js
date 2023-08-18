import bckgrnd from '../img/fun-classy-contact-min.jpg';
import MainContainer from './MainContainer.js';
import Contact from './Contact';
import RightContainer from './RightContainer.js';

function ContactPage() {
    return (
        MainContainer(
            bckgrnd,
            Contact(
                <div className='contact-sub-container'>
                    <div className='contact contact-1'>
                        <h2>Contact</h2>
                        <a target="_blank" rel="noreferrer" href="mailto:scwcsu.digitalintelligence@nhs.net?subject=Query%20from%20React%20Example">Digital Intelligence</a>
                        <br></br>
                        <a target="_blank" rel="noreferrer" href="https://www.scwcsu.nhs.uk/about/contact-us">NHS SCW</a>
                    </div>
                    <div className='contact contact-2'>
                        <h2>GitHub</h2>
                        <a target="_blank" rel="noreferrer" href="https://github.com/SCW-Digital-Intelligence-Team">Team</a>
                        <br></br>
                        <a target="_blank" rel="noreferrer" href="https://github.com/NHS-South-Central-and-West">Organisation</a>
                    </div>
                </div>
                
            ),
            RightContainer(
                
            )             
        )
    );
  }
  
  export default ContactPage;