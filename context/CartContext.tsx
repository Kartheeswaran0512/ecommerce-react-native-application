import { createContext,useState } from "react";


export const CartContext = createContext(null);

export function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState([]);

//     const addToCart = (product) => {
//     setCartItems([...cartItems, product]);
//   };
const addToCart = (product) => {    // add card
  setCartItems((prevItems) => [...prevItems, product]);
};

const removeFromCart = (id) => {   //remove card
  setCartItems((prevItems) =>
    prevItems.filter((item) => item.id !== id)
  );
};
     return (
  <CartContext.Provider
    value={{
      cartItems,
      addToCart,
      removeFromCart
    }}
  >
    {children}
  </CartContext.Provider>
);
}