import { Card, CardBody, Col, Container, Row,Button } from "react-bootstrap"
import exportation from "../components/logo";

const Projects = () => {
    const Ilu=exportation.illustration.generate_local_svg    
    return (

        <div className="projects">
            <Container>

            <Card className="main_card">
                <CardBody>
                    <Container>
                        <Row>
                        <div id="view3D">

                        <spline-viewer id="canvas_display" url="https://prod.spline.design/ZrXVRxWumAdjO8jW/scene.splinecode"></spline-viewer>

                        </div>
                       

                        </Row>

                    </Container>

                </CardBody>
 

            </Card>
              

              <Card className="main_card">
                <CardBody>
                    <Container>
                        <Row>
                            <Col xs={12} md={6} lg={6} className="column1 d-flex">
                            <div>
                                <h3> TECH</h3>
                             

                                </div>  
                            </Col>
                            <Col xs={12} md={6} lg={6} className="column2 d-flex">
                             <div>
                                <h3 > ART</h3>
                             

                                </div>   
                            </Col>

                        </Row>

                    </Container>

                </CardBody>
 

            </Card>



            </Container>

           
        </div>






    )
}



export default Projects