import bckgrnd from '../img/fun-classy-example-2-min.jpg'
import LeftContainer from './LeftContainer.js';
import RightContainer from './RightContainer.js'
import MainContainer from './MainContainer.js';
function ExamplePage(content) {
    return (
        MainContainer(
            bckgrnd,
            LeftContainer(

            ),
            RightContainer(
                
            )
        )
    );
  }
  
  export default ExamplePage;