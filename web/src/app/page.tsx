import { loadCampaignBySlug } from "@/domains/campaign/repository/load-campaign-by-slug";
import { urlFor } from "@/domains/infrastructure/sanity/image";
import { ImageSection } from "@/ui/components/ImageSection/ImageSection";

export default async function Home() {
  const campaign = await loadCampaignBySlug("born-of-nature");

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

      {campaign.heroImage && (
        <img
          src={urlFor(campaign.heroImage).width(600).url()}
          alt={campaign.title}
        />
      )}

      {campaign.sections?.map((section) => (
        <ImageSection
          key={section._key}
          image={section.image}
          caption={section.caption}
        />
      ))}
    </main>
  );
}
