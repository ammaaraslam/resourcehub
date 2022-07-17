import {prisma} from '../../../../lib/prisma'

export default async function handler(req, res) {
  if (req.method === "PUT") {
    const { id } = req.query;
    try {
      const upvote = await prisma.resource.update({
        where: {
          id: { id },
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
}
