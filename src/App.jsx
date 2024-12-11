import { StrictMode } from "react"
import React from "react";
import Home from './Home'
import './App.css'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Services from './Services.jsx'
import Contact from './Contact.jsx'
import About from './About.jsx'




export default  function App(){


  return (
    <>
      
      <BrowserRouter>
        <Switch>
          <Route path='/' component={<Home/>}/>
          <Route path='/Services' component={<Services/>}/>
          <Route path='/Contact' component={<Contact/>}/>
          <Route path='/AboutUs' component={<About/>}/>
          
        </Switch>
      </BrowserRouter>
    
    <div className="body">
    
    </div>
    </>
  )
}

// App
