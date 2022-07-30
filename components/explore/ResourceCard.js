import { TiArrowUpThick } from "react-icons/ti";
import { FiExternalLink, FiBookmark } from "react-icons/fi";
import CategoryBadge from "./CategoryBadge";
import { format } from "date-fns";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

export const ResourceCardSkeleton = () => {
  return (
    <article className="m-5 w-[22rem] h-[27rem] bg-white dark:bg-black border-2 border-gray-300 dark:border-gray-400 rounded-2xl py-7 px-4 relative transition-all duration-300">
      <div className="animate-pulse">
        <div className="flex items-center">
          <div className="rounded-full h-10 w-10 bg-gray-600"></div>
          <div className="flex flex-col ml-2">
            <div className="flex items-center w-24 h-3"></div>
          </div>
          <div className="ml-auto">
            <div className="w-28 h-5"></div>
          </div>
        </div>
        <div className="mt-3">
          <span className="inline-flex w-24 bg-gray-600 h-4"></span>
          <div className="w-72 bg-gray-600 h-6 mt-1"></div>
          <div className="w-72 bg-gray-600 h-6 mt-1"></div>
          <div className="w-72 bg-gray-600 h-6 mt-1"></div>
        </div>
        <div className="mt-4 pb-4 bg-gray-600 w-full h-44 rounded-2xl"></div>

        <div className="mt-1 pb-2 mr-0 absolute right-3">
          <span className="inline-flex w-24 h-4 bg-gray-600 "></span>
        </div>
      </div>
    </article>
  );
};

export const ResourceCard = ({
  resourceTitle,
  resourceLink,
  resourceTime,
  uploaderImage,
  uploaderName,
  resourceCategory,
  sourceTwitter,
  resourceLoading,
}) => {
  const newDateTime = new Date(resourceTime);
  const [meta, setMeta] = useState([]);
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    // normal state
    setMeta([]);

    // fetching state
    axios
      .get(`/api/meta/resourceMeta?url=${resourceLink}`)
      .then(async (response) => {
        if (response.request.status === 400) {
          setImageLoading(true);
        } else {
          setImageLoading(false);
          await setMeta(response.data);
        }
      })
      .catch((error) => {
        res.json(error).end();
        setImageLoading(true);
      });
  }, []);
  const image = () => {
    if (meta.ogImage) {
      return meta.ogImage.url;
    } else {
      return "https://";
    }
  };

  return (
    <article className="group m-5 w-[22rem] h-[27rem] bg-white dark:bg-black border-2 border-gray-300 dark:border-gray-400 hover:border-gray-400 dark:hover:border-gray-300 hover:scale-[1.018] rounded-2xl py-7 px-4 font-sf text-black dark:text-white relative transition-all duration-300">
      <div className="hidden group-hover:block absolute -top-4 p-0 -right-4 transition-all duration-300">
        <div>
          <a href={resourceLink} target="_blank">
            <ResourceCardExternalButton>
              <FiExternalLink className="mt-auto mb-auto" size={27} />
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
          <div className="flex items-center font-bold text-base w-24 leading-5">
            <span>{uploaderName}</span>
          </div>
        </div>
        <div className="ml-auto">
          <CategoryBadge category={resourceCategory} />
        </div>
      </div>
      <div className="mt-3">
        <span className="inline-flex font-semibold text-gray-600 text-sm">
          {newDateTime && format(newDateTime, "LLL d, yyyy ")}
        </span>
        <div className="inline-flex text-2xl font-bold w-72 h-fit">
          <a
            href={resourceLink}
            className="line-clamp-3 underline decoration-gray-600 hover:decoration-black dark:hover:decoration-white"
          >
            {resourceTitle}
          </a>
        </div>
      </div>
      {imageLoading && (
        <div className="mt-4 pb-4 bg-black dark:bg-white w-full h-44 rounded-2xl"></div>
      )}

      {!imageLoading && (
        <a href={resourceLink}>
          <img src={image()} alt="" className="rounded-xl w-full h-44" />
        </a>
      )}
      {sourceTwitter && (
        <div className="mt-1 pb-2 mr-0 absolute right-3">
          <span className="inline-flex font-semibold text-gray-600 text-sm">
            Author -{" "}
            <a
              href={`https://twitter.com/${sourceTwitter}`}
              className="hover:text-green-500"
              target="_blank"
            >
              @{sourceTwitter}
            </a>
          </span>
        </div>
      )}
    </article>
  );
};

const ResourceCardExternalButton = ({ children }) => {
  return (
    <>
      <button
        type="button"
        className={`inline-flex p-[0.4rem] rounded-md bg-gray-400 text-black dark:bg-gray-400 dark:text-white hover:translate-x-[0.1rem] hover:-translate-y-[0.1rem] transition-all duration-200`}
      >
        {children}
      </button>
    </>
  );
};
