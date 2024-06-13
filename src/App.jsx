import React from "react";
import ReactDOM from "react-dom/client";

import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Pages/Home';
import Packages from './Pages/Packages';
import Gallery from './Pages/Gallery';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Not from './Pages/Not'


function App() {
    return (
        <div>
            <BrowserRouter>

             <Routes>
            
               <Route path="/" element={<Home/>}/>
               <Route path="/Packages" element={<Packages/>}/>
               <Route path="/Gallery" element={<Gallery/>}/>
               <Route path="/Contact" element={<Contact/>}/>
               <Route path="/About" element={<About/>}/>
               <Route path="*" element={<Not/>}/>

             </Routes>
            
            </BrowserRouter>
        </div>
    );
}

export default App;

