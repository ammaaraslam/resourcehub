import prisma from "../../lib/prisma";
import { getSession } from "next-auth/react";

export default async (req, res) => {
  if (req.method === "GET") {
    const session = await getSession({ req });

    try {
      const user = await prisma.user.findUnique({
        where: { email: session.user.email },
      });

      const myResources = await prisma.resource.findMany({
        orderBy: {
          createdAt: "desc",
        },
        where: { uploaderId: user.id },
        include: {
          uploader: true,
        },
      });

      return res.status(200).json(myResources, { success: true });
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
