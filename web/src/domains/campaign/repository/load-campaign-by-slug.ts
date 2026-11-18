import { sanityClient } from "@/domains/infrastructure/sanity/client";
import { IMAGE_FRAGMENT } from "@/domains/infrastructure/sanity/fragments/image-fragment";
import { campaignSchema } from "../schema/campaign-schema";

const CAMPAIGN_QUERY = `
  *[_type == "campaign" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    heroImage {
      ${IMAGE_FRAGMENT}
    },
    sections[] {
      _type,
      _key,
      caption,
      image {
        ${IMAGE_FRAGMENT}
      }
    }
  }
`;

export const loadCampaignBySlug = async (slug: string) => {
  const data = await sanityClient.fetch(CAMPAIGN_QUERY, { slug });

  return campaignSchema.parse(data);
};
