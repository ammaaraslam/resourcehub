import { FaPencilAlt, FaTrophy, FaTools } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { RiRoadMapFill, RiOpenSourceFill } from "react-icons/ri";
import { BsFillFileEarmarkSpreadsheetFill } from "react-icons/bs";
import { IoLibrarySharp } from "react-icons/io5";
import { ImRss } from "react-icons/im";
import { MdOndemandVideo } from "react-icons/md";
import { AiFillApi } from "react-icons/ai";
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
        className="py-1 px-3 rounded-md bg-purple-600 text-white dark:text-black font-montserrat font-semibold inline-flex md:text-lg text-base"
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
        className="py-1 px-3 rounded-md bg-purple-600 text-white dark:text-black font-montserrat font-semibold inline-flex md:text-lg text-base"
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
        className="py-1 px-3 rounded-md bg-purple-600 text-white dark:text-black font-montserrat font-semibold inline-flex md:text-lg text-base"
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
        className="py-1 px-3 rounded-md bg-purple-600 text-white dark:text-black font-montserrat font-semibold inline-flex "
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
        className="py-1 px-3 rounded-md bg-purple-600 text-white dark:text-black font-montserrat font-semibold inline-flex md:text-lg text-base"
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
        className="py-1 px-3 rounded-md bg-purple-600 text-white dark:text-black font-montserrat font-semibold inline-flex md:text-lg text-base"
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
        className="py-1 px-3 rounded-md bg-purple-600 text-white dark:text-black font-montserrat font-semibold inline-flex md:text-lg text-base"
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
        className="py-1 px-3 rounded-md bg-purple-600 text-white dark:text-black font-montserrat font-semibold inline-flex md:text-lg text-base"
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
        className="py-1 px-3 rounded-md bg-purple-600 text-white dark:text-black font-montserrat font-semibold inline-flex md:text-lg text-base"
      >
        <ImRss className="mt-auto mb-auto mr-1" /> Blog
      </button>
    );
  }
  if (category === "API") {
    return (
      <button
        onClick={(e) => {
          e.preventDefault();
          router.push("/explore?category=apis");
        }}
        className="py-1 px-3 rounded-md bg-purple-600 text-white dark:text-black font-montserrat font-semibold inline-flex md:text-lg text-base"
      >
        <AiFillApi className="mt-auto mb-auto mr-1" /> API
      </button>
    );
  }
  if (category === "Open Source") {
    return (
      <button
        onClick={(e) => {
          e.preventDefault();
          router.push("/explore?category=open_source");
        }}
        className="py-1 px-3 rounded-md bg-purple-600 text-white dark:text-black font-montserrat font-semibold inline-flex md:text-lg text-base"
      >
        <RiOpenSourceFill className="mt-auto mb-auto mr-1" /> Open Source
      </button>
    );
  } else {
    return (
      <button className="py-1 px-3 rounded-md bg-purple-600 text-white dark:text-black font-montserrat font-semibold inline-flex md:text-lg text-base">
        <FaPencilAlt className="mt-auto mb-auto mr-1" /> none
      </button>
    );
  }
};

export default CategoryBadge;
