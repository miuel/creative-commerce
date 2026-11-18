// infrastructure/sanity/client.ts

import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: "5cyf27m4",
  dataset: "production",
  apiVersion: "2026-09-29",
  useCdn: true,
});
