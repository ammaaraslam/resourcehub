import { TiArrowUpThick } from "react-icons/ti";
import { FiExternalLink, FiBookmark } from "react-icons/fi";
import CategoryBadge from "./CategoryBadge";

const ResourceCard = () => {
  return (
    <article className="m-5 w-72 h-[25rem] bg-white dark:bg-black border-2 border-black dark:border-white border-opacity-10 dark:border-opacity-10 hover:border-opacity-20 dark:hover:border-opacity-20 hover:scale-105 rounded-2xl p-3 font-sansSerif text-black dark:text-white relative transition-all duration-200">
      <div className="flex items-center">
        <div className="rounded-full h-10 w-10 bg-black dark:bg-white"></div>
        <div className="flex flex-col ml-2">
          <div className="flex items-center font-bold text-base w-28 leading-5">
            <span>Ammaar Aslam</span>
          </div>
        </div>
        <a className="ml-auto">
          <CategoryBadge />
        </a>
      </div>
      <div className="mt-1">
        <span className="inline-flex opacity-60 dark:opacity-60 text-sm">
          10 minutes ago
        </span>

        <div className="inline-flex text-2xl font-bold">
          Title of this resource from this place.
        </div>
      </div>
      <div className="mt-1 pb-4 bg-black dark:bg-white w-full h-44 rounded-2xl"></div>

      <div className="absolute bottom-0 mt-2 py-3 px-2 left-0 right-0 flex justify-center items-center ml-auto mr-auto">
        <div className="mr-14">
          <ResourceCardUpvoteButton>
            <TiArrowUpThick className="mt-auto mb-auto" size={35} />
          </ResourceCardUpvoteButton>
        </div>
        <div className="mr-14">
          <ResourceCardBookmarkButton>
            <FiBookmark className="mt-auto mb-auto" size={33} />
          </ResourceCardBookmarkButton>
        </div>
        <div>
          <ResourceCardExternalButton>
            <FiExternalLink className="mt-auto mb-auto" size={30} />
          </ResourceCardExternalButton>
        </div>
      </div>
    </article>
  );
};

export default ResourceCard;

const ResourceCardUpvoteButton = ({ children, handleOnClick }) => {
  return (
    <>
      <button
        type="button"
        onClick={handleOnClick}
        className={`inline-flex p-1 rounded-md hover:bg-green-200 hover:text-green-600 dark:hover:bg-green-100 dark:hover:text-green-500`}
      >
        {children}
      </button>
    </>
  );
};

const ResourceCardBookmarkButton = ({ children, handleOnClick }) => {
  return (
    <>
      <button
        type="button"
        onClick={handleOnClick}
        className={`inline-flex p-1 rounded-md hover:bg-yellow-200 hover:text-yellow-600 dark:hover:bg-yellow-100 dark:hover:text-yellow-500`}
      >
        {children}
      </button>
    </>
  );
};

const ResourceCardExternalButton = ({ children, handleOnClick }) => {
  return (
    <>
      <button
        type="button"
        onClick={handleOnClick}
        className={`inline-flex p-1 rounded-md hover:bg-blue-200 hover:text-blue-600 dark:hover:bg-blue-100 dark:hover:text-blue-500`}
      >
        {children}
      </button>
    </>
  );
};
