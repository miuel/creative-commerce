import { sanityClient } from '@/domains/infrastructure/sanity/client'
import { campaignSchema } from '../schema/campaign-schema'

const CAMPAIGN_QUERY = `
  *[_type == "campaign" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    heroImage {
      asset-> {
        url,
        metadata {
          dimensions {
            width,
            height
          }
        }
      }
    },
    sections[] {
      _type,
      _key,
      caption,
      image {
        asset-> {
          url,
          metadata {
            dimensions { width, height }
          }
        }
      }
    }
  }
`

export const loadCampaignBySlug = async (slug: string) => {
  const data = await sanityClient.fetch(CAMPAIGN_QUERY, { slug })

  return campaignSchema.parse(data)
}
