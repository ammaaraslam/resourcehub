import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import ResourceCard from "./ResourceCard";

const FeedComponent = ({ category, resources }) => {
  return (
    <div className="pl-52 pt-20">
      <div className="py-10">
        <span className="ml-8 text-2xl font-sf font-bold">{category}</span>

        <div className="py-4 px-14 grid grid-cols-2 gap-10 ml-auto mr-auto">
          {resources.map(
            (resource) => (
              console.log(typeof resource.resourceTags),
              (
                <ResourceCard
                  key={resource.id}
                  uploaderID={resource.uploaderId}
                  resourceTitle={resource.resourceTitle}
                  uploaderImage={resource.uploader.image}
                  uploaderName={resource.uploader.name}
                  resourceLink={resource.resourceLink}
                  sourceTwitter={resource.sourceTwitter}
                  resourceTime={resource.createdAt}
                  resourceCategory={resource.resourceCategory}
                  id={resource.id}
                />
              )
            )
          )}
        </div>
      </div>
    </div>
  );
};

const Feed = ({ resources }) => {
  console.log("uploader: ", resources);
  const [ascending, setAscending] = useState(false);
  const [articles, setArticles] = useState(false);

  const router = useRouter();
  const category = router.query.category;

  if (category == "articles") {
    return <FeedComponent category="articles" resources={resources} />;
  }
  if (category == "courses") {
    return <FeedComponent category="articles" resources={resources} />;
  }
  if (category == "hackathons") {
    return <FeedComponent category="articles" resources={resources} />;
  }
  if (category == "developer_tools") {
    return <FeedComponent category="articles" resources={resources} />;
  }
  if (category == "books") {
    return <FeedComponent category="articles" resources={resources} />;
  }
  if (category == "cheatsheets") {
    return <FeedComponent category="articles" resources={resources} />;
  }
  if (category == "roadmaps") {
    return <FeedComponent category="articles" resources={resources} />;
  }
  if (category == "online_platforms") {
    return <FeedComponent category="Online Platform" resources={resources} />;
  }
  if (category == "blogs") {
    return <FeedComponent category="blogs" resources={resources} />;
  } else {
    return <FeedComponent category="explore" resources={resources} />;
  }
};

export default Feed;
