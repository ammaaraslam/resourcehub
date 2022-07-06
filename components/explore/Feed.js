import React from "react";
import ResourceCard from "./ResourceCard";

const Feed = ({props}) => {
  const resources = props
  return (
    <div className="pl-52 pt-20">
      <div className="py-16 px-0 grid grid-cols-3 ml-auto mr-auto">
      {resources.map((resource) => (
        <ResourceCard
        uploaderID={resource.uploaderId}
        resourceTitle={resource.resourceTitle}
        resourceImage={resource.resourceImage}
        resourceTime={resource.createdAt}
        />
      ))}
      </div>
    </div>
  );
};

export default Feed;
