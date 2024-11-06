import { Link } from "react-router-dom";

const Card = ({ gadgets }) => {
  const { id, product_image, price, product_title } = gadgets;

  return (
    <div className="bg-white shadow-lg rounded-lg p-3 mb-3 w-full mx-auto">
      <div className="w-full aspect-square rounded-lg flex justify-center items-center shadow-sm">
        <img
          className="w-[85%] h-[85%] object-cover rounded-lg"
          src={product_image}
          alt={product_title}
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold">{product_title}</h2>
        <p className="text-gray-500 mt-1">Price: ${price}</p>
        <Link to={`/gadgets/${id}`}>
          <button className="border border-violet-500 text-violet-500 py-2 px-5 rounded-full font-bold mt-3 hover:bg-violet-50 transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
