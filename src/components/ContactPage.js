import bckgrnd from '../img/fun-classy-contact-min.jpg'
import MainContainer from './MainContainer.js';
import ContactContainer from './Contact';
import RightContainer from './RightContainer.js'

function ContactPage() {
    return (
        MainContainer(
            bckgrnd,
            ContactContainer(
                <div className='contact-container'>
                    <div className='contact contact-1'>
                        <h2>Contact</h2>
                        <p>Digital Intelligence</p>
                        <p>NHS SCW</p>
                    </div>
                    <div className='contact contact-2'>
                        <h2>GitHub</h2>
                        <p>Digital Intelligence</p>
                        <p>NHS SCW</p>
                    </div>
                </div>
                
            ),
            RightContainer(
                
            )             
        )
    );
  }
  
  export default ContactPage;