import data from "../data";
import { useState } from "react";
import Line from "../Header/MainPage/Line/Line";
import './Bestsellers.css';
import { useCart } from "../CartContext";

function AllProducts(){
    const [products, setProducts] = useState(data);
    const { addToCart } = useCart();

    return(
        <div>
            <Line/>
        <div>
            <div className="bestHeader">
              <h1 className="header_best">All Products</h1>
            </div>

            <div className="description">
                <p className="descr">Every Bloom We Love.</p>
                <p className="descr">Explore our full collection of floral creations — from delicate mono bouquets to lush designer pieces.</p>
                <p className="descr">Big or small, pastel or bright — each bouquet is thoughtfully arranged and ready to bring joy.</p>
                <p className="descr">Take a look and see what speaks to you.</p>
            </div>
            
           <div className="bestPictures">
            
           {products.map((element) =>{
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
export default AllProducts;