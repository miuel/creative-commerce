import { z } from "zod";
import { imageSchema } from "@/infrastructure/sanity/image";

const heroSchema = z.looseObject({
  title: z.string().nullish(),
  description: z.string().nullish(),
  button: z
    .looseObject({
      label: z.string().nullish(),
      href: z.string().nullish(),
      showArrow: z.boolean().nullish(),
    })
    .nullish(),
  image: imageSchema,
  showHero: z.boolean().nullish(),
});

export const homePageSchema = z.looseObject({
  _id: z.string(),
  _type: z.literal("home"),
  title: z.string().nullish(),
  hero: heroSchema.nullish(),
  editorialHero: heroSchema.nullish(),
});
