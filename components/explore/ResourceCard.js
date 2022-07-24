import { TiArrowUpThick } from "react-icons/ti";
import { FiExternalLink, FiBookmark } from "react-icons/fi";
import CategoryBadge from "./CategoryBadge";
import { format } from "date-fns";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

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
  sourceTwitter,
  userBookmarked,
  upvoters,
  id,
}) => {
  const newDateTime = new Date(resourceTime);
  const { data: session } = useSession();
  const [meta, setMeta] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const getMeta = async () => {
    body = [resourceLink];
    try {
      setLoading(false);
      const response = await fetch(`/api/meta/resourceMeta`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (response.status !== 200) {
        console.log("something went wrong");
        //set an error banner here
      } else {
        console.log("Successfully upvoted !!!");
        setMeta(response.data);
        setLoading(false);
        //set a success banner here
      }
      //check response, if success is false, dont take them to success page
    } catch (error) {
      console.log("there was an error submitting", error);
    }
  };
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
  console.log(meta);
  useEffect(() => {
    // normal state
    setMeta([]);

    // fetching state
    axios
      .get(`/api/meta/resourceMeta?url=${resourceLink}`)
      .then(async (response) => {
        if (response.request.status === 400) {
          setLoading(true);
          console.log("false");
        } else {
          setLoading(false);
          await setMeta(response.data);
        }
      })
      .catch((error) => {
        setLoading(true);
      });
  }, []);
  const image = () => {
    if (meta.ogImage) {
      return meta.ogImage.url;
    } else {
      return "/public/vercel.svg";
    }
  };

  return (
    <article className="group m-5 w-[22rem] h-[27rem] bg-white dark:bg-black border-2 border-black dark:border-white border-opacity-10 dark:border-opacity-10 hover:border-opacity-20 dark:hover:border-opacity-20 hover:scale-105 rounded-2xl py-7 px-4 font-sf text-black dark:text-white relative transition-all duration-200">
      <div className="hidden group-hover:block absolute -top-4 p-0 -right-4 transition-all duration-300">
        <div>
          <a href={resourceLink} target="_blank">
            <ResourceCardExternalButton>
              <FiExternalLink className="mt-auto mb-auto" size={30} />
            </ResourceCardExternalButton>
          </a>
        </div>
      </div>

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
      <div className="mt-3">
        <span className="inline-flex opacity-60 dark:opacity-60 text-sm">
          {newDateTime && format(newDateTime, "LLL d, yyyy ")}
        </span>

        <div className="inline-flex text-2xl font-bold w-72 h-fit">
          <p className="line-clamp-2">{resourceTitle}</p>
        </div>
      </div>
      {loading && (
        <div className="mt-4 pb-4 bg-black dark:bg-white w-full h-44 rounded-2xl"></div>
      )}

      {!loading && (
        <img src={image()} alt="" className="rounded-xl w-full h-44" />
      )}
      <div className="mt-1 pb-2 mr-0 absolute right-3">
        <span className="inline-flex opacity-60 dark:opacity-60 text-sm">
          Author -{" "}
          <a href={`https://twitter.com/${sourceTwitter}`} target="_blank">
            {sourceTwitter}
          </a>
        </span>
      </div>
    </article>
  );
};

export default ResourceCard;

const ResourceCardExternalButton = ({ children, handleOnClick }) => {
  return (
    <>
      <button
        type="button"
        onClick={handleOnClick}
        className={`inline-flex p-2 rounded-md bg-blue-200 text-blue-600 dark:bg-blue-100 dark:text-blue-500`}
      >
        {children}
      </button>
    </>
  );
};
