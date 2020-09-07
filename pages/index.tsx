import Head from "next/head";
import Card from "../components/card";
import products from "../components/Products";
import Cart from "../components/cart";
import { CartContext } from "../components/itemContext";
import { useState } from "react";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div>
      <Head>
        <title>Moli</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-center text-6xl text-white my-4">Moli</h1>
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        <div className="mb-4 mx-2 flex flex-col items-around content-start justify-center md:flex-row md:flex-wrap">
          {products.map((p) => {
            return <Card key={p.title} product_data={p} />;
          })}
        </div>
        <Cart />
      </CartContext.Provider>
    </div>
  );
}
