import { notFound } from "next/navigation";
import type { HomePageDto } from "@/domains/home/dto/home.dto";
import { HomePage } from "@/ui/features/home/HomePage";

export function PageTemplate({ data }: { data: HomePageDto }) {
  switch (data._type) {
    case "home":
      return <HomePage data={data} />;
    default:
      return notFound();
  }
}
