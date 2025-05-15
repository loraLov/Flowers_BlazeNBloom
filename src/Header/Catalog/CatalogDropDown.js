import './catalog.css';
import { useState } from "react";
import { Link } from "react-router-dom";

function CatalogDropDown(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () =>{
        setIsOpen((prev) => !prev)
    };
   
    return(
        <div className="catalog-wrapper">
           <button className="dropButton menu btn" onClick = {toggleMenu}>Catalog</button>
           {isOpen &&(
            <div className="dropdown">
                <Link to='/catalog/all products'>All products</Link>
                <Link to ='/catalog/bestsellers'>Bestsellers</Link>
                <Link to ='/catalog/monobouquets'>Monobouquets</Link>
                <Link to = '/catalog/customBouquets'>Custom Bouquets</Link>
                <Link to = '/catalog/basketsBoxes'>Flower Baskets and Boxes</Link>
                <Link to ='/catalog/wow'>Wow Collection</Link>
            </div>
           )}
        </div>

    )
}
export default CatalogDropDown;