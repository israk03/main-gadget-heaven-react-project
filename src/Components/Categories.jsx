import { NavLink } from "react-router-dom";
import "../App.css";

const Categories = ({ categories = [] }) => {
  console.log("Categories component received:", categories);

  return (
    <div>
      {categories.map((category) => (
        <NavLink
          to={`/category/${category.category}`} // Corrected the reference to category
          key={category.id}
          className="bg-gray-200 py-3 rounded-full"
        >
          <button className="py-4 px-6 w-full active">
            {category.category}
          </button>
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
