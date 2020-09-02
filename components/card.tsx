export default function Card(props: {
  product_data: { title: string; description: string; image: string; value: number };
}) {
  const { product_data } = props;
  const { title, description, value, image } = product_data;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("clicked");
  };

  return (
    <a
      href="#"
      className="group block h-auto w-full max-w-sm rounded shadow-lg m-4 flex-grow-0"
      onClick={handleClick}
    >
      <img className="w-full h-full max-h-3/4 object-cover" src={image} alt={title} />
      <div className="w-full max-h-1/4 h-48 px-6 py-4 bg-gray-300">
        <div className="flex flex-row flex-no-wrap justify-between align-center mb-3">
          <h2 className="font-bold text-2xl">{title}</h2>
          <p className="font-bold text-xl text-gray-800">${value}</p>
        </div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </a>
  );
}
