import { useState, useContext } from "react";
import { CartContext } from "./itemContext";

export default function Card(props: {
  product_data: { title: string; description: string; image: string; price: number };
}) {
  const { cartItems, setCartItems } = useContext(CartContext);

  const [count, setCount] = useState(0);

  const { product_data } = props;
  const { title, description, price, image } = product_data;

  const handlePlus = (e: React.MouseEvent) => {
    e.preventDefault();
    setCount(count + 1);
  };

  const handleMinus = (e: React.MouseEvent) => {
    e.preventDefault();
    if (count <= 0) return;
    setCount(count - 1);
  };

  const handleCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (count <= 0) return;
    let itemExists: [Boolean, number] = [false, 0];
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].title === title) {
        itemExists = [true, i];
      }
    }

    if (itemExists[0] === true) {
      const newCart = [...cartItems];
      const oldItem = cartItems[itemExists[1]];
      const newItem = cartItems[itemExists[1]];
      newItem.quantity = count + oldItem.quantity;
      newCart.splice(itemExists[1], 1);
      setCartItems([...newCart, newItem]);
    } else {
      setCartItems([...cartItems, { title: title, quantity: count, price: price }]);
    }
    setCount(0);
  };

  return (
    <div className="group block max-w-sm rounded shadow-lg m-4 flex-grow-1">
      <img className="w-full h-128 object-cover" src={image} alt={title} />

      <div className="h-56 px-6 py-4 bg-gray-300">
        <div className="h-1/4 flex flex-row flex-no-wrap justify-between align-center">
          <h2 className="font-bold text-2xl">{title}</h2>
          <p className="font-bold text-xl text-gray-800">${price}</p>
        </div>
        <div className="h-3/4 flex flex-col justify-between align-center">
          <p className="text-gray-700 text-base overflow-hidden">{description}</p>
          <div className="flex items-center justify-around">
            <div className="grid grid-cols-3 divide-x divide-blue-700">
              <button className="text-lg text-center font-medium px-4" onClick={handleMinus}>
                -
              </button>

              <span className="text-lg text-center font-medium px-4">{count}</span>

              <button className="text-lg text-center font-medium px-4" onClick={handlePlus}>
                +
              </button>
            </div>
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={handleCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
