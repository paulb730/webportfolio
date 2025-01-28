
import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import exported from './logo';

// or less ideally
import {Navbar,Container,Nav} from 'react-bootstrap';
const _navbar=()=>{
  const [activeLink,setActivelink]=useState('/');
  const [scrolled,setScrolled]=useState(false);
  const Logobrand=exported.newgb.generate_svg;
 
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

           const onUpdateActiveLink=(value)=>{
            setActivelink(value);
        }        
return(
        <header>

         <Navbar expand="lg" className="navbar">
        <Container>
        <Navbar.Brand href="/">
          <Logobrand/>
          </Navbar.Brand>
          <Link to="/" className={activeLink==='/'?'active navbar-link':'navbar-link'}
          onClick={()=>onUpdateActiveLink('/')}>
          <h5>Paul Benavides</h5>
          </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Link to="projects" className={activeLink==='projects'?'active navbar-link':'navbar-link'} 
            onClick={()=>onUpdateActiveLink('projects')}>Projects</Link>
            <Link to="skills" className={activeLink==='skills'?'active navbar-link':'navbar-link'}
             onClick={()=>onUpdateActiveLink('skills')}>Skills</Link>
            <Link to="about" className={activeLink==='about'?'active navbar-link':'navbar-link'}
             onClick={()=>onUpdateActiveLink('about')}>About</Link>
            </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
    )

}

export default _navbar;