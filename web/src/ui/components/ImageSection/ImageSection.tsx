import { urlFor } from '@/domains/infrastructure/sanity/image'

type ImageSectionProps = {
  image: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  caption?: string
}

export const ImageSection = ({ image, caption }: ImageSectionProps) => {
  return (
    <section>
      <img src={urlFor(image).width(600).url()} alt={caption ?? ''} />

      {caption && <p>{caption}</p>}
    </section>
  )
}