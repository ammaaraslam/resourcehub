import React from "react";
import ResourceCard from "./ResourceCard";

const Feed = () => {
  return (
    <div className="pl-52 pt-20">
      <div className="py-16 px-0 grid grid-cols-3 ml-auto mr-auto">
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
      </div>
    </div>
  );
};

export default Feed;
