import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  const handleQuantityChange = (id, event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity);
    }
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <div>
                  <img src={item.image} alt={item.name} style={{ width: "100px", height: "auto" }} />
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>
                  <p>Calories: {item.calories}</p>
                  <div>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(event) => handleQuantityChange(item.id, event)}
                      min="1"
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total Price: ₹{totalPrice}</h3>
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
