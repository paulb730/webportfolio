import {  Container,Card, CardBody, Row, Col, Button} from "react-bootstrap"
//import exported from '../components/logo';

import exportation from "../components/logo";
import useWindowSize from "../components/windowsize";
import Contact from "../components/contactform";

import { useState,useEffect } from 'react';


const About = () => {
    //const Ilu = exported.illustration.generate_local_svg;
 const LinkedIn=exportation.link_logo.generate_svg;
 const Instagram=exportation.ins_logo.generate_svg;
 const Github=exportation.git_logo.generate_svg;
 const Ilust=exportation.illustration.generate_local_svg;
 const size=useWindowSize();
 const [scrolled,setScrolled]=useState(false);
 useEffect(()=>{
     const onScroll=()=>{
       if (window.scrollY>50) {
         setScrolled(true);
       } else {
         setScrolled(false);
       }
     }
     window.addEventListener("scroll",onScroll);
     return ()=>window.removeEventListener("scroll",onScroll)
      },[])
     return (
        <Container fluid={true}  className="container_home">
        <Card className="main_card">
            <CardBody>
                <Container fluid={true}>
                    <Row>
                        <Col xs={12} md={6} lg={6} className="column1 d-flex">
                         {/** <div id="view3D">
                         {size.width > 768 && <spline-viewer id="canvas_display" url="https://prod.spline.design/IfOe-vGloRK7wB1v/scene.splinecode"></spline-viewer>}
                         {size.width <= 768 && <spline-viewer id="canvas_display" url="https://prod.spline.design/mOLYpbLYvU4j6voI/scene.splinecode"></spline-viewer> }
                         </div>*/}
                             
                        </Col>
                        <Col xs={12} md={6} lg={6} className="column2 d-flex">
                         <div>
                            <h3 className="h6_enph">Hola, soy Paul</h3>
                            <span id="subtitulo"> Desarrollador de Software y Modelador 3D</span>
                            <p>
                            <span className="h6_enph"> SOY </span> un apasionado en crear y definir 
                            proyectos donde el desarrollo de software y el arte 3D convergan en un mismo 
                            objetivo: <span className="h6_enph">
                                Crear experiencias únicas e inmersivas.
                                </span>
                            </p>
                            <a href="/projects" >
                                <Button className="primary">
                                    Más acerca de mi 
                                </Button>
                            </a>
                            <a href="/projects" >
                             <Button className="primary">
                                 Proyectos  
                             </Button>
                            </a>


                            </div>   
                        </Col>

                    </Row>

                </Container>
            </CardBody>
        </Card>
        <Card id="acercademi" className="main_card">
            <CardBody>
                <Container fluid={true}>
                    <Row>
                        <Col xs={12} md={6} lg={6} className="column2 d-flex">
                        <div className="social-icon">
                           <h3 className="h6_enph"> Acerca de mi </h3>
                            <p>
                            Soy Paul Benavides Ingeniero en Computación Gráfica especializado en diseñar 
                            soluciones digitales.Mis conocimientos base han permitido involucrarme tanto en la industria artística 
                            como técnica. He colaborado en proyectos de Realidad Virtual con el objetivo 
                            de promover nuevas experiencias inmersivas
         
                            </p>
                           <a href="https://drive.google.com/file/d/1-o_6jgmoxneXe9NEHbnc1TD9831V8Jbj/view?usp=sharing" target='_blank' rel='noreferrer'>
                              <LinkedIn/>
                            </a>
                            <a href="https://drive.google.com/file/d/1-o_6jgmoxneXe9NEHbnc1TD9831V8Jbj/view?usp=sharing" target='_blank' rel='noreferrer'>
                              <Instagram/>
                            </a>
                            <a href="https://drive.google.com/file/d/1-o_6jgmoxneXe9NEHbnc1TD9831V8Jbj/view?usp=sharing" target='_blank' rel='noreferrer'>
                              <Github/>
                            </a>
                            </div> 
                        </Col>
                        <Col xs={12} md={6} lg={6} className="column1 d-flex ">
                        {/** <div id="view3D">
                         {size.width > 768 && <spline-viewer id="canvas_display" url="https://prod.spline.design/zat3Hpr6Ia15k2hT/scene.splinecode"></spline-viewer>}
                         {size.width <= 768 && <spline-viewer id="canvas_display" url="https://prod.spline.design/4FBT9UU8iDBvwgwV/scene.splinecode"></spline-viewer> }
                         </div>*/}
                        </Col>
                    </Row>

                </Container>

            </CardBody>


        </Card>
        <Card id="main_form" className="main_card">
            <CardBody>
                <Container fluid={true}>
                    <Row>
                        <Col xs={12} md={6} lg={6} className="column1 d-flex">
                        <Ilust/>                  
                        </Col>
                        <Col xs={12} md={6} lg={6} className="column2 d-flex">
                        <Contact/>
                        </Col>

                    </Row>

                </Container>

            </CardBody>
         </Card>
        </Container>
            )
 }

 export default About;