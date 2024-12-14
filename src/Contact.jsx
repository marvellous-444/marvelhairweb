import Nav from './NAV'
import Footer from './Footer'
// import {APIProvider, Map} from '@vis.gl/react-google-maps';
import './Contact.css'

export default function Contact(){
    return(
        <>
        <Nav/>
        <div className="Contact-body">

            <div className='Contact-top-img'>
                <h1>Contact Us</h1>
            </div>

            <div className='Contact-details-box'>

                <div className='Contact-form-container'>
                    <div className='Contact-form-box'>
                        
                        <div className='Contact-form-text-div'>
                            <h1 className='Contact-form-h1'>Get in touch.</h1>
                            <div className='Contact-form-text'>Use the form below to drop us an email.</div>
                        </div>
                        
                        <form action="" method='' className='Contact-form'>

                            <label htmlFor="Name">Name</label>
                            <input className='Contact-form-name' type="text" name='Name'/>
                            

                            <label htmlFor="email">Email</label>
                            <input className='Contact-form-email' type="email" name="email" id="" />
                            

                            <label htmlFor="Message">Message</label>
                            <textarea className='Contact-form-textbox' name="Message" id=""></textarea>
                            

                            <input className='Contact-form-send' type="submit" value="SEND"/>
                            
                        </form>

                    </div>
                    
                    <img className='Contact-img' src="/tkll.png" alt="" />
                </div>
                                   

                

                <div className='Contact-bottom-div1'>
                    <h2 className='Contact-bottom-h2'>SAY HELLO</h2>                        
                    <div className='Contact-bottom-line-div'>PHONE: <a className='Contact-bottom-line-link' href="tel:+2348074342187">+234 807-434-2187</a></div>
                </div>

                <div className='Contact-bottom-div2'>
                    <div className='Contact-bottom-header-div'>
                        <h2 className='Contact-bottom-h2'>ADDRESS</h2>
                        <h4 className='Contact-bottom-h4'>Come Say Hello!</h4>
                    </div>
                    <span className='Contact-bottom-span2'>Along airport road Between mrs filling Station & <br /> Chamber Of Commerce Fct Abuja.</span>   
                </div>

                <div className='Contact-bottom-div3'>
                    <div className='Contact-bottom-header-div2'>
                        <h2 className='Contact-bottom-h2'>HOURS</h2>
                        <h4 className='Contact-bottom-h4'>Come Get Cut!</h4>
                    </div>

                    <div className='Contact-bottom-span-div'>
                        <span>Sunday: 9am - 4pm</span>
                        <span>Monday: 9am - 7pm</span>
                        <span>​​Tuesday: 9am - 7pm</span>
                        <span>​Wednesday: 9am - 7pm</span>
                        <span>Thursday: 9am - 7pm</span>
                        <span>Friday: 9am - 7pm</span>
                        <span>Saturday: 9am - 6pm</span>
                    </div>
                </div>
                

            </div>

        </div>
        <Footer/>
        </>
    )
}