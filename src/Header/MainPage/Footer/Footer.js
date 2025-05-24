import './Footer.css';
import logo from './logo.jpeg';

function Footer(){
    return(
        <div className='footer_container'>
           <div className='contact' >
            <p className='contact_head'>Contact us</p>
            <p className='phone'>phone: 551-221-9018</p>
            <p>Email: <a className='email' href="mailto:lauzhynskaya@gmail.com">lauzhynskaya@gmail.com</a></p>
            <p>Find more floral inspiration on our Instagram page! <br/>
                <a href="https://www.instagram.com/floral_storyteller/" target="_blank" rel="noopener noreferrer">
                <span className="picIconWrapper">
                <img className='picIcon'  width="30" height="30" src="https://img.icons8.com/fluency-systems-regular/48/instagram-new--v1.png" alt="instagram-new--v1"/>
                </span>
                </a>
            </p>
            <p> Have questions? We’ll be happy to answer them! <br/>
                <a href="https://wa.me/5512219018?text=Hi!%20I'd like %20to order%20 a bouquet." 
                target="_blank" rel="noopener noreferrer">
                    <span className="picIconWrapper">
                <img className='picIcon'  width="30" height="30" src="https://img.icons8.com/ios/50/whatsapp--v1.png" alt="whatsapp--v1"/>
                </span>
                </a>
            </p>
        </div>

        <div className='contact' >
            <h4 className='contact_head'>How to Place an Order</h4>
            <p>
                <strong>You can place your order through:</strong>
            </p>
            <div className='ord'>
                <p >Instagram:
                <a href="https://www.instagram.com/floral_storyteller/" target="_blank" rel="noopener noreferrer">
                <img className='picIcon'  width="30" height="30" src="https://img.icons8.com/fluency-systems-regular/48/instagram-new--v1.png" alt="instagram-new--v1"/>
                </a>
                </p>

                <p>
                WhatsApp:
                <a href="https://wa.me/5512219018?text=Hi!%20I'd like %20to order%20 a bouquet." 
                target="_blank" rel="noopener noreferrer">
                <img className='picIcon'  width="30" height="30" src="https://img.icons8.com/ios/50/whatsapp--v1.png" alt="whatsapp--v1"/>
                </a>
                </p>

                <p>Our website (just add items to your cart and check out!)</p>
            </div>
            <p>
                <strong>Payment methods:</strong>
            </p>
            <p>We currently accept payments via Zelle or Venmo.</p>
            <p>
             <strong>Delivery options:</strong>
            </p>
            <p>Choose between local delivery or self pick-up — whichever is more convenient for you.</p>
        </div>

           <div className='delivery_container'> 
            <p className='delivery_name'>Delivery</p>
            <p className='del_message'> We deliver flower arrangements across North Jersey. Looking for delivery somewhere else? Just reach out — we’re happy to help!</p>
            <p className='hours_del'>
                <strong>Delivery Hours:</strong>
            </p>
            <p className='hours_del'>Monday - Friday: 9.00am - 6.00pm</p>
            <p className='hours_del'>Saturday: 10.00am - 8.00pm</p>
            <p className='hours_del'>Sunday: day off</p>
           </div>
           <div className='footer_logo'>
            <img src = {logo}  alt='logo'/>
           </div>
        </div>
    )
}
export default Footer;