import { useEffect, useState } from "react";
import Feed, { SkeletonFeed } from "../components/explore/Feed";
import Header from "../components/explore/Header";
import Sidebar from "../components/explore/Sidebar";
import { Meta } from "../components/Meta";
import prisma from "../lib/prisma";

export default function Explore({ resources }) {
  const [resourceLoading, setResourceLoading] = useState(true);
  const [openSidebar, setOpenSidebar] = useState(false);

  const sidebarProps = { openSidebar, setOpenSidebar };

  let skeletonCards = Array(4).fill(0);

  useEffect(() => {
    if (resources) {
      setTimeout(() => {
        setResourceLoading(false);
      }, 4000);
    }
  }, [resources]);

  return (
    <div>
      <Meta
        title="Explore | ResourceHub"
        description="Explore all resources added to ResourceHub"
      />
      <Header props={sidebarProps} />
      <Sidebar props={sidebarProps} />

      <main className="w-full h-fit min-h-screen bg-white dark:bg-black">
        <div className="md:pl-52 p-0 pt-20">
          {resourceLoading ? (
            <SkeletonFeed
              resourceLoading={resourceLoading}
              skeletonCards={skeletonCards}
            />
          ) : (
            <Feed resources={resources} />
          )}
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  if (!context.query.category) {
    const response = await prisma.resource.findMany({
      orderBy: {
        createdAt: "desc",
      },

      include: {
        uploader: true,
      },
    });

    // Pass the data to the Home page
    return {
      props: {
        resources: JSON.parse(JSON.stringify(response)),
      },
    };
  } else {
    const category = context.query.category;
    if (category == "articles") {
      const response = await prisma.resource.findMany({
        orderBy: {
          createdAt: "desc",
        },

        include: {
          uploader: true,
        },
        where: {
          resourceCategory: {
            equals: "Article",
          },
        },
      });

      // Pass the data to the Home page
      return {
        props: {
          resources: JSON.parse(JSON.stringify(response)),
        },
      };
    }
    if (category == "courses") {
      const response = await prisma.resource.findMany({
        orderBy: {
          createdAt: "desc",
        },

        include: {
          uploader: true,
        },
        where: {
          resourceCategory: {
            equals: "Course",
          },
        },
      });

      // Pass the data to the Home page
      return {
        props: {
          resources: JSON.parse(JSON.stringify(response)),
        },
      };
    }
    if (category == "hackathons") {
      const response = await prisma.resource.findMany({
        orderBy: {
          createdAt: "desc",
        },

        include: {
          uploader: true,
        },
        where: {
          resourceCategory: {
            equals: "Hackathon",
          },
        },
      });

      // Pass the data to the Home page
      return {
        props: {
          resources: JSON.parse(JSON.stringify(response)),
        },
      };
    }
    if (category == "developer_tools") {
      const response = await prisma.resource.findMany({
        orderBy: {
          createdAt: "desc",
        },

        include: {
          uploader: true,
        },
        where: {
          resourceCategory: {
            equals: "Developer Tool",
          },
        },
      });

      // Pass the data to the Home page
      return {
        props: {
          resources: JSON.parse(JSON.stringify(response)),
        },
      };
    }
    if (category == "books") {
      const response = await prisma.resource.findMany({
        orderBy: {
          createdAt: "desc",
        },

        include: {
          uploader: true,
        },
        where: {
          resourceCategory: {
            equals: "Book",
          },
        },
      });

      // Pass the data to the Home page
      return {
        props: {
          resources: JSON.parse(JSON.stringify(response)),
        },
      };
    }
    if (category == "cheatsheets") {
      const response = await prisma.resource.findMany({
        orderBy: {
          createdAt: "desc",
        },

        include: {
          uploader: true,
        },
        where: {
          resourceCategory: {
            equals: "CheatSheet",
          },
        },
      });

      // Pass the data to the Home page
      return {
        props: {
          resources: JSON.parse(JSON.stringify(response)),
        },
      };
    }
    if (category == "roadmaps") {
      const response = await prisma.resource.findMany({
        orderBy: {
          createdAt: "desc",
        },

        include: {
          uploader: true,
        },
        where: {
          resourceCategory: {
            equals: "Roadmap",
          },
        },
      });

      // Pass the data to the Home page
      return {
        props: {
          resources: JSON.parse(JSON.stringify(response)),
        },
      };
    }
    if (category == "online_platforms") {
      const response = await prisma.resource.findMany({
        orderBy: {
          createdAt: "desc",
        },

        include: {
          uploader: true,
        },
        where: {
          resourceCategory: {
            equals: "Online Platform",
          },
        },
      });

      // Pass the data to the Home page
      return {
        props: {
          resources: JSON.parse(JSON.stringify(response)),
        },
      };
    }
    if (category == "blogs") {
      const response = await prisma.resource.findMany({
        orderBy: {
          createdAt: "desc",
        },

        include: {
          uploader: true,
        },
        where: {
          resourceCategory: {
            equals: "Blog",
          },
        },
      });

      // Pass the data to the Home page
      return {
        props: {
          resources: JSON.parse(JSON.stringify(response)),
        },
      };
    }
    if (category == "apis") {
      const response = await prisma.resource.findMany({
        orderBy: {
          createdAt: "desc",
        },

        include: {
          uploader: true,
        },
        where: {
          resourceCategory: {
            equals: "API",
          },
        },
      });

      // Pass the data to the Home page
      return {
        props: {
          resources: JSON.parse(JSON.stringify(response)),
        },
      };
    }
    if (category == "open_source") {
      const response = await prisma.resource.findMany({
        orderBy: {
          createdAt: "desc",
        },

        include: {
          uploader: true,
        },
        where: {
          resourceCategory: {
            equals: "Open Source",
          },
        },
      });

      // Pass the data to the Home page
      return {
        props: {
          resources: JSON.parse(JSON.stringify(response)),
        },
      };
    }
  }
}
