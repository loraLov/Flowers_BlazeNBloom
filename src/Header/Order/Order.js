import Line from '../MainPage/Line/Line';
import './Order.css';

function Order() {
    return(
        <div>
            <div>
                <Line/>
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
                <p className='rule'>A 20% deposit is required to confirm your order. The remaining balance is due after you receive a photo of the finished bouquet and approve it.</p>
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