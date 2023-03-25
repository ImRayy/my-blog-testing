import { NextApiResponse, NextApiRequest } from "next";
import { markdownHeader } from "@/types/Interface";
import { createReadStream, readdirSync } from "fs";
import { frontmatter } from "@/types/Interface";
import matter from "gray-matter";
import { join } from "path";
import { EOL } from "os";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const dirPath = join(process.cwd(), "content/posts");
  const files = await readdirSync(dirPath);
  let frontMatters: markdownHeader[] = [];

  for (const file of files) {
    if (file.endsWith(".md")) {
      const slug = file.replace(".md", "");
      const filePath = join(dirPath, file);
      const readStream = createReadStream(filePath, { encoding: "utf8" });
      let frontMatter: string = "";
      let chunk: string;
      for await (chunk of readStream) {
        const firstLine = chunk.split(EOL)[0];
        if (firstLine.startsWith("---")) {
          frontMatter += chunk;
          break;
        }
        frontMatter += chunk;
      }

      const { data } = matter(frontMatter);

      frontMatters.push({
        frontmatter: data as frontmatter,
        slug: slug,
      });
    }
  }

  res.status(200).send(frontMatters);
};
