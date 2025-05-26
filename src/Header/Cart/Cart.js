import { useCart } from "../../CartContext";
import Line from '../MainPage/Line/Line';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + parseFloat(item.price) * item.quantity,
    0
  );
  const navigate = useNavigate();


  return (
    <div>
        <div>
          <Line/>
        </div>
    <div className="cart_header" style={{ padding: '50px' }}>
      <h1 className="cart_head">Your Cart</h1>
      </div>
      {cartItems.length === 0 ? (
        <p className="empty_mes">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} style={{
              display: 'flex',
              marginBottom: '20px',
              background: '#F0EBE3',
              padding: '30px',
              borderRadius: '10px'
            }}>
              <img className="cartImg" src={item.image} alt={item.name} width="180px" height="240px" />
              <div className="cart_container" style={{ marginLeft: '30px'}}>
                <h3 className="cart_name">{item.name}</h3>
                <p className="cart_data">Price: ${item.price}</p>
                <p className="cart_data">Quantity: {item.quantity}</p>
                <button className="cartRemove" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div style={{ marginTop: "30px" }}>
            <h2 className="total">Total: ${totalPrice.toFixed(2)}</h2>
            <div className="clearBtn">
            <button className="cartCheckout" onClick={() => navigate('/checkout')} >Checkout</button>
            <button className="cartCheckout"  onClick={clearCart}>Clear Cart</button>
            </div>
          </div>
        </>
      )}
   
    </div>
  );
}

export default Cart;


