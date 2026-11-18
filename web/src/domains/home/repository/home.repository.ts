import { sanityClient } from "@/infrastructure/sanity/client";
import { HERO_FRAGMENT } from "@/infrastructure/sanity/fragments/hero-fragment";
import { SEO_FRAGMENT } from "@/infrastructure/sanity/fragments/seo-fragment";
import type { HomePageDto } from "../dto/home.dto";
import { homePageSchema } from "../schema/home.schema";

const HOME_PAGE_QUERY = `
    *[_type == "home"][0]{
        _id,
        _type,
        title,
        seo {
            ${SEO_FRAGMENT}
        },
        hero {
            ${HERO_FRAGMENT}
        },
        editorialHero {
            ${HERO_FRAGMENT}
        }
    }
`;

export const loadHomePage = async (): Promise<HomePageDto | null> => {
  const data = await sanityClient.fetch<unknown>(HOME_PAGE_QUERY);

  return data === null ? null : homePageSchema.parse(data);
};
