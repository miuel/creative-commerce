import type { HomePageDto } from "@/domains/home/dto/home.dto";
import { Hero } from "./components/Hero";

export function HomePage({ data }: { data: HomePageDto }) {
  return (
    <main
      style={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {data.title && <h1>{data.title}</h1>}
      <Hero hero={data.hero} preload />
      <Hero hero={data.editorialHero} />
    </main>
  );
}
