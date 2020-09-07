import { CartContext } from "./itemContext";
import { useContext } from "react";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      {cartItems.map((i) => {
        return (
          <p key={i.title}>
            {i.title}, {i.quantity}
          </p>
        );
      })}
    </div>
  );
};
export default Cart;
