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
    return await resources(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}

async function resources(req, res) {
  try {
    const allResources = await prisma.resource.findMany({
      take: 3,
      orderBy: {
        createdAt: "desc",
      },

      include: {
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
        resourceTitle: body.resourceTitle,
        resourceCategory: body.resourceCategory,
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
