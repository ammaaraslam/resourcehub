import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method === "PUT") {
    const body = req.body;
    try {
      const upvote = await prisma.resource.update({
        where: {
          id: body.resourceID,
        },
        data: {
          totalUpvotes: { increment: 1 },
          userUpvoted: true,
        },
      });
      return res.status(200).json(upvote, { success: true });
    } catch (error) {
      console.error("Request error", error);
      res.status(500).json({ error: "Error adding resource", success: false });
    }
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
};
