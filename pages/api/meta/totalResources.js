import prisma from "lib/prisma";

export default async (req, res) => {
  if (req.method === "GET") {
    try {
      const totalResources = await prisma.resource.count();
      return res.status(200).json(totalResources, { success: true });
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
