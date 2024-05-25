
import Footer from "./Footer";
import Home from "./Home";
import Proj from "./Proj";
import Contact from "./contact";
import Projects from "./projects";

import "./style.css"
import { Route , Routes ,BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className='homepage'>
      <Home />
      <Routes>
         
          <Route path="/skilles" element={<Projects />} />
          <Route path="/projects" element={<Proj/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer/>

      </div>
    </BrowserRouter>
    
  );
}

export default App;
