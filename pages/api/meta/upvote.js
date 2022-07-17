import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method === "PUT") {
    const body = req.body;
    console.log(body);
    console.log(typeof body.resourceID);

    try {
      console.log(body);
      console.log(typeof body.resourceID);
      const upvote = await prisma.resource.update({
        where: {
          id: body[0],
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
      console.log(body);
      console.log(typeof body.resourceID);
    }
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
};
