import FBLogo from '../logos/DI_logo.svg';
import styled, {keyframes} from 'styled-components';
import {pulse} from 'react-animations';

function LandPage() {
    const Hinge = styled.div`animation: 2s 0s ${keyframes`${pulse}`} infinite`;

    return (
        <div className='container landing-container'>
            <Hinge>
                <img src={FBLogo} alt='NHS Digital Intelligence logo'></img>
            </Hinge>
        </div>
    );
  }
  
  export default LandPage;