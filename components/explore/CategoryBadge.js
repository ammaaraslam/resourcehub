import { FaPencilAlt, FaTrophy, FaTools } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { RiRoadMapFill } from "react-icons/ri";
import { BsFillFileEarmarkSpreadsheetFill } from "react-icons/bs";
import { IoLibrarySharp } from "react-icons/io5";
import { ImRss } from "react-icons/im";
import { MdOndemandVideo } from "react-icons/md";
import { useRouter } from "next/router";

const CategoryBadge = ({ category }) => {
  const router = useRouter();

  if (category === "Article") {
    return (
      <button
        onClick={(e) => {
          e.preventDefault();
          router.push("/explore?category=articles");
        }}
        className="py-1 px-3 rounded-md bg-purple-500 text-white dark:text-black inline-flex"
      >
        <FaPencilAlt className="mt-auto mb-auto mr-1" /> Article
      </button>
    );
  }
  if (category === "Course") {
    return (
      <button
        onClick={(e) => {
          e.preventDefault();
          router.push("/explore?category=courses");
        }}
        className="py-1 px-3 rounded-md bg-purple-500 text-white dark:text-black inline-flex"
      >
        <MdOndemandVideo className="mt-auto mb-auto mr-1" /> Course
      </button>
    );
  }
  if (category === "Hackathon") {
    return (
      <button
        onClick={(e) => {
          e.preventDefault();
          router.push("/explore?category=hackathons");
        }}
        className="py-1 px-3 rounded-md bg-purple-500 text-white dark:text-black inline-flex"
      >
        <FaTrophy className="mt-auto mb-auto mr-1" /> Hackathon
      </button>
    );
  }
  if (category === "Developer Tool") {
    return (
      <button
        onClick={(e) => {
          e.preventDefault();
          router.push("/explore?category=developer_tools");
        }}
        className="py-1 px-3 rounded-md bg-purple-500 text-white dark:text-black inline-flex"
      >
        <FaTools className="mt-auto mb-auto mr-1" /> Developer Tool
      </button>
    );
  }
  if (category === "Book") {
    return (
      <button
        onClick={(e) => {
          e.preventDefault();
          router.push("/explore?category=books");
        }}
        className="py-1 px-3 rounded-md bg-purple-500 text-white dark:text-black inline-flex"
      >
        <IoLibrarySharp className="mt-auto mb-auto mr-1" /> Book
      </button>
    );
  }
  if (category === "Roadmap") {
    return (
      <button
        onClick={(e) => {
          e.preventDefault();
          router.push("/explore?category=roadmaps");
        }}
        className="py-1 px-3 rounded-md bg-purple-500 text-white dark:text-black inline-flex"
      >
        <RiRoadMapFill className="mt-auto mb-auto mr-1" /> Book
      </button>
    );
  }
  if (category === "CheatSheet") {
    return (
      <button
        onClick={(e) => {
          e.preventDefault();
          router.push("/explore?category=cheatsheets");
        }}
        className="py-1 px-3 rounded-md bg-purple-500 text-white dark:text-black inline-flex"
      >
        <BsFillFileEarmarkSpreadsheetFill className="mt-auto mb-auto mr-1" />{" "}
        CheatSheet
      </button>
    );
  }
  if (category === "Online Platform") {
    return (
      <button
        onClick={(e) => {
          e.preventDefault();
          router.push("/explore?category=online_platforms");
        }}
        className="py-1 px-3 rounded-md bg-purple-500 text-white dark:text-black inline-flex"
      >
        <TbWorld className="mt-auto mb-auto mr-1" /> Online Platform
      </button>
    );
  }
  if (category === "Blog") {
    return (
      <button
        onClick={(e) => {
          e.preventDefault();
          router.push("/explore?category=blogs");
        }}
        className="py-1 px-3 rounded-md bg-purple-500 text-white dark:text-black inline-flex"
      >
        <ImRss className="mt-auto mb-auto mr-1" /> Blog
      </button>
    );
  } else {
    return (
      <button className="py-1 px-3 rounded-md bg-purple-500 text-white dark:text-black inline-flex">
        <FaPencilAlt className="mt-auto mb-auto mr-1" /> none
      </button>
    );
  }
};

export default CategoryBadge;
