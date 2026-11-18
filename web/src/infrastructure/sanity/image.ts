import { z } from "zod";

export const imageSchema = z
  .object({
    asset: z
      .object({
        url: z.url(),
        metadata: z.object({
          dimensions: z.object({
            width: z.number().int().positive(),
            height: z.number().int().positive(),
          }),
        }),
      })
      .nullish(),
  })
  .nullish()
  .transform((image) => (image?.asset ? { asset: image.asset } : null));
