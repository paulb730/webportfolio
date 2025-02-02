import { useState} from 'react';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {  Container,Card, CardBody, Row, Col} from "react-bootstrap";
import exported from './logo';

const SVG_icons=(text)=>{
    switch (text){
        default:
            return('Button')
        case 1:
        return(<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.382l1.447.723.005.003.027.013.12.056c.108.05.272.123.486.212.429.177 1.056.416 1.834.655C7.481 13.524 9.63 14 12 14c2.372 0 4.52-.475 6.08-.956.78-.24 1.406-.478 1.835-.655a14.028 14.028 0 0 0 .606-.268l.027-.013.005-.002L22 11.381V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.447 7.894.553-.276V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.382l.553.276.002.002.004.002.013.006.041.02.151.07c.13.06.318.144.557.242.478.198 1.163.46 2.01.72C7.019 15.476 9.37 16 12 16c2.628 0 4.98-.525 6.67-1.044a22.95 22.95 0 0 0 2.01-.72 15.994 15.994 0 0 0 .707-.312l.041-.02.013-.006.004-.002.001-.001-.431-.866.432.865ZM12 10a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clip-rule="evenodd"/>
          </svg>
          )   
        case 2:
            return(<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"/>
                <path fill-rule="evenodd" d="M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" clip-rule="evenodd"/>
                <path d="M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z"/>
              </svg>
              
              ) 
        case 3:
            return(<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 10c0-.55228-.4477-1-1-1h-3v2h3c.5523 0 1-.4477 1-1Z"/>
                <path d="M13 15v-2h2c1.6569 0 3-1.3431 3-3 0-1.65685-1.3431-3-3-3h-2.256c.1658-.46917.256-.97405.256-1.5 0-.51464-.0864-1.0091-.2454-1.46967C12.8331 4.01052 12.9153 4 13 4h7c.5523 0 1 .44772 1 1v9c0 .5523-.4477 1-1 1h-2.5l1.9231 4.6154c.2124.5098-.0287 1.0953-.5385 1.3077-.5098.2124-1.0953-.0287-1.3077-.5385L15.75 16l-1.827 4.3846c-.1825.438-.6403.6776-1.0889.6018.1075-.3089.1659-.6408.1659-.9864v-2.6002L14 15h-1ZM6 5.5C6 4.11929 7.11929 3 8.5 3S11 4.11929 11 5.5 9.88071 8 8.5 8 6 6.88071 6 5.5Z"/>
                <path d="M15 11h-4v9c0 .5523-.4477 1-1 1-.55228 0-1-.4477-1-1v-4H8v4c0 .5523-.44772 1-1 1s-1-.4477-1-1v-6.6973l-1.16797 1.752c-.30635.4595-.92722.5837-1.38675.2773-.45952-.3063-.5837-.9272-.27735-1.3867l2.99228-4.48843c.09402-.14507.2246-.26423.37869-.34445.11427-.05949.24148-.09755.3763-.10887.03364-.00289.06747-.00408.10134-.00355H15c.5523 0 1 .44772 1 1 0 .5523-.4477 1-1 1Z"/>
              </svg>
             ) 

    }
        


}
const PopUpBar=()=>{
    const [activeLink,setActivelink]=useState('/');
    const [isOpen,setIsOpen]=useState(false);
    const Logobrand=exported.newgb.generate_svg;
    const toggleSidebar=()=>{
        //switch on-off
        setIsOpen(!isOpen);
    };
    const onUpdateActiveLink=(value)=>{
        setActivelink(value);
    }   

    return(
        <Card class={' popup-sidebar-container' + (isOpen ? ' open' : '')}>
            
        <CardBody className='popup-sidebar'>
            <Container fluid={true} >
                   <Row className={'d-flex align-content-center' + (isOpen? ' flex-column':' ')}>
                    
                     <Col sm={(isOpen ? 12:6)} 
                     className={'column1 d-flex' +(isOpen ? ' flex-column':'') }  >
                     <Logobrand/>
                     { isOpen? '':<h2 >Paul Benavides</h2>}                     
                     </Col>
                     <Col sm={(isOpen ? 6:6)}  
                     className={'column1 d-flex ' +(isOpen ? ' flex-column':'')}>
                       <Link to={isOpen? '/':'projects'} 
                      onClick={()=>onUpdateActiveLink('projects') }>  <Button id='aboutbut' className='toggle-button' onClick={toggleSidebar}>
                        {isOpen ? SVG_icons(1):'Projects'}
                            </Button> </Link>  
                      
                     <Link to={isOpen? '/':'skills'}  
                     onClick={()=>onUpdateActiveLink('skills')} >
                        <Button className='toggle-button' onClick={toggleSidebar}>
                                 {isOpen ? SVG_icons(2):'Skills'}
                      </Button>                     
                     </Link>

                     <Link to={isOpen? '/':'about'} onClick={()=>onUpdateActiveLink('skills')} >
                     <Button className='toggle-button' onClick={toggleSidebar}>
                                 {isOpen ? SVG_icons(3):'About'}
                       </Button> 
                     </Link>
                      
                    </Col>
                      
                    
                    </Row> 

            </Container>
        
        </CardBody>
        </Card>

    );


};

export default PopUpBar;
