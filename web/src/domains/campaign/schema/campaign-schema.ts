import { z } from "zod";

const imageSchema = z.object({
  asset: z.object({
    url: z.url(),
    metadata: z.object({
      dimensions: z.object({
        width: z.number().int().positive(),
        height: z.number().int().positive(),
      }),
    }),
  }).nullish(),
}).nullish().transform((image) => image?.asset ? { asset: image.asset } : null);

const imageSectionSchema = z.object({
  _type: z.literal("imageSection"),
  _key: z.string(),

  image: imageSchema,

  caption: z.string().nullish(),
});

export const campaignSchema = z.object({
  _id: z.string(),
  title: z.string(),
  slug: z.object({
    current: z.string(),
  }),
  description: z.string(),
  heroImage: imageSchema,
  sections: z.array(imageSectionSchema).nullish(),
});
