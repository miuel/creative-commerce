import { Image } from '../image/Image'

type ImageSectionProps = {
  image: {
    src: string
    width: number
    height: number
    alt: string
  }
  caption?: string | null
}

export const ImageSection = ({ image, caption }: ImageSectionProps) => {
  return (
    <section>
      <Image {...image} alt={image.alt} sizes="100vw" />
      {caption && <p>{caption}</p>}
    </section>
  )
}
