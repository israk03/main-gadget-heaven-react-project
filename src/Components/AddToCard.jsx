import { RxCross1 } from "react-icons/rx";
const AddToCard = ({ item }) => {
  const { product_title, product_image, description, price } = item;
  return (
    <div className="lg:w-9/12 w-11/12 mx-auto">
      <div className=" border rounded-lg my-4 p-4 flex md:flex-row flex-col  items-center justify-between  gap-3 bg-white">
        <div className="flex md:flex-row flex-col gap-3 items-center">
          <img className="w-36 rounded-xl " src={product_image} alt="" />
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">{product_title}</h3>
            <p className="text-gray-500">{description}</p>
            <p className="font-bold">Price: ${price}</p>
          </div>
        </div>
        <div className="mr-4">
          <button className="text-red-500 bg-red-200 p-3 rounded-full cursor-pointer">
            <RxCross1 />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCard;
