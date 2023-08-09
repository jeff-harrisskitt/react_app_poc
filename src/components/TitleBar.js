import SCWLogo from '../logos/scw_logo_mono_white_txt_no_bg.png';
import NHSLogo from '../logos/nhs_white_transparent_bg - Compressed.png';

function TitleBar() {
    return (
      <div class='title-bar'>
        <div className='img-container'>
            <img className='logo' src={SCWLogo} alt='SCW hummingbird logo'></img>
        </div>
        <div className='title-text'>
            <p className='text-main'>DIGITAL INTELLIGENCE</p>
            <p className='text-sub'>FOR THE NHS, BY THE NHS</p>
        </div>
        <div className='img-container'>
        <img className='logo' src={NHSLogo} alt='NHS monochromatic logo'></img>
        </div>        
      </div>
    );
  }
  
  export default TitleBar;