import { createClient } from "next-sanity";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const client = createClient({
    projectId: process.env.PROJECT_ID,
    dataset: "production",
    useCdn: true,
  });
  const query = `*[_type == 'blog']`;
  try {
    const blogs = await client.fetch(query);
    res.status(200).json({ blogs });
  } catch (error: any) {
    console.log(error.data);
  }
};
