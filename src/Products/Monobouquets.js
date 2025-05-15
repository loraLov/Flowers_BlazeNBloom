import data from "../data";
import Line from "../Header/MainPage/Line/Line";
import './Bestsellers.css';
import { useCart } from "../CartContext";

function  Monobouquets(){
    const monobouquets = data.filter(element => element.searchTerm === 'mono');
    const { addToCart } = useCart();

    return(
        <div>
            <Line/>
        <div>
            <div className="bestHeader">
              <h1 className="header_best">Monobouquets</h1>
            </div>

            <div className="description">
                <p className="descr">The Beauty of One.</p>
                <p className="descr">There’s something undeniably powerful in simplicity.</p>
                <p className="descr">From bold roses to fluffy peonies, these bouquets are loved for their clean look, strong character, and timeless beauty.</p>
                <p className="descr">Simple? Yes. Boring? Never.</p>
                <p className="descr">Pick your favorite — or let your flowers pick you.</p>
            </div>
            
           <div className="bestPictures">
           {monobouquets.map((element) =>{
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
export default Monobouquets;