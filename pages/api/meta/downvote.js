import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method === "PUT") {
    const body = req.body;
    try {
      const downvote = await prisma.resource.update({
        where: {
          id: body.resourceID,
        },
        data: {
          totalUpvotes: { decrement: 1 },
          userUpvoted: false,
        },
      });
      return res.status(200).json(downvote, { success: true });
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
