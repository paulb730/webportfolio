import {BrowserRouter,Routes,Route,useLocation} from 'react-router-dom'
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Skills from './pages/Skills';
import { useEffect } from 'react';

function App() {
  
  //const hideheaderfooter=['/'].includes(location.pathname);
  return (
    <div className="App">
      <BrowserRouter>
      
      <div className='scrollable'>
      <div className='pages'>
      <Home/>
      <Routes>
            <Route path="/projects" 
             element={<Projects/>}/>  
      <Route path="/about" 
             element={<About/>}/> 
      <Route path="/skills" 
             element={<Skills/>}/>        
      
           
      </Routes>
      </div>
      
      </div>
      </BrowserRouter>
    </div>
  );
}

const HideComponents=()=>{
  const location=useLocation();
  const hideHeaderFooter =['/'].includes(location.pathname); 
  return(hideHeaderFooter )
}

export default App;
