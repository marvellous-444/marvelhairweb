import Nav from './NAV'
import Footer from './Footer'
import './Services.css'

export default function Services(){
    return(
        <>
        <Nav/>
        <div className="services-body">

            <div className='top-img-div'>
                <h1 className='top-img-h1'>You got the style. We got the goods.</h1>
                <p className='top-img-text1'>Stick to your classic cut, try a new style or personalize your trim.</p>
                <p className='top-img-text2'>Browse through our list of grooming services and book your appointment today!</p>
            </div>

            <div className='services-container'>

                <div className='services-box'>
                    <h1 className='services-h1'>OUR SERVICES</h1>
                    <h4 className='services-top-text'>We Got What You Want / We Got What You Need.</h4>

                    <div className='services-list-box'>

                        <div className='services-list-div'>
                            <span className='services-list-text1'>Men's Haircut <span className='price-tag'>$30</span> </span>
                            <span className='services-list-text3'>Clean-Up Price Vary <br />30 Minutes</span>

                        </div>

                        <div className='services-list-div'>
                            <span className='services-list-text1'>Men's Haircut & Beard Trim <span className='price-tag'>$45</span> </span>
                            <span className='services-list-text3'>Haircut + Beard Cleanup <br />45 Minutes</span>
                        </div>

                        <div className='services-list-div'>
                            <span className='services-list-text1'>Men's Haircut & Shave <span className='price-tag'>$50</span> </span>
                            <span className='services-list-text3'>Haircut + Hot Shave w. Towel <br />60 Minutes</span>
                            
                        </div>

                        <div className='services-list-div'>
                            <span className='services-list-text1'>Beard Trim <span className='price-tag'>$25</span> </span>
                            <span className='services-list-text3'>Beard Trim + Shape Up <br />30 Minutes</span>
                        </div>

                        <div className='services-list-div'>
                            <span className='services-list-text1'>Hot Towel Shave <span className='price-tag'>$30</span> </span>
                            <span className='services-list-text3'>Hot Towel + Straight Razor Shave <br />30 Minutes</span>

                        </div>

                        <div className='services-list-div'>
                            <span className='services-list-text1'>Kid's Haircut <span className='price-tag'>$25</span> </span>
                            <span className='services-list-text3'>Haircut for Kid's 10 & Under <br />30 Minutes</span>
                        </div>

                        <div className='services-list-div'>
                            <span className='services-list-text1'>Men's Haircut & Color <span className='price-tag'>$60</span> </span>
                            <span className='services-list-text3'>Haircut + Grey Coverage <br />30 Minutes</span>
                        </div>

                        <div className='services-list-div'>
                            <span className='services-list-text1'>Men's Color <span className='price-tag'>$30</span> </span>
                            <span className='services-list-text3'>Grey Coverage <br />30 Minutes</span>
                        </div>

                        <div className='services-list-div'>
                            <span className='services-list-text1'>Facial Treatment <span className='price-tag'>$60</span> </span>
                            <span className='services-list-text3'>Facial Exfoliation + Cleaning Treatment <br />30 Minutes</span>
                        </div>
                    </div>

                    <h4 className='policy'>CANCELLATION POLICY:</h4>
                    <div className='policy-text-div'>
                        <span className='policy-text'>Failure to show for a booked appointment will result in a $30 cancellation fee.</span>
                        <span className='policy-text'>Please notify your barber 24 hours in advance before canceling an appointment.</span>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}