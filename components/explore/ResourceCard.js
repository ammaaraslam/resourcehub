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
  sourceTwitter,
  id,
}) => {
  const newDateTime = new Date(resourceTime);
  const { data: session } = useSession();
  const [meta, setMeta] = useState([]);
  const [loading, setLoading] = useState(true);

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
        res.json(error).end();
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
      {loading && (
        <div className="mt-4 pb-4 bg-black dark:bg-white w-full h-44 rounded-2xl"></div>
      )}

      {!loading && (
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

export default ResourceCard;

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
