import type { HomePageDto } from "@/domains/home/dto/home.dto";
import { Image } from "@/ui/components/image/Image";

type HeroProps = {
  hero: HomePageDto["hero"];
  preload?: boolean;
};

export function Hero({ hero, preload }: HeroProps) {
  if (!hero || hero.showHero === false) {
    return null;
  }

  const { image, button } = hero;

  return (
    <section>
      {hero.title && <h2>{hero.title}</h2>}
      {hero.description && <p>{hero.description}</p>}
      {image && (
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt=""
          sizes="100vw"
          preload={preload}
        />
      )}
      {button?.label && button.href && (
        <a href={button.href}>
          {button.label}
          {button.showArrow && <span aria-hidden="true"> →</span>}
        </a>
      )}
    </section>
  );
}
