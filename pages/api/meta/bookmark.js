import prisma from "../../../lib/prisma";
import { getSession } from "next-auth/react";

export default async (req, res) => {
  if (req.method === "PUT") {
    const body = req.body;
    const session = await getSession({ req });

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    try {
      const bookmark = await prisma.resource.update({
        where: {
          id: body[0],
        },
        data: {
          bookmarkedById: user.id,
        },
      });
      return res.status(200).json(bookmark, { success: true });
    } catch (error) {
      res.status(500).json({ error: "Error adding resource", success: false });
    }
  } else if (req.method === "DELETE") {
    const body = req.body;
    const session = await getSession({ req });

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    try {
      const bookmark = await prisma.resource.delete({
        where: {
          id: body[0],
        },
        data: {
          bookmarkedById: user.id,
        },
      });
      return res.status(200).json(bookmark, { success: true });
    } catch (error) {
      res.status(500).json({ error: "Error adding resource", success: false });
    }
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
};
