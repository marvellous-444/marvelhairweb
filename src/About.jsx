import Nav from './NAV'
import Footer from './Footer'
import './About.css'


export default function About(){
    return(
        <>
        <Nav/>
        <div className="About-body">
            <div className='About-top-img'>
                <h1>Marvel’s Experts In</h1>
                <h1>Grooming & Personal Care</h1>
            </div>

            <div className='the-story-div'>
                <h2 className='the-story-h2'>The Story</h2>
                <p>
                    We believe that going to the barber shop should be more than an errand. It should be an <br /> experience. It’s important to us that you get a great haircut, receive remarkable service and <br /> build lasting relationships in a comfortable space. We are committed to being an inclusive <br /> and welcoming environment for every client and member of our team who enter our space <br /> regardless of gender, race, sexual orientation, religion or politics. We celebrate the diversity <br /> within our community and aim to be an example of unity in Fort Worth.
                </p>
            </div>

            <div className='Jonathan-quote-div'> 
                <h2 className='Jonathan-quote-h2'>“We want to make the men of Fort Worth</h2>
                <h2 className='Jonathan-quote-h2'>look great, feel great and love their barber</h2>
                <h2 className='Jonathan-quote-h2i'>shop experience.”</h2>
                
                <span className='Jonathan'>— Jonathan Morris</span>
            </div>

            <div className='About-last-text-div'>
                <h2>Ready to look your best?</h2>
                <button className='About-last-text-book'>Book Now</button>
            </div>
        </div>
        <Footer/>
        </>
    )
}