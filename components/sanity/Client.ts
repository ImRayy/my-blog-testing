import { createClient } from "next-sanity";

export const ConfiguredSanityClient = createClient({
  projectId: process.env.PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-04-04",
  useCdn: true,
});
