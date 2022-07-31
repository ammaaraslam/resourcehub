import {
  MdExplore,
  MdLibraryAdd,
  MdOutlineExpandMore,
  MdOutlineExpandLess,
  MdOndemandVideo,
} from "react-icons/md";
import { FaPencilAlt, FaTrophy, FaTools } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { RiRoadMapFill, RiOpenSourceFill } from "react-icons/ri";
import { BsFillFileEarmarkSpreadsheetFill } from "react-icons/bs";
import { IoLibrarySharp } from "react-icons/io5";
import { ImRss } from "react-icons/im";
import { useEffect, useRef, useState } from "react";
import { AiFillApi } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

const Sidebar = ({ props }) => {
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
  const [apis, setApis] = useState(true);
  const [opensource, setOpensource] = useState(true);

  const [totalResources, setTotalResources] = useState(0);
  const togglingCloseSidebar = () => {
    props.openSidebar && props.setOpenSidebar(false);
  };
  const togglingArticles = () => {
    setArticles(!articles);
    togglingCloseSidebar();
  };
  const togglingExplore = () => {
    SetExplore(!explore);
    togglingCloseSidebar();
  };

  const togglingCourses = () => {
    setCourses(!courses);
    togglingCloseSidebar();
  };
  const togglingHackathons = () => {
    setHackathons(!hackathons);
    togglingCloseSidebar();
  };
  const togglingDevTools = () => {
    setDevTools(!devTools);
    togglingCloseSidebar();
  };
  const togglingBooks = () => {
    setBooks(!books);
    togglingCloseSidebar();
  };
  const togglingCheatsheets = () => {
    setCheatsheets(!cheatsheets);
    togglingCloseSidebar();
  };
  const togglingRoadmaps = () => {
    setRoadmaps(!roadmaps);
    togglingCloseSidebar();
  };
  const togglingOnlinePlatforms = () => {
    setOnlinePlatforms(!onlinePlatforms);
    togglingCloseSidebar();
  };
  const togglingBlogs = () => {
    setBlogs(!blogs);
    togglingCloseSidebar();
  };
  const togglingApis = () => {
    setApis(!apis);
    togglingCloseSidebar();
  };
  const togglingOpensource = () => {
    setOpensource(!opensource);
    togglingCloseSidebar();
  };

  const mobileSidebar = props.openSidebar ? "block" : "hidden";

  useEffect(() => {
    // fetching state
    axios
      .get(`/api/meta/totalResources`)
      .then(async (response) => {
        if (response.request.status === 400) {
        } else {
          await setTotalResources(response.data);
        }
      })
      .catch((error) => {
        res.json(error).end();
      });

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
          apis,
          opensource,
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
        setApis(false);
        setOpensource(false);
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
    apis,
    opensource,
  ]);

  return (
    <aside
      className={`fixed w-48 md:block  ${mobileSidebar} bg-white dark:bg-black border-r border-black dark:border-white border-opacity-10 dark:border-opacity-10 top-0 z-40 h-screen dark:bg-darkBackground shadow-md items-center justify-between font-montserrat`}
    >
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
                active={apis}
                useRef={ref}
                handleOnClick={(e) => {
                  e.preventDefault();
                  router.push("/explore?category=apis");
                  togglingApis();
                }}
              >
                <AiFillApi className="ml-4 mr-2" /> APIs
              </SideBarButton>
              <SideBarButton
                active={opensource}
                useRef={ref}
                handleOnClick={(e) => {
                  e.preventDefault();
                  router.push("/explore?category=open_source");
                  togglingOpensource();
                }}
              >
                <RiOpenSourceFill className="ml-4 mr-2" /> Open Source
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
        <div className="flex flex-col">
          {showMore && (
            <div className="px-2 py-3 text-center text-lg font-bold">
              <span>Total Resources: {totalResources}</span>
            </div>
          )}
          {!showMore && (
            <div className="px-2 py-5 text-center text-lg font-bold">
              <span>Total Resources: {totalResources}</span>
            </div>
          )}

          <hr></hr>

          <div className="grid grid-cols-2 gap-x-7 justify-between px-2 py-5">
            <a className="text-gray-700 hover:text-black dark:text-gray-400 dark:hover:text-white hover:underline">
              <Link href="/">Home</Link>
            </a>
            <a className="text-gray-700 hover:text-black dark:text-gray-400 dark:hover:text-white hover:underline">
              <Link href="/about">About</Link>
            </a>
            <a
              href="https://github.com/ammaaraslam/resourcehub"
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 hover:text-black dark:text-gray-400 dark:hover:text-white hover:underline"
            >
              Contribute
            </a>
            <a
              href="https://github.com/ammaaraslam/resourcehub"
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 hover:text-black dark:text-gray-400 dark:hover:text-white hover:underline"
            >
              Source
            </a>
          </div>
        </div>
        <hr></hr>
        {showMore && (
          <div className="px-2 mt-0 text-center text-base font-medium">
            <p>
              Built with 💚 by{" "}
              <a
                href="https://twitter.com/itsammaar_7"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-600 hover:underline"
              >
                Ammaar Aslam
              </a>
            </p>
          </div>
        )}
        {!showMore && (
          <div className="px-2 mt-[60%] text-center text-base font-medium">
            <p>
              Built with 💚 by{" "}
              <a
                href="https://twitter.com/itsammaar_7"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-600 hover:underline"
              >
                Ammaar Aslam
              </a>
            </p>
          </div>
        )}
      </div>
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
        className="py-1 text-purple-600 text-base text-center transition-all ease-in-out duration-150 rounded-lg inline-flex items-center justify-start border-2 border-purple-600 hover:bg-purple-600 hover:text-white dark:hover:text-black"
      >
        {children}
      </button>
    </>
  );
};
