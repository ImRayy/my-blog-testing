import { createClient } from "next-sanity";

export const ConfiguredSanityClient = createClient({
  projectId: process.env.PROJECT_ID,
  dataset: "production",
  useCdn: true,
});
