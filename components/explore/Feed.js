import React from "react";
import ResourceCard from "./ResourceCard";

const Feed = ({ resources }) => {
  console.log("uploader: ", resources);
  return (
    <div className="pl-52 pt-20">
      <div className="py-16 px-0 grid grid-cols-2 ml-auto mr-auto">
        {resources.map((resource) => (
          <ResourceCard
            uploaderID={resource.uploaderId}
            resourceTitle={resource.resourceTitle}
            uploaderImage={resource.uploader.image}
            uploaderName={resource.uploader.name}
            resourceLink={resource.resourceLink}
            sourceTwitter={resource.sourceTwitter}
            resourceTime={resource.createdAt}
            resourceCategory={resource.resourceCategory}
            resourceTag={resource.resourceTags[0].name}
            totalUpvotes={resource.totalUpvotes}
            userUpvoted={resource.userUpvoted}
            userBookmarked={resource.userBookmarked}
            resourceID={resource.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;
