import { CartContext } from "./itemContext";
import { useContext } from "react";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  return (
    <div>
      <button
        onClick={() => {
          setCartItems([...cartItems, "juanba"]);
        }}
      >
        press me
      </button>
      <p>{cartItems}</p>
    </div>
  );
};
export default Cart;
