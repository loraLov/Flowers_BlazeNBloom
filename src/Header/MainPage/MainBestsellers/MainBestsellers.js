import data from "../../../data";
import { Link } from "react-router-dom";
import './MainBestsellers.css';
import { useCart } from "../../../CartContext";

function MainBestsellers(){
    const bestsellers = data.filter(element => element.searchTerm === 'bestseller');
     const { addToCart } = useCart();
    return(
        <div>
            <div className="bestHeader">
              <Link className="bestText" to ='catalog/bestsellers'>Bestsellers</Link>
            </div>

            <div className="description">
                <p className="descr">Our most wanted bouquets — dangerously charming, delightfully legal, and totally unforgettable.</p>
                <p className="descr">Warning: these bestsellers may cause sudden joy, smiling selfies, and intense flower envy.</p>
            </div>

           <div className="bestPictures">
           {bestsellers.map((element) =>{
            const {id, name, image, price} = element;
            return(
                <div className="picture" key = {id}>
                    <img className="bestImg" src = {image} width = '300px' height = '400px' alt = 'bestseller'/>
                    <h3 className="bestName">{name}</h3>
                    <h4 className="bestPrice">${price}</h4>
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
    )
}
export default MainBestsellers;