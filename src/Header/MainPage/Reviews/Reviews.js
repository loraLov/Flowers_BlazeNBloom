import './Reviews.css';

function Reviews(){
    return(
        <div>
        <div className='rev_header'>
        <h1 className='header_rev'>Reviews</h1>
        </div>

        <div className='rev_container'>
            <div className='rev_mes'>
                <h5 className='rev_customer'>Mary</h5>
                <p className='customerMes'> "I ordered a bouquet for my friend's birthday and it was absolutely beautiful! The flowers were fresh, vibrant, and exactly what I had in mind. The delivery was quick, and the customer service was so friendly. I’ll definitely be ordering again soon!"</p>
            </div>

            <div className='rev_mes'>
                <h5 className='rev_customer'>Emily</h5>
                <p className='customerMes'> "I ordered a bouquet for my anniversary and it was stunning! The flowers were fresh, and the arrangement was beautifully designed. The delivery was on time, and the whole experience was so smooth. I’ll definitely be coming back for my future flower needs!"</p>
            </div>

            <div className='rev_mes'>
                <h5 className='rev_customer'>Karoline</h5>
                <p className='customerMes'> "I’m so glad I found this florist! I’ve ordered flowers a couple of times now, and each time the arrangements are gorgeous and unique. The personal touch and attention to detail really make them stand out. Highly recommend!"</p>
            </div>

            <div className='rev_mes'>
                <h5 className='rev_customer'>Olivia</h5>
                <p className='customerMes'> "I can’t express how happy I am with the service! The bouquet I received was beyond my expectations. The colors were so vibrant and the flowers were so fresh. The delivery was quick, and the process was so easy. I’ll be recommending this florist to all my friends!"</p>
            </div>

            <div className='rev_mes'>
                <h5 className='rev_customer'>Laura</h5>
                <p className='customerMes'> "I’ve tried many florists before, but this one is my favorite by far! The arrangements are always creative and unique, and the customer service is amazing. I ordered flowers for a special occasion, and they made it even more memorable. I’ll be a loyal customer for sure!"</p>
            </div>
        </div>
    </div>
    )
}
export default Reviews;