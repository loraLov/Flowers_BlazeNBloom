import {
  BrowserRouter as Router,
  Routes,
  Route,
  } from "react-router-dom";


import './App.css';
import {CartProvider} from "./CartContext";
import MainPage from "./Header/MainPage/Main/MainPage";
import Contact from "./Header/Contact/Contact";
import Order from "./Header/Order/Order";
import Cart from "./Header/Cart/Cart";


import AllProducts from "./Products/AllProducts";
import Bestsellers from "./Products/Bestsellers";
import Monobouquets from "./Products/Monobouquets";
import CustomBouquets from "./Products/CustomBouquets";
import WowCollection from "./Products/WowCollection";
import BasketsBoxes from "./Products/BasketsBoxes";
import MainHeader from "./MainHeader";




function App(){
  
  return(
    <CartProvider>
      <Router>
      <MainHeader/>
        <Routes>
           <Route path = '/' element = {<MainPage/>}/>
           <Route path = '/contact' element = {<Contact/>}/>
           <Route path = '/delivery'element = {<Order/>}/>
           <Route path = '/cart' element ={<Cart/>}/>

           <Route path = '/catalog/all products' element = {<AllProducts/>}/>
           <Route path = '/catalog/bestsellers' element = {<Bestsellers/>}/>
           <Route path = '/catalog/monobouquets' element = {<Monobouquets/>}/>
           <Route path = '/catalog/customBouquets' element = {<CustomBouquets/>}/>
           <Route path = '/catalog/basketsBoxes' element = {<BasketsBoxes/>}/>
           <Route path = '/catalog/wow' element = {<WowCollection/>}/>
        </Routes>
      </Router>
      </CartProvider>
  )
}
export default App;