import { z } from "zod";

export const zBookSchema = z.object({
  uuid: z.string(),
  title: z.string(),
  release_date: z.string(),
  rate: z.number(),
  poster_url: z.string(),
  author: z.string(),
});
