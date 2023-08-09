import bckgrnd from '../img/why-use-img-1-min.jpg';
import UELogo from '../logos/ubereats-2.png';
import KALogo from '../logos/khan acedemt-2.png';
import MSLogo from '../logos/microsoft-2.png';
import LeftContainer from './LeftContainer.js';
import RightContainer from './RightContainer.js';
import MainContainer from './MainContainer.js';

function WhyPage() {
    return (
        MainContainer(
            bckgrnd,
            LeftContainer(
                <div className='container'>
                    <div className='org-logos org-logos-1'>
                        <a className='org-logo' href='https://www.uber.com/en-EE/blog/ubereats-react-native/' target="_blank" rel='noreferrer'>
                            <img src={UELogo} alt='Uber Eats logo'></img>
                        </a>
                        <a className='org-logo' href='https://blog.khanacademy.org/our-transition-to-react-native/' target="_blank" rel='noreferrer'>
                            <img className='org-logo' src={KALogo} alt='Khan Academy logo'></img>
                        </a>                        
                    </div>
                    <div className='org-logos org-logos-2'>
                        <a className='org-logo' href='https://www.youtube.com/watch?v=IUMWFExtDSg' target="_blank" rel='noreferrer'>
                            <img className='org-logo' src={MSLogo} alt='Microsoft logo'></img>
                        </a>
                    </div>
                </div>
            ),
            RightContainer(
                <div className='container'>
                    <p>React offers a host of benefits: Stablity, security, access to the best visualisation libraries in the world and the ease with which a user-friendly interface can implemented to name just a few.</p>
                    <p>But don’t just take our word for it - on the left  you can, in their own words, hear from organisations that use React to deliver services.</p>
                </div>  
                
            )
        )
    );
  }
  
  export default WhyPage;