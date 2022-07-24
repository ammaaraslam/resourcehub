import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method === "PUT") {
    const body = req.body;
    console.log(body);
    console.log(typeof body.resourceID);
    const session = await getSession({ req });

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

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
          upvoters: {
            connectOrCreate: [
              {
                create: { upvoterId: user.email },
                where: {
                  upvoterId: user.email,
                },
              },
            ],
          },
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
