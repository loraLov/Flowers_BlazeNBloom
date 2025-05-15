
import data from "../data";
import Line from "../Header/MainPage/Line/Line";
import './Bestsellers.css';
import { useCart } from "../CartContext";

function BasketsBoxes(){
    const boxes = data.filter(element => element.searchTerm === 'box');
     const { addToCart } = useCart();

    return(
        <div>
            <Line/>
        <div>
            <div className="bestHeader">
              <h1 className="header_best">Flower Baskets and Boxes</h1>
            </div>

            <div className="description">
                <p className="descr">Flowers wrapped in comfort and charm.</p>
                <p className="descr">Our floral arrangements in hatboxes and baskets combine beauty with practicality — no vase needed, just pure delight. Designed to impress and crafted to last.</p>
                <p className="descr">Elegant. Ready to gift. Impossible to forget.</p>
            </div>
            
           <div className="bestPictures">
            
           {boxes.map((element) =>{
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
export default BasketsBoxes;
