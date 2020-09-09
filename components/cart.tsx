import { CartContext } from "./itemContext";
import { useContext } from "react";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <hr />
      <h2 className="text-center text-4xl text-white my-4">Item Kart</h2>
      <hr />
      <div className="mb-4 mx-2 flex flex-col items-around content-start justify-center md:flex-row md:flex-wrap">
        {cartItems.length > 0 ? (
          cartItems.map((i: { title: string; price: number; quantity: number }) => {
            return (
              <div
                key={i.title}
                className="group block max-w-sm rounded shadow-lg m-4 flex flex-row flex-no-wrap flex-grow-1"
              >
                <img className="w-1/3 object-cover" src="images/pastries.jpg" alt="title" />
                <p>
                  {i.title}, {i.quantity}
                </p>
              </div>
            );
          })
        ) : (
          <p>no items</p>
        )}
      </div>
    </div>
  );
};
export default Cart;
