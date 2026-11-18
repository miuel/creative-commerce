import { notFound } from "next/navigation";
import { loadHomePage } from "@/domains/home/repository/home.repository";
import { PageTemplate } from "@/ui/components/PageTemplate/PageTemplate";

export default async function Page({ params }: PageProps<"/[[...slug]]">) {
  const { slug } = await params;

  if (slug?.length) {
    notFound();
  }

  const data = await loadHomePage();

  if (!data) {
    notFound();
  }

  return <PageTemplate data={data} />;
}
