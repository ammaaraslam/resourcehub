import { FaPencilAlt, FaTrophy } from "react-icons/fa";

const CategoryBadge = ({ category }) => {
  if (category === "Article") {
    return (
      <div className="py-1 px-3 rounded-md bg-purple-500 text-white dark:text-black inline-flex">
        <FaPencilAlt className="mt-auto mb-auto mr-1" /> Article
      </div>
    );
  }
  if (category === "Course") {
    return (
      <div className="py-1 px-3 rounded-md bg-purple-500 text-white dark:text-black inline-flex">
        <FaPencilAlt className="mt-auto mb-auto mr-1" /> Course
      </div>
    );
  }
  if (category === "Hackathon") {
    return (
      <div className="py-1 px-3 rounded-md bg-purple-500 text-white dark:text-black inline-flex">
        <FaPencilAlt className="mt-auto mb-auto mr-1" /> Hackathon
      </div>
    );
  }
  if (category === "Developer Tool") {
    return (
      <div className="py-1 px-3 rounded-md bg-purple-500 text-white dark:text-black inline-flex">
        <FaPencilAlt className="mt-auto mb-auto mr-1" /> Developer Tool
      </div>
    );
  }
  if (category === "Book") {
    return (
      <div className="py-1 px-3 rounded-md bg-purple-500 text-white dark:text-black inline-flex">
        <FaPencilAlt className="mt-auto mb-auto mr-1" /> Book
      </div>
    );
  }
  if (category === "CheatSheet") {
    return (
      <div className="py-1 px-3 rounded-md bg-purple-500 text-white dark:text-black inline-flex">
        <FaPencilAlt className="mt-auto mb-auto mr-1" /> CheatSheet
      </div>
    );
  }
  if (category === "Online Platform") {
    return (
      <div className="py-1 px-3 rounded-md bg-purple-500 text-white dark:text-black inline-flex">
        <FaPencilAlt className="mt-auto mb-auto mr-1" /> Onlin Platform
      </div>
    );
  }
  if (category === "Blog") {
    return (
      <div className="py-1 px-3 rounded-md bg-purple-500 text-white dark:text-black inline-flex">
        <FaPencilAlt className="mt-auto mb-auto mr-1" /> Blog
      </div>
    );
  } else {
    return (
      <div className="py-1 px-3 rounded-md bg-purple-500 text-white dark:text-black inline-flex">
        <FaPencilAlt className="mt-auto mb-auto mr-1" /> none
      </div>
    );
  }
};

export default CategoryBadge;
