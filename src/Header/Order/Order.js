import Line from '../MainPage/Line/Line';
import './Order.css';

function Order() {
    return(
        <div>
            <div>
                <Line/>
            </div>
        <div className='termsHeader'>
            <h2 className='termsHead'>How to Place an Order</h2>
        </div>

        <div className='social_media_main'>
        
            <ul className='social_media'>
              <p> 
                <strong>You can place your order through:</strong>
              </p>
                <li>Instagram Direct Message:
                    <a href="https://www.instagram.com/floral_storyteller/" target="_blank" rel="noopener noreferrer">
                    <img className='picIcon'  width="30" height="30" src="https://img.icons8.com/fluency-systems-regular/48/instagram-new--v1.png" alt="instagram-new--v1"/>
                    </a>
                </li>

                <li>
                WhatsApp:
                <a href="https://wa.me/5512219018?text=Hi!%20I'd like %20to order%20 a bouquet." 
                target="_blank" rel="noopener noreferrer">
                <img className='picIcon'  width="30" height="30" src="https://img.icons8.com/ios/50/whatsapp--v1.png" alt="whatsapp--v1"/>
                </a>
                </li>

                <li>
                    Our website (just add items to your cart and check out!)
                </li>
            </ul>

            <div className='social_media'>
            <p>
                <strong>Payment methods:</strong>
            </p>
            <p>We currently accept payments via Zelle or Venmo.</p>
            </div>
            
            <div className='social_media'>
            <p>
             <strong>Delivery options:</strong>
            </p>
            <p>Choose between local delivery or self pick-up — whichever is more convenient for you.</p>
            </div>  
            </div> 

           
            <div className='termsHeader'>
            <h1 className='termsHead'>Terms & Conditions</h1>
            </div>
            <div className='termstext'>
                <p>We care deeply about each order and do our best to make your floral experience special.
                Please read these simple terms before placing your order:</p>
            </div>
    
         <div className='termsContainer'>
            <div className='term_one'>
                <h4 className='cond_head'>1. Advance booking is recommended.</h4>
                <p className='rule'>Our arrangements are handcrafted using fresh seasonal flowers. Early orders give us more flexibility in sourcing and design.</p>
            </div>

            <div className='term_one'>
                <h4 className='cond_head'>2. Delivery & pickup.</h4>
                <p className='rule'>Delivery is available and discussed individually. We’ll confirm timing and address after your order is placed.</p>
            </div>
            <div className='term_one'>
                <h4 className='cond_head'>3. Payment terms.</h4>
                <p className='rule'>Orders will be processed only after full payment is received via Zelle or Venmo.
                Once your order is confirmed and the floral arrangement has been prepared, it becomes non-refundable.</p>
            </div>
            <div className='term_one'>
                <h4 className='cond_head'>4. Custom orders are non-refundable.</h4>
                <p className='rule'>Each bouquet is made just for you, so we do not offer returns or refunds once approved and delivered.</p>
            </div>
            <div className='term_one'>
                <h4 className='cond_head'>5. Substitutions may occur.</h4>
                <p className='rule'>Due to flower seasonality and availability, we may make thoughtful substitutions while keeping the agreed style and color palette.</p>
            </div>
            <div className='term_one'>
                <h4 className='cond_head'>6. Floral care.</h4>
                <p className='rule'>Once delivered or picked up, flowers become your responsibility. Please handle them with care — keep away from heat, drafts, and direct sun.</p>
            </div>
            <div className='term_one'>
                <h4 className='cond_head'>7. Changes & cancellations.</h4>
                <p className='rule'>Changes are accepted no later than 24 hours before delivery. Later changes may not be possible due to preparation and sourcing.</p>
            </div>
            <div className='term_one'>
                <h4 className='cond_head'>8. Need help choosing?</h4>
                <p className='rule'>We’re happy to guide you. If you're unsure about what to order — we’ll talk it through and create something beautiful, just for you.</p>
            </div>
            </div>   
        </div>
    )
}
export default Order;