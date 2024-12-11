import { NavLink } from 'react-router-dom'
import './NAV.css'
import { FaBars } from "react-icons/fa";
import { useState } from 'react';



 const Navbar = () => {
           
        const [menuOpen, setMenuOpen] = useState(false)

    
     
    return(

        <>
            <nav>
               
                <img className="nav-logo" src="/image.png"/>
                
                
                
                <ul className={menuOpen ? "open" : ""}> 
                    <li><NavLink to="/">HOME</NavLink></li>
                    <li><NavLink to="/Services">SERVICES</NavLink></li>
                    <li><NavLink to="/Contact">CONTACT</NavLink></li>
                    <li><NavLink to="/AboutUs">ABOUT US</NavLink></li>
                </ul>
                
                <button className="book">BOOK NOW</button>

                
                <FaBars className='menu-bar' onClick={() => {
                    setMenuOpen(!menuOpen)
                    }}/>
                
                
            
            </nav>
        </>
    )

}


export default Navbar;