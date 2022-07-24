import { TiArrowUpThick } from "react-icons/ti";
import { FiExternalLink, FiBookmark } from "react-icons/fi";
import CategoryBadge from "./CategoryBadge";
import { format } from "date-fns";
import { useState } from "react";
import { useSession } from "next-auth/react";

const ResourceCard = ({
  uploaderID,
  resourceTitle,
  resourceImage,
  resourceLink,
  resourceTime,
  uploaderImage,
  uploaderName,
  resourceCategory,
  resourceTag,
  totalUpvotes,
  userUpvoted,
  userBookmarked,
  upvoters,
  id,
}) => {
  const newDateTime = new Date(resourceTime);
  const { data: session } = useSession();

  // const [numberOfUpvotes, setNumberOfUpvotes] = useState(totalUpvotes);
  // const [upvoted, setUpvoted] = useState(userUpvoted);
  // const [bookmarked, setBookmarked] = useState(false);
  // const [bookmarks, setBookmarks] = useState([]);
  // const isFound = upvoters.some((upvoter) => {
  //   if (session) {
  //     if (upvoter.upvoterId === session.user.email) {
  //       return true;
  //     }

  //     return false;
  //   } else {
  //     if (upvoter.upvoterId === "currentUserEmail") {
  //       return true;
  //     }

  //     return false;
  //   }
  // });
  // const [currentUserUpvoted, setCurrentUserUpvoted] = useState(isFound);

  // const handleBookmark = async () => {
  //   const resourceID = id;
  //   const body = [resourceID];
  //   if (!bookmarked) {
  //     if (!bookmarks.includes(resourceID)) setBookmarks(bookmark.concat(resourceID));
  //     console.log(id);
  //   }

  // }

  // const handleUpvote = async () => {
  //   const resourceID = id;
  //   const body = [resourceID];

  //   if (session) {
  //     if (!upvoted) {
  //       // Have to upvote resource
  //       setNumberOfUpvotes(totalUpvotes + 1);
  //       setUpvoted(true);
  //       try {
  //         const response = await fetch("/api/meta/upvote", {
  //           method: "PUT",
  //           headers: { "Content-Type": "application/json" },
  //           body: JSON.stringify(body),
  //         });
  //         if (response.status !== 200) {
  //           console.log("something went wrong");
  //           //set an error banner here
  //         } else {
  //           console.log("Successfully upvoted !!!");
  //           //set a success banner here
  //         }
  //         //check response, if success is false, dont take them to success page
  //       } catch (error) {
  //         console.log("there was an error submitting", error);
  //       }
  //     } else {
  //       // Have to unvote resource
  //       setNumberOfUpvotes(totalUpvotes - 1);
  //       setUpvoted(false);

  //       try {
  //         const response = await fetch("/api/meta/downvote", {
  //           method: "PUT",
  //           headers: { "Content-Type": "application/json" },
  //           body: JSON.stringify(body),
  //         });
  //         if (response.status !== 200) {
  //           console.log("something went wrong");
  //           //set an error banner here
  //         } else {
  //           console.log("Successfully upvoted !!!");
  //           //set a success banner here
  //         }
  //         //check response, if success is false, dont take them to success page
  //       } catch (error) {
  //         console.log("there was an error submitting", error);
  //       }
  //     }
  //   } else {
  //     return false;
  //   }

  // };
  return (
    <article className="m-5 w-80 h-[27rem] bg-white dark:bg-black border-2 border-black dark:border-white border-opacity-10 dark:border-opacity-10 hover:border-opacity-20 dark:hover:border-opacity-20 hover:scale-105 rounded-2xl p-3 font-sf text-black dark:text-white relative transition-all duration-200">
      <div className="flex items-center">
        <div className="rounded-full h-10 w-10 bg-black dark:bg-white">
          <img
            src={uploaderImage}
            className="rounded-full h-full w-full"
            alt="alt-text"
          />
        </div>
        <div className="flex flex-col ml-2">
          <div className="flex items-center font-bold text-base w-28 leading-5">
            <span>{uploaderName}</span>
          </div>
        </div>
        <a className="ml-auto">
          <CategoryBadge category={resourceCategory} />
        </a>
      </div>
      <div className="mt-1">
        <span className="inline-flex opacity-60 dark:opacity-60 text-sm">
          {newDateTime && format(newDateTime, "LLL d, yyyy ")}
        </span>

        <div className="inline-flex text-2xl font-bold w-72 h-fit">
          <p className="line-clamp-2">{resourceTitle}</p>
        </div>
      </div>
      <div className="mt-4 pb-4 bg-black dark:bg-white w-full h-44 rounded-2xl"></div>
      <div className="mt-1 pb-2 mr-0 absolute right-3">
        <span className="inline-flex opacity-60 dark:opacity-60 text-sm">
          #{resourceTag}
        </span>
      </div>

      <div className="absolute bottom-0 py-3 px-2 left-0 right-0 flex justify-center items-center ml-auto mr-auto">
        <div>
          <a href={resourceLink} target="_blank">
            <ResourceCardExternalButton>
              <FiExternalLink className="mt-auto mb-auto" size={30} />
            </ResourceCardExternalButton>
          </a>
        </div>
      </div>
    </article>
  );
};

export default ResourceCard;

const ResourceCardUpvoteButton = ({ children, handleOnClick, active }) => {
  if (active) {
    return (
      <>
        <button
          type="button"
          onClick={handleOnClick}
          className={`inline-flex p-1 rounded-md bg-green-200 text-green-600 dark:bg-green-100 dark:text-green-500`}
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
