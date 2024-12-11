import Navbar from './NAV'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import './Home.css'


export default function Home(){
    return(
        <>
        <Navbar/>
        <div className="Home-body">

            <div className="top-img">
                <h1 className="top-img-H1">Looking Your Best Never</h1>
                <h1 className="top-img-H2">Goes Out of Style</h1>
                <button className='top-img-book'>BOOK NOW</button>
            </div>

            
            
            <div className="the-vibe-container">
                <div className="the-vibe-box">
                    <h1 className="the-vibe-h1">The Vibe</h1>
                    <p className="the-vibe-text-div">
                        MARVEL HAIR CUT  specializes in classic cuts, beard trims, hot towel shaves  and quality grooming products. Our team of professional and knowledgeable barbers work to help you achieve your best look. We thrive on great music, thoughtful conversation and fostering relationship in our community. We’ve created a laid back environment for your regular dose of self-care.
                    </p>
                </div>
            </div>

            
            <div className='Home-services-container'>
                <div className='Home-services-box'>
                    <h1 className='Home-services-h1'>SERVICES</h1> 

                    <h2 className='Home-services-h2'>Upgrade your style.</h2>  

                    <span className='Home-services-text-div'>Look and feel better from head to toe with our range of services. From haircuts to massages and overall grooming, treat yourself to a day at Bruno’s Barbers.</span>                    
                    
                </div>

                <div className='Home-services-buttons-div'>
                    <button className='Home-services-link-button'>
                        <Link className='Home-services-link' to="/Services">View Services</Link>
                    </button>
                                        
                    
                    <button className='Home-services-book-button'>Book Now</button> 

                </div>

                <img className='Home-services-img' src="/Servicesimg.png" alt="" />
            
            </div>



            <div className='quote-box'>

                <div className='quote-div'>

                   <h1 className='quote-h1'>”</h1>

                    <h1 className='quote-h1ii'>Whatever you do, strive to do it so well that  no man living and no man dead and no man  yet to be born could do it any better.</h1>
                    
                    <h1 className='quote-h1'>”</h1>
                    
                    <span>— Benjamin Elijah Mays</span>
                </div>

            </div>

        </div>
        <Footer/>
        </>
    )
}