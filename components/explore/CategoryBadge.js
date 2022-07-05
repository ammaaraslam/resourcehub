import { FaPencilAlt, FaTrophy } from "react-icons/fa";

const CategoryBadge = ({ category }) => {
  return (
    <div className="py-1 px-3 rounded-md bg-purple-500 text-white dark:text-black inline-flex">
      <FaPencilAlt className="mt-auto mb-auto mr-1" /> Article
    </div>
  );
};

export default CategoryBadge;
