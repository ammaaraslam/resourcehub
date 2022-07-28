import Head from "next/head";
import Feed from "../components/explore/Feed";
import Header from "../components/explore/Header";
import Sidebar from "../components/explore/Sidebar";
import ThemeToggle from "../components/ThemeToggle";
import { useState } from "react";
import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";

export default function Explore({ resources }) {
  return (
    <div>
      <Head>
        <title>Explore | ResourceHub</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Sidebar />

      <main className="w-full h-full bg-white dark:bg-black">
        <Feed resources={resources} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const prisma = new PrismaClient();
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
    const sort = context.query.sort;
    if (category == "articles" && sort == "latest") {
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
  }
}
