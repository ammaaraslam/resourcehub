import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  // Check if user is authenticated
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ message: "Unauthorized." });
  }

  if (req.method === "POST") {
    return await addResource(req, res);
  } else if (req.method === "GET") {
    return await allResources(req, res);
  } else if (req.method === "PUT") {
    return await updateMeta(req, res), await getMeta(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}

async function allResources(req, res) {
  try {
    const allResources = await prisma.resource.findMany({
      include: {
        resourceTags: true,
        uploader: true,
      },
    });
    return res.status(200).json(allResources, { success: true });
  } catch (error) {
    console.error("Request error", error);
    res
      .status(500)
      .json({ error: "Error reading from database", success: false });
  }
}

async function addResource(req, res) {
  const body = req.body;
  const session = await getSession({ req });

  try {
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });
    const newEntry = await prisma.resource.create({
      data: {
        resourceImage: body.resourceImage,
        resourceTitle: body.resourceTitle,
        resourceCategory: body.resourceCategory,
        resourceTags: {
          connectOrCreate: [
            {
              create: { name: body.resourceTag },
              where: {
                name: body.resourceTag,
              },
            },
          ],
        },
        resourceLink: body.resourceLink,
        sourceTwitter: body.sourceTwitter,
        uploaderId: user.id,
      },
    });
    return res.status(200).json(newEntry, { success: true });
  } catch (error) {
    console.error("Request error", error);
    res.status(500).json({ error: "Error adding resource", success: false });
  }
}

async function updateMeta(req, res) {
  const body = req.body;
  if (body.upvote === true) {
    try {
      const newEntry = await prisma.resource.update({
        where: {
          id: body.resourceID,
        },
        data: {
          totalUpvotes: { increment: 1 },
          userUpvoted: true,
        },
      });
      return res.status(200).json(newEntry, { success: true });
    } catch (error) {
      console.error("Request error", error);
      res.status(500).json({ error: "Error adding resource", success: false });
    }
  } else {
    try {
      const newEntry = await prisma.resource.update({
        where: {
          id: body.resourceID,
        },
        data: {
          totalUpvotes: { decrement: 1 },
          userUpvoted: false,
        },
      });
      return res.status(200).json(newEntry, { success: true });
    } catch (error) {
      console.error("Request error", error);
      res.status(500).json({ error: "Error adding resource", success: false });
    }
  }
}

async function getMeta(req, res) {
  const body = req.body;

  try {
    const getUniqueMeta = await prisma.resource.findMany({
      where: {
        id: body.resourceID,
      },
    });
    return res.status(200).json(getUniqueMeta, { success: true });
  } catch (error) {
    console.error("Request error", error);
    res
      .status(500)
      .json({ error: "Error reading from database", success: false });
  }
}
