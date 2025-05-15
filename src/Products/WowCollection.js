import data from "../data";
import Line from "../Header/MainPage/Line/Line";
import './Bestsellers.css';
import { useCart } from "../CartContext";

function WowCollection(){
    const wow = data.filter(element => element.searchTerm === 'wow');
    const { addToCart } = useCart();

    return(
        <div>
            <Line/>
        <div>
            <div className="bestHeader">
              <h1 className="header_best">Wow Collection</h1>
            </div>

            <div className="description">
                <p className="descr">Big, bold, unforgettable.</p>
                <p className="descr">These show-stopping arrangements are made to impress — with lush textures, rich colors, and statement blooms that speak louder than words.</p>
                <p className="descr">Our Wow Bouquets are luxurious, voluminous, and full of character — each one designed to leave a lasting impression.</p>
                <p className="descr">These bouquets turn heads and win hearts.</p>
            </div>
            
           <div className="bestPictures">
           {wow.map((element) =>{
            const {id, name, image, price, description} = element;
            return(
                <div className="picture" key = {id}>
                    <img className="bestImg" src = {image} width = '300px' height = '400px' alt = 'bestseller'/>
                    <h3 className="bestName">{name}</h3>
                    <h4 className="bestPrice">${price}</h4>
                    <p className="descrBest">{description}</p>
                    <button
                      className="bestAdd"
                      onClick={() => addToCart({id, name, image, price})}
                    >
                      Add to cart
                    </button>
                </div>
            )
           })}
           </div>
        </div>
        </div>
    )
}
export default WowCollection;