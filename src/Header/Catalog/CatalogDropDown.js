import './catalog.css';
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function CatalogDropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Закрытие меню при клике вне компонента
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="catalog-wrapper" ref={dropdownRef}>
      <button className="dropButton menu btn" onClick={toggleMenu}>Catalog</button>
      {isOpen && (
        <div className="dropdown">
          <Link to='/catalog/all products'>All products</Link>
          <Link to='/catalog/bestsellers'>Bestsellers</Link>
          <Link to='/catalog/monobouquets'>Monobouquets</Link>
          <Link to='/catalog/customBouquets'>Custom Bouquets</Link>
          <Link to='/catalog/basketsBoxes'>Flower Baskets and Boxes</Link>
          <Link to='/catalog/wow'>Wow Collection</Link>
        </div>
      )}
    </div>
  );
}

export default CatalogDropDown;
