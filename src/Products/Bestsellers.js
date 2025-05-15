import data from "../data";
import Line from "../Header/MainPage/Line/Line";
import './Bestsellers.css';
import { useCart } from "../CartContext";

function Bestsellers(){
    const bestsellers = data.filter(element => element.searchTerm === 'bestseller');
    const { addToCart } = useCart();

    return(
        <div>
            <Line/>
        <div>
            <div className="bestHeader">
              <h1 className="header_best">Bestsellers</h1>
            </div>

            <div className="description">
                <p className="descr">Timeless. Loved. Chosen again and again.</p>
                <p className="descr">Discover the bouquets that have captured the hearts of our clients. From delicate pastels to bold blooms, each one tells a story — of joy, love, celebration, or just because. These floral favorites are more than arrangements — they’re memories in the making.</p>
                <p className="descr">Carefully curated with seasonal flowers and signature style, our bestsellers are perfect for any occasion — or no occasion at all.</p>
                <p className="descr">Which one will steal your heart?</p>
            </div>
            
           <div className="bestPictures">
           {bestsellers.map((element) =>{
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
export default Bestsellers;