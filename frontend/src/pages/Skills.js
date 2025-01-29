import {Container,Col,Row, Button} from 'react-bootstrap';
import exported from'../components/logo';
import useWindowSize from "../components/windowsize";
import dynamic_card from '../components/card';

const Skills=()=>{

    const Github=exported.git_logo.generate_svg;
    const Instagram=exported.ins_logo.generate_svg;
    const LinkedIn=exported.link_logo.generate_svg;
    const Logo = exported.newgb.generate_svg;
    const size=useWindowSize();

    const children=[
        [
        {type:"h3",
         props:{className:"d-flex justify-content-center"},
         children:"Proyectos"}
     ],
     [   
    {type:"h3",
     props:{className:"d-flex justify-content-center"},
     children:"Skills"}
    ],
    [   
    {type:"h3",
     props:{className:"d-flex justify-content-center"},
     children:"About"}
    ]
       
    ]
    const array=
    [
     [
        {key:"Projects",classN:"",
        data:{type:"div",
              props:{className:"card border-0 text-bg-primary"},
              children:children[0]}},
        {key:"as",classN:"",
            data:{type:"div", props:{className:"card border-0 text-bg-primary"},
                  children:children[1],  
                }},
        {key:"About",classN:"",
                data:{type:"div", props:{className:"card border-0 text-bg-primary "},
                      children:children[2]      
                }}
     ],
    ]    
    const Cardmenu=dynamic_card("card_footer",array,children);
    

    return(
    <footer className='footer'>
      
        <Container>
       <section>
       <Row>  
            <Col xs={12} md={4} lg={4} className='d-flex justify-content-center '>
            <a id="logofooter" href='/'>
                 <Logo/>
                 </a>
            </Col>
            <Col xs={12} md={4} lg={4} className='d-flex align-items-center'>
            <p> Ingeniero en Computación Gráfica, especializado en crear soluciones visuales mediante la fusión de métodos artísticos
                y técnicos. Como generalista 3D he participado en proyectos afines a la visualización de productos, creación de assets
                para videojuegos, optimización de recursos para diferentes plataformas y análisis de calidad. Como desarrollador he
                estado involucrado en proyectos web usando React y angular en el lado frontend y express.js, mongo.db en el backend.
                 <br/>
                 <br/>
                 <a href='https://drive.google.com/file/d/1-o_6jgmoxneXe9NEHbnc1TD9831V8Jbj/view?usp=sharing'target='_blank' rel='noreferrer' >
                  <Button  className='primary'> Mas acerca de mi</Button>     
                 </a>  </p>
            </Col>

            {/**  */}
            <Col xs={12} md={4} lg={4} className='social-section d-flex '>
            <a     href='https://github.com/paulb730' target='_blank' rel='noreferrer'>
                     {/* this part should be in javascript*/}
                     {/** */}
                     <Github/> 
                    
                    </a>
                    <a  href='https://www.linkedin.com/in/paul-benavides-0120a013b/'  target='_blank' rel='noreferrer'>
                     {/* this part should be in javascript*/}
                     {/**  */}
                     <LinkedIn/>
                    
                    </a>
                    <a   href='https://www.instagram.com/paulest730/' target='_blank' rel='noreferrer'>
                     {/* this part should be in javascript*/}
                     {/**  */}
                     <Instagram/>
                    
                    </a>
             </Col>
         </Row>
      
                    
        </section>

        <section>
                 {/**   */}
         
                 {size.width > 768 &&  <div id="card_foot">{Cardmenu}</div>} 
         {size.width <=768 && <br></br>} 
         

        </section>

    
        <div class="text-center copyright" >
    © 2024  Paul Benavides Todos los Derechos Reservados
        </div>


        </Container>
    </footer>
    )
   


}


export default Skills;
