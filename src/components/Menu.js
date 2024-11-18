
import React from "react";
import menuItems from "../data/menuItems";
import { useCart } from "../context/CartContext";

function Menu() {
  const { addToCart } = useCart();

  return (
    <div>
      {menuItems.map((category) => (
        <div key={category.category}>
          <h2>{category.category}</h2>
          <div className="menu-category">
            {category.items.map((item) => (
              <div key={item.id} className="menu-item">
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "100%", height: "auto", borderRadius: "10px" }}
                />
                <h3>{item.name}</h3>
                <p>₹{item.price} - {item.calories} cal</p>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;
