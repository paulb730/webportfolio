import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <div className='scrollable'>
      <div className='pages'>
      <Routes>
      <Route exact path="/" 
             element={<Home/>}/>
      <Route path="/projects" 
             element={<Projects/>}/>       
      </Routes>
      </div>
      <Footer/> 
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
