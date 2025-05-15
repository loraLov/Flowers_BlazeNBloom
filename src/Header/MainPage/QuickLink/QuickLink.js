import './QuickLink.css';

function QuickLink(){
    return(
        <div class="fixed-links">
                <a href="https://www.instagram.com/floral_storyteller/" target="_blank" rel="noopener noreferrer">
                <img className="social-icon instagram" src="https://img.icons8.com/fluency-systems-regular/48/instagram-new--v1.png" width='30px' height ='30px' alt="instagram-new--v1"/>
                </a>
  
                <a href="https://wa.me/5512219018?text=Hi!%20I'd like %20to order%20 a bouquet." 
                target="_blank" rel="noopener noreferrer">
                <img className="social-icon whatsapp" src="https://img.icons8.com/ios/50/whatsapp--v1.png" width='30px' height ='30px' alt="whatsapp--v1"/>
                </a>

</div>
    )
}
export default QuickLink;