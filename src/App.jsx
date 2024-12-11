import { StrictMode } from "react"
import React from "react";
import Home from './Home'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Services from './Services.jsx'
import Contact from './Contact.jsx'
import About from './About.jsx'
import AppointmentScheduler from "./AppointmentScheduler";



export default  function App(){


  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Services' element={<Services/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/AboutUs' element={<About/>}/>
          
        </Routes>
      </BrowserRouter>
    
    <div className="body">
      <AppointmentScheduler />
    
    </div>
    </>
  )
}

// App
