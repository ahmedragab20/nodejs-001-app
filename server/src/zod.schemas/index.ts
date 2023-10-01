import { z } from "zod";

export const zBookSchema = z.object({
  // _id: z.string().regex(/^[0-9a-f]{24}$/),
  title: z.string(),
  release_date: z.string(),
  rate: z.number(),
  poster_url: z.string(),
  author: z.string(),
});
