import { sanityClient } from "@/domains/infrastructure/sanity/client";
import { HERO_FRAGMENT } from "@/domains/infrastructure/sanity/fragments/hero-fragment";
import { SEO_FRAGMENT } from "@/domains/infrastructure/sanity/fragments/seo-fragment";

const HOME_PAGE_QUERY = `
    *[_type == "home"][0]{
        _id,
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

export const loadPageData = async () => {
  const data = await sanityClient.fetch(HOME_PAGE_QUERY);

  return data;
};
