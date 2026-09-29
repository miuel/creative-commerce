import { z } from 'zod'

const imageSectionSchema = z.object({
  _type: z.literal('imageSection'),
  _key: z.string(),
  image: z.object({
    asset: z.object({
      _ref: z.string(),
      _type: z.literal('reference'),
    }),
  }),
  caption: z.string().optional(),
})

export const campaignSchema = z.object({
  _id: z.string(),
  title: z.string(),
  slug: z.object({
    current: z.string(),
  }),
  description: z.string(),
  heroImage: z
    .object({
      asset: z.object({
        _ref: z.string(),
        _type: z.literal('reference'),
      }),
    })
    .optional(),

  sections: z.array(imageSectionSchema).nullish(),
})