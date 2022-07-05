import {
  MdExplore,
  MdLibraryAdd,
  MdOutlineExpandMore,
  MdOutlineExpandLess,
  MdOndemandVideo,
} from "react-icons/md";
import { FaPencilAlt, FaTrophy, FaTools } from "react-icons/fa";
import { VscTools } from "react-icons/vsc";
import { AiTwotoneFire } from "react-icons/ai";
import { TiArrowUpThick } from "react-icons/ti";
import { TbBooks, TbWorld } from "react-icons/tb";
import { RiRoadMapFill } from "react-icons/ri";
import { BsFillFileEarmarkSpreadsheetFill } from "react-icons/bs";
import { IoLibrarySharp } from "react-icons/io5";
import { ImRss } from "react-icons/im";
import { useState } from "react";
import { useRouter } from "next/router";

const Sidebar = () => {
  const [showMore, setShowMore] = useState(false);
  const router = useRouter();

  return (
    <asi className="fixed w-48 bg-white dark:bg-black border-r border-black dark:border-white border-opacity-10 dark:border-opacity-10 top-0 z-40 h-screen dark:bg-darkBackground shadow-md items-center justify-between font-sansSerif">
      <div className="mt-24 pb-3 flex flex-col px-2">
        <SideBarButton active={true}>
          <MdExplore className="ml-4 mr-2" /> Explore
        </SideBarButton>
      </div>
      <div className="pb-4 flex flex-col px-2">
        <SideBarButtonOutlined
          handleOnClick={(e) => {
            e.preventDefault();
            router.push("/add");
          }}
          active={true}
        >
          <MdLibraryAdd className="ml-4 mr-2" /> New Resource
        </SideBarButtonOutlined>
      </div>
      <hr></hr>

      <div className="h-full pb-14">
        <div className="py-4 flex flex-col px-2">
          <p>Discover</p>
          <SideBarButton active={false}>
            <AiTwotoneFire className="ml-4 mr-2" /> By Popularity
          </SideBarButton>
          <SideBarButton active={false}>
            <TiArrowUpThick className="ml-4 mr-2" /> By Upvotes
          </SideBarButton>
        </div>
        <hr></hr>
        <div className="py-4 flex flex-col px-2">
          <p>Categories</p>

          {showMore && (
            <>
              <SideBarButton active={false}>
                <FaPencilAlt className="ml-4 mr-2" /> Articles
              </SideBarButton>
              <SideBarButton active={false}>
                <MdOndemandVideo className="ml-4 mr-2" /> Courses
              </SideBarButton>
              <SideBarButton active={false}>
                <FaTrophy className="ml-4 mr-2" /> Hackathons
              </SideBarButton>
              <SideBarButton active={false}>
                <FaTools className="ml-4 mr-2" /> Developer Tools
              </SideBarButton>
              <SideBarButton active={false}>
                <IoLibrarySharp className="ml-4 mr-2" /> Books
              </SideBarButton>
              <SideBarButton active={false}>
                <BsFillFileEarmarkSpreadsheetFill className="ml-4 mr-2" /> Cheat
                Sheets
              </SideBarButton>
              <SideBarButton active={false}>
                <RiRoadMapFill className="ml-4 mr-2" /> Roadmaps
              </SideBarButton>
              <SideBarButton active={false}>
                <TbWorld className="ml-4 mr-2" /> Online Platforms
              </SideBarButton>
              <SideBarButton active={false}>
                <ImRss className="ml-4 mr-2" /> Blogs
              </SideBarButton>

              <SideBarButton
                handleOnClick={() => setShowMore(!showMore)}
                active={false}
              >
                <MdOutlineExpandLess className="ml-4 mr-2" /> Less
              </SideBarButton>
            </>
          )}

          {!showMore && (
            <>
              <SideBarButton active={false}>
                <FaPencilAlt className="ml-4 mr-2" /> Articles
              </SideBarButton>
              <SideBarButton active={false}>
                <MdOndemandVideo className="ml-4 mr-2" /> Courses
              </SideBarButton>
              <SideBarButton active={false}>
                <FaTrophy className="ml-4 mr-2" /> Hackathons
              </SideBarButton>
              <SideBarButton active={false}>
                <FaTools className="ml-4 mr-2" /> Developer Tools
              </SideBarButton>
              <SideBarButton active={false}>
                <IoLibrarySharp className="ml-4 mr-2" /> Books
              </SideBarButton>
              <SideBarButton
                handleOnClick={() => setShowMore(!showMore)}
                active={false}
              >
                <MdOutlineExpandMore className="ml-4 mr-2" /> More
              </SideBarButton>
            </>
          )}
        </div>
        <hr></hr>
        <div className="py-3 flex flex-col px-1">
          <p>Tags</p>
          <div className="grid grid-cols-3 ml-auto mr-auto">
            <SideBarTagsButton>#react</SideBarTagsButton>
            <SideBarTagsButton>#react</SideBarTagsButton>
            <SideBarTagsButton>#react</SideBarTagsButton>
            <SideBarTagsButton>#react</SideBarTagsButton>
            <SideBarTagsButton>#react</SideBarTagsButton>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 flex flex-col"></div>
    </asi>
  );
};

export default Sidebar;

const SideBarButton = ({ children, handleOnClick, active }) => {
  if (active) {
    return (
      <>
        <button
          type="button"
          onClick={handleOnClick}
          className="py-1 text-black dark:text-white text-base text-center transition-all ease-in-out duration-150 rounded-lg inline-flex items-center justify-start bg-black dark:bg-white bg-opacity-20 dark:bg-opacity-20 hover:bg-opacity-30 dark:hover:bg-opacity-30"
        >
          {children}
        </button>
      </>
    );
  }
  return (
    <>
      <button
        type="button"
        onClick={handleOnClick}
        className="py-1 text-black dark:text-white text-base text-center transition-all ease-in-out duration-150 rounded-lg inline-flex items-center justify-start hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10"
      >
        {children}
      </button>
    </>
  );
};

const SideBarButtonOutlined = ({ children, handleOnClick }) => {
  return (
    <>
      <button
        type="button"
        onClick={handleOnClick}
        className="py-1 text-purple-500 text-base text-center transition-all ease-in-out duration-150 rounded-lg inline-flex items-center justify-start border-2 border-purple-500 hover:bg-purple-500 hover:text-white dark:hover:text-black"
      >
        {children}
      </button>
    </>
  );
};

const SideBarTagsButton = ({ children, handleOnClick }) => {
  return (
    <>
      <button
        type="button"
        onClick={handleOnClick}
        className="py-1 px-2 m-1 text-white dark:text-black font-normal text-xs text-center transition-all ease-in-out duration-150 rounded-lg inline-flex items-center justify-start bg-black dark:bg-white bg-opacity-80 dark:bg-opacity-80 hover:bg-opacity-90 dark:hover:bg-opacity-90"
      >
        {children}
      </button>
    </>
  );
};
