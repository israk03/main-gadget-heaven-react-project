import { NavLink } from "react-router-dom";
import "../App.css";

const Categories = ({ categories = [] }) => {
  console.log("Categories component received:", categories);

  return (
    <div>
      {Array.isArray(categories) ? (
        categories.map((category) => (
          <NavLink
            to={`/category/${categories.category}`}
            key={category.id}
            className="bg-gray-200 py-3 rounded-full"
          >
            <button className="py-4 px-6 w-full active">
              {category.category}
            </button>
          </NavLink>
        ))
      ) : (
        <p>No categories available.</p>
      )}
    </div>
  );
};

export default Categories;
