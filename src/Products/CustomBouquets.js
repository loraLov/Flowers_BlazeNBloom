
import data from "../data";
import Line from "../Header/MainPage/Line/Line";
import './Bestsellers.css';
import { useCart } from "../CartContext";

function CustomBouquets(){
    const customs = data.filter(element => element.searchTerm === 'custom');
    const { addToCart } = useCart();

    return(
        <div>
            <Line/>
        <div>
            <div className="bestHeader">
              <h1 className="header_best">Custom Bouquets</h1>
            </div>

            <div className="description">
                <p className="descr">Not just flowers — stories in bloom.</p>
                <p className="descr">Our custom bouquets are one-of-a-kind creations, where every stem has a purpose and every bloom tells a story.</p>
                <p className="descr">These are not just arrangements — they’re expressions. Created with a unique eye, bold heart, and signature touch.</p>
                <p className="descr">You won’t find two alike — and that’s exactly the point.</p>
            </div>
            
           <div className="bestPictures">
           {customs.map((element) =>{
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
export default CustomBouquets;