import bckgrnd from '../img/fun-classy-landing-3-min.jpg'
import FBLogo from '../logos/facebook.webp'
import PPLogo from '../logos/paypal.png'
import DBLogo from '../logos/dropbox.jpg'
import SFLogo from '../logos/salesforce-2.png'
import LeftContainer from './LeftContainer.js';
import RightContainer from './RightContainer.js'
import MainContainer from './MainContainer.js';

function WhatPage() {
    return (
        MainContainer(
            bckgrnd,
            LeftContainer(
                <div className='container'>
                    <h2>React is a Javascript-based web development library</h2>
                    <p>It makes it easy to build web apps that meet a wide variety of needs on almost any platform, including the one you are using right now.</p>
                    <p>We’ve included a short, but by no means exhaustive list of organisations that make use of the library on the right.</p>
                </div>                
            ),
            RightContainer(
                <div className='container'>
                    <div className='org-logos org-logos-1'>
                        <a className='org-logo' href='https://en-gb.facebook.com/' target="_blank" rel='noreferrer'>
                            <img src={FBLogo} alt='Facebook logo'></img>
                        </a>
                        <a className='org-logo' href='https://www.dropbox.com/' target="_blank" rel='noreferrer'>
                            <img className='org-logo' src={DBLogo} alt='Dropbox logo'></img>
                        </a>                        
                    </div>
                    <div className='org-logos org-logos-2'>
                        <a className='org-logo' href='https://en-gb.facebook.com/' target="_blank" rel='noreferrer'>
                            <img className='org-logo' src={PPLogo} alt='PayPal logo'></img>
                        </a>
                        <a className='org-logo' href='https://www.dropbox.com/' target="_blank" rel='noreferrer'>
                        <img className='org-logo' src={SFLogo} alt='SalesForce logo'></img>
                        </a>  
                    </div>
                </div>
            )
        )
        
    );
  }
  
  export default WhatPage;