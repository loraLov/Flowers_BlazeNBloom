
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from './logo.jpeg';
import CatalogDropDown from "./Header/Catalog/CatalogDropDown";
import { useCart } from "./CartContext";
import './MainHeader.css';

function MainHeader() {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      <div className="left-header">
        <Link to='/'>
          <img className="logo" src={logo} width='240px' alt='logo' />
        </Link>
      </div>

      <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>☰</button>

      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <CatalogDropDown />
        <Link className="menu" to='/contact'>Contact</Link>
        <Link className="menu" to='/delivery'>Order</Link>
        <Link className="menu" to='/cart'>
          <img width="30" height="30"
            src="https://img.icons8.com/ios/50/shopping-bag--v1.png"
            alt="shopping-bag--v1"
          />
          {totalItems > 0 && `(${totalItems})`}
        </Link>
      </nav>
    </div>
  );
}

export default MainHeader;





