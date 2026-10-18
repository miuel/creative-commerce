import { loadCampaignBySlug } from "@/domains/campaign/repository/load-campaign-by-slug";
import { Image } from "@/ui/components/image/Image";
import { ImageSection } from "@/ui/components/ImageSection/ImageSection";

export default async function Home() {
  const campaign = await loadCampaignBySlug("born-of-nature");
  const heroImage = campaign.heroImage;
  const dimensions = heroImage?.asset.metadata.dimensions;

  return (
    <main
      style={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>{campaign.title}</h1>
      <p>{campaign.description}</p>

      {heroImage && dimensions && (
        <Image
          src={heroImage.asset.url}
          width={dimensions.width}
          height={dimensions.height}
          alt={campaign.title}
          sizes="100vw"
          preload
        />
      )}

      {campaign.sections?.map((section) => section.image && (
        <ImageSection
          key={section._key}
          image={{
            src: section.image.asset.url,
            width: section.image.asset.metadata.dimensions.width,
            height: section.image.asset.metadata.dimensions.height,
            alt: section.caption ?? "",
          }}
          caption={section.caption}
        />
      ))}
    </main>
  );
}
