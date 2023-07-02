import React from 'react'  
import Navbar from './components/Navbar'; 
import Welcome from './components/Welcome'; 
import Analytics from './components/Analytics'; 
import Newsletter from  './components/Newsletter'; 
import Footer from './components/Footer';


function App()  {
  return  (
    <div> 
        <Navbar /> 
        <Welcome />  
        <Analytics /> 
        <Newsletter /> 
        <Footer />
      
      </div> 
    );
  }

export default App;