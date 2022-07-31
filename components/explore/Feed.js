import { useRouter } from "next/router";
import { ResourceCard, ResourceCardSkeleton } from "./ResourceCard";

const FeedComponent = ({
  category,
  resources,
  resourceLoading,
  skeletonCards,
}) => {
  return (
    <div>
      <div className="py-10">
        <span className="ml-8 text-2xl font-montserrat font-bold">
          {category}
        </span>

        {resourceLoading ? (
          <div className="py-4 md:px-14 px-3 grid md:grid-cols-2 md:gap-10 grid-cols-1 gap-5 ml-auto mr-auto">
            {skeletonCards.map((index) => (
              <ResourceCardSkeleton key={index} />
            ))}
          </div>
        ) : (
          <div className="py-4 md:px-14 px-3 grid md:grid-cols-2 md:gap-10 grid-cols-1 gap-5 ml-auto mr-auto">
            {resources.map((resource) => (
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
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export const SkeletonFeed = ({ resourceLoading, skeletonCards }) => {
  return (
    <FeedComponent
      resourceLoading={resourceLoading}
      skeletonCards={skeletonCards}
    />
  );
};

const Feed = ({ resources }) => {
  const router = useRouter();
  const category = router.query.category;
  const route = router.asPath;

  if (category == "articles") {
    return <FeedComponent category="Articles" resources={resources} />;
  }
  if (category == "courses") {
    return <FeedComponent category="Courses" resources={resources} />;
  }
  if (category == "hackathons") {
    return <FeedComponent category="Hackathons" resources={resources} />;
  }
  if (category == "developer_tools") {
    return <FeedComponent category="Developer Tools" resources={resources} />;
  }
  if (category == "books") {
    return <FeedComponent category="Books" resources={resources} />;
  }
  if (category == "cheatsheets") {
    return <FeedComponent category="Cheatsheets" resources={resources} />;
  }
  if (category == "roadmaps") {
    return <FeedComponent category="Roadmaps" resources={resources} />;
  }
  if (category == "online_platforms") {
    return <FeedComponent category="Online Platform" resources={resources} />;
  }
  if (category == "blogs") {
    return <FeedComponent category="Blogs" resources={resources} />;
  }
  if (category == "apis") {
    return <FeedComponent category="APIs" resources={resources} />;
  }
  if (category == "open_source") {
    return <FeedComponent category="Open Source" resources={resources} />;
  }
  if (route == "/my-resources") {
    return <FeedComponent category="My Resources" resources={resources} />;
  } else {
    return <FeedComponent category="Explore" resources={resources} />;
  }
};

export default Feed;
