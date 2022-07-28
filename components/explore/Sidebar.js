import {
  MdExplore,
  MdLibraryAdd,
  MdOutlineExpandMore,
  MdOutlineExpandLess,
  MdOndemandVideo,
} from "react-icons/md";
import { FaPencilAlt, FaTrophy, FaTools } from "react-icons/fa";
import { AiTwotoneFire } from "react-icons/ai";
import { TiArrowUpThick } from "react-icons/ti";
import { TbBooks, TbWorld } from "react-icons/tb";
import { RiRoadMapFill } from "react-icons/ri";
import { BsFillFileEarmarkSpreadsheetFill } from "react-icons/bs";
import { IoLibrarySharp } from "react-icons/io5";
import { ImRss } from "react-icons/im";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

const Sidebar = () => {
  const [showMore, setShowMore] = useState(false);
  const router = useRouter();
  const ref = useRef();
  const [articles, setArticles] = useState(false);
  const [courses, setCourses] = useState(false);
  const [hackathons, setHackathons] = useState(false);
  const [devTools, setDevTools] = useState(false);
  const [books, setBooks] = useState(false);
  const [cheatsheets, setCheatsheets] = useState(false);
  const [roadmaps, setRoadmaps] = useState(false);
  const [onlinePlatforms, setOnlinePlatforms] = useState(false);
  const [blogs, setBlogs] = useState(false);
  const [explore, SetExplore] = useState(true);

  const togglingArticles = () => setArticles(!articles);
  const togglingExplore = () => SetExplore(!explore);

  const togglingCourses = () => setCourses(!courses);
  const togglingHackathons = () => setHackathons(!hackathons);
  const togglingDevTools = () => setDevTools(!devTools);
  const togglingBooks = () => setBooks(!books);
  const togglingCheatsheets = () => setCheatsheets(!cheatsheets);
  const togglingRoadmaps = () => setRoadmaps(!roadmaps);
  const togglingOnlinePlatforms = () => setOnlinePlatforms(!onlinePlatforms);
  const togglingBlogs = () => setBlogs(!blogs);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        [
          articles,
          courses,
          hackathons,
          devTools,
          books,
          cheatsheets,
          roadmaps,
          onlinePlatforms,
          blogs,
          explore,
        ] &&
        ref.current &&
        !ref.current.contains(e.target)
      ) {
        setArticles(false);
        setCourses(false);
        setHackathons(false);
        setDevTools(false);
        setBooks(false);
        setCheatsheets(false);
        setRoadmaps(false);
        setOnlinePlatforms(false);
        setBlogs(false);
        SetExplore(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [
    articles,
    courses,
    hackathons,
    devTools,
    books,
    cheatsheets,
    roadmaps,
    onlinePlatforms,
    blogs,
    explore,
  ]);

  return (
    <aside className="fixed w-48 bg-white dark:bg-black border-r border-black dark:border-white border-opacity-10 dark:border-opacity-10 top-0 z-40 h-screen dark:bg-darkBackground shadow-md items-center justify-between font-sf">
      <div className="mt-24 pb-3 flex flex-col px-2">
        <SideBarButton
          useRef={ref}
          active={true}
          handleOnClick={(e) => {
            e.preventDefault();
            router.push("/explore");
            togglingExplore();
          }}
        >
          <MdExplore className="ml-4 mr-2" /> Explore
        </SideBarButton>
      </div>
      <div className="pb-4 flex flex-col px-2">
        <SideBarButtonOutlined
          handleOnClick={(e) => {
            e.preventDefault();
            router.push("/add");
          }}
        >
          <MdLibraryAdd className="ml-4 mr-2" /> New Resource
        </SideBarButtonOutlined>
      </div>
      <hr></hr>

      <div className="h-full pb-14">
        <div className="py-4 flex flex-col px-2">
          <p>Categories</p>

          {showMore && (
            <>
              <SideBarButton
                active={articles}
                useRef={ref}
                handleOnClick={(e) => {
                  e.preventDefault();
                  router.push("/explore?category=articles");
                  togglingArticles();
                }}
              >
                <FaPencilAlt className="ml-4 mr-2" /> Articles
              </SideBarButton>
              <SideBarButton
                active={courses}
                useRef={ref}
                handleOnClick={(e) => {
                  e.preventDefault();
                  router.push("/explore?category=courses");
                  togglingCourses();
                }}
              >
                <MdOndemandVideo className="ml-4 mr-2" /> Courses
              </SideBarButton>
              <SideBarButton
                active={hackathons}
                useRef={ref}
                handleOnClick={(e) => {
                  e.preventDefault();
                  router.push("/explore?category=hackathons");
                  togglingHackathons();
                }}
              >
                <FaTrophy className="ml-4 mr-2" /> Hackathons
              </SideBarButton>
              <SideBarButton
                active={devTools}
                useRef={ref}
                handleOnClick={(e) => {
                  e.preventDefault();
                  router.push("/explore?category=developer_tools");
                  togglingDevTools();
                }}
              >
                <FaTools className="ml-4 mr-2" /> Developer Tools
              </SideBarButton>
              <SideBarButton
                active={books}
                useRef={ref}
                handleOnClick={(e) => {
                  e.preventDefault();
                  router.push("/explore?category=books");
                  togglingBooks();
                }}
              >
                <IoLibrarySharp className="ml-4 mr-2" /> Books
              </SideBarButton>
              <SideBarButton
                active={cheatsheets}
                useRef={ref}
                handleOnClick={(e) => {
                  e.preventDefault();
                  router.push("/explore?category=cheatsheets");
                  togglingCheatsheets();
                }}
              >
                <BsFillFileEarmarkSpreadsheetFill className="ml-4 mr-2" /> Cheat
                Sheets
              </SideBarButton>
              <SideBarButton
                active={roadmaps}
                useRef={ref}
                handleOnClick={(e) => {
                  e.preventDefault();
                  router.push("/explore?category=roadmaps");
                  togglingRoadmaps();
                }}
              >
                <RiRoadMapFill className="ml-4 mr-2" /> Roadmaps
              </SideBarButton>
              <SideBarButton
                active={onlinePlatforms}
                useRef={ref}
                handleOnClick={(e) => {
                  e.preventDefault();
                  router.push("/explore?category=online_platforms");
                  togglingOnlinePlatforms();
                }}
              >
                <TbWorld className="ml-4 mr-2" /> Online Platforms
              </SideBarButton>
              <SideBarButton
                active={blogs}
                useRef={ref}
                handleOnClick={(e) => {
                  e.preventDefault();
                  router.push("/explore?category=blogs");
                  togglingBlogs();
                }}
              >
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
              <SideBarButton
                active={articles}
                useRef={ref}
                handleOnClick={(e) => {
                  e.preventDefault();
                  router.push("/explore?category=articles");
                  togglingArticles();
                }}
              >
                <FaPencilAlt className="ml-4 mr-2" /> Articles
              </SideBarButton>
              <SideBarButton
                active={courses}
                useRef={ref}
                handleOnClick={(e) => {
                  e.preventDefault();
                  router.push("/explore?category=courses");
                  togglingCourses();
                }}
              >
                <MdOndemandVideo className="ml-4 mr-2" /> Courses
              </SideBarButton>
              <SideBarButton
                active={hackathons}
                useRef={ref}
                handleOnClick={(e) => {
                  e.preventDefault();
                  router.push("/explore?category=hackathons");
                  togglingHackathons();
                }}
              >
                <FaTrophy className="ml-4 mr-2" /> Hackathons
              </SideBarButton>
              <SideBarButton
                active={devTools}
                useRef={ref}
                handleOnClick={(e) => {
                  e.preventDefault();
                  router.push("/explore?category=developer_tools");
                  togglingDevTools();
                }}
              >
                <FaTools className="ml-4 mr-2" /> Developer Tools
              </SideBarButton>
              <SideBarButton
                active={books}
                useRef={ref}
                handleOnClick={(e) => {
                  e.preventDefault();
                  router.push("/explore?category=books");
                  togglingBooks();
                }}
              >
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
      </div>

      <div className="absolute bottom-5 flex flex-col"></div>
    </aside>
  );
};

export default Sidebar;

const SideBarButton = ({ children, handleOnClick, active, useRef }) => {
  if (active) {
    return (
      <>
        <button
          ref={useRef}
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
        ref={useRef}
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
