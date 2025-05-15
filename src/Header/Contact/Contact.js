import Line from '../MainPage/Line/Line';
import './Contact.css';
function Contact() {
    return(
        <div>
            <div>
                <Line/>
            </div>
            <div className='contact_header'>
            <h1 className='contact_head'>Get in Touch</h1>
            <p className='contact_text'>We’d love to create something special just for you.</p>
            <p className='contact_text'>Have a question, a custom bouquet request, or planning an event? Reach out — we’re here for it!</p>
            </div>

            <div>
                <div className='contact_info'>

                    <div className='contactUs'>
                    <h4 className='contact_name'>Contact us</h4>    
                    <p className='phone'>phone: 551-221-9018</p>
                    <p>Email: <a className='email' href="mailto:lauzhynskaya@gmail.com">lauzhynskaya@gmail.com</a></p>
                    <p>Find more floral inspiration on our Instagram page!
                       <a href="https://www.instagram.com/floral_storyteller/" target="_blank" rel="noopener noreferrer">
                       <img className='picIcon'  width="30" height="30" src="https://img.icons8.com/fluency-systems-regular/48/instagram-new--v1.png" alt="instagram-new--v1"/>
                       </a>
                    </p>
                    <p> Have questions? We’ll be happy to answer them!
                       <a href="https://wa.me/5512219018?text=Hi!%20I'd like %20to order%20 a bouquet." 
                        target="_blank" rel="noopener noreferrer">
                     <img className='picIcon'  width="30" height="30" src="https://img.icons8.com/ios/50/whatsapp--v1.png" alt="whatsapp--v1"/>
                      </a>
                    </p>
                    <p className='location'>📍 Location: Based in Garfield, NJ, 07026 - delivering locally and to surrounding areas.</p>
                    </div>

                   <div className='delivery_container'> 
                   <h4 className='contact_name'>Delivery</h4>
                   <p className='del_message'> We deliver flower arrangements across North Jersey. Looking for delivery somewhere else? Just reach out — we’re happy to help!</p>
                   <p className='hours_del'>Delivery Hours:</p>
                   <p className='hours_del'>Monday - Friday: 9.00am - 6.00pm</p>
                   <p className='hours_del'>Saturday: 10.00am - 8.00pm</p>
                   <p className='hours_del'>Sunday: day off</p>
                   <p className='hours_del'>* Available outside of hours by appointment or via messenger.</p>
                   </div>

                   <div className='delivery_container'>
                    <h4 className='contact_name'>Orders & Collaborations</h4>
                    <p className='del_message'>Looking for a custom bouquet?</p>
                    <p className='del_message'> Planning a special event?</p>
                    <p className='del_message'>Have a creative project in mind?</p>
                    <p className='del_messageBold'>Let’s talk! We love personal stories, bold ideas, and all things floral.</p>
                   </div>
                </div>
           </div>
           <div className='imgContact'>
            <img src = 'https://images.pexels.com/photos/7156465/pexels-photo-7156465.jpeg' width = '100%' alt = 'flowers'/>
           </div>
        </div>
    )
}
export default Contact;