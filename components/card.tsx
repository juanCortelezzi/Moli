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
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 flex-grow-0">
      <a href="#" onClick={handleClick}>
        <img className="w-full max-h-3/4 min-h-3/4 object-cover" src={image} alt={title} />
        <div className="h-full px-6 py-4 bg-gray-300 overflow-hidden">
          <div className="flex flex-row flex-no-wrap justify-between align-center mb-3">
            <h2 className="font-bold text-2xl">{title}</h2>
            <p className="font-bold text-xl text-gray-800">${value}</p>
          </div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </a>
    </div>
  );
}
