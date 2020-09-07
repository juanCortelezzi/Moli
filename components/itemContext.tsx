import { createContext, useState } from "react";
type Props = { children: React.ReactNode };

export const CartContext = createContext(null);

export function CartProvider({ children }: Props) {
  const [cartItems, setCartItems] = useState([]);
  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>{children}</CartContext.Provider>
  );
}
