import { Link } from "react-router-dom";
import './MainButtons.css';
function MainButtons(){
    return(
       <div className="mainButtons">
        <Link className="mainBtn" to ='/catalog/bestsellers'>Bestsellers</Link>
        <Link className="mainBtn" to ='/catalog/monobouquets'>Monobouquets</Link>
        <Link className="mainBtn" to = '/catalog/customBouquets'>Custom Bouquets</Link>
        <Link className="mainBtn" to = '/catalog/BasketsBoxes'>Flower Baskets and Boxes</Link>
        <Link className="mainBtn" to ='/catalog/wow'>Wow Collection</Link>
        <Link className="orderBtn" to='/catalog/all products'>All Products</Link>
       </div>
    )
}
export default MainButtons;