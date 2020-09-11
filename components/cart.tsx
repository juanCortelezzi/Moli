import { CartContext } from "./itemContext";
import { useContext } from "react";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const checkout = () => {
    setCartItems([]);
  };

  return (
    <div>
      <hr />
      <h2 className="text-center text-4xl text-white my-4">Item Kart</h2>
      <hr />
      <div className="my-4 mx-2 flex flex-col items-around content-start justify-center md:flex-row md:flex-wrap">
        {cartItems.length > 0 ? (
          cartItems.map((i: { title: string; price: number; quantity: number; image: string }) => {
            return (
              <div
                key={i.title}
                className="group rounded overflow-hidden block max-w-sm rounded shadow-lg m-4 flex flex-row flex-no-wrap flex-grow-1"
              >
                <img className="w-1/3 object-cover" src={i.image} alt="title" />
                <div className="bg-gray-300 w-full p-2">
                  <h3 className="font-bold text-2xl">{i.title}</h3>
                  <p className="text-gray-800 font-bold text-xl">
                    {i.quantity} Units, ${i.price * i.quantity}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <h3 className="text-2xl text-center text-white">No items here!</h3>
        )}
      </div>
      <div className="text-center mb-4">
        {cartItems.length > 0 ? (
          <button
            onClick={checkout}
            className="bg-blue-500 w-9/12 hover:bg-blue-700 text-white text-2xl font-bold py-2 px-4 border border-blue-700 rounded"
          >
            Checkout
          </button>
        ) : null}
      </div>
    </div>
  );
};
export default Cart;
