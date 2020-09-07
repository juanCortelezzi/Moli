interface Product {
  title: string;
  description: string;
  image: string;
  price: number;
}

const products: Product[] = [
  {
    title: "Ensalada Caesar",
    description: "Presentamos la comida de mi comida, lechuga rucula y tomate con salsa caesar",
    image: "images/salad.jpg",
    price: 4,
  },
  {
    title: "Salmon",
    description:
      "Salmon ahumado a la lena sasonado con el doble de falopa que el steak y acompanado con papa rellena",
    image: "images/fish.jpg",
    price: 10,
  },
  {
    title: "Bondio",
    description:
      "Bruto pedazo de carne tirado a la parri sasonado con falopa y acompanado por papas fritas",
    image: "images/meat.jpg",
    price: 7,
  },
  {
    title: "Medialunas",
    description:
      "Tartas de todo tamano y relleno, JQ, pollo, carne, falopa y mucho mas frizadas con amor",
    image: "images/pastries.jpg",
    price: 5,
  },
  {
    title: "falopa",
    description:
      "Tartas de todo tamano y relleno, JQ, pollo, carne, falopa y mucho mas frizadas con amor",
    image: "images/salad.jpg",
    price: 5,
  },
  {
    title: "Comida",
    description:
      "Tartas de todo tamano y relleno, JQ, pollo, carne, falopa y mucho mas frizadas con amor",
    image: "images/fish.jpg",
    price: 5,
  },
];

export default products;
