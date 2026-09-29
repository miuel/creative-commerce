export type CampaignDto = {
  _id: string
  title: string
  slug: {
    current: string
  }
  description: string
  heroImage?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
}