import { Metadata } from "next";
import { WebsiteData } from "@/data";
import { PagePreview } from "@/sections/preview/view";

export async function generateMetadata(): Promise<Metadata> {
  const data = WebsiteData.getInstance();

  const page = data.getMainPage();

  return {
    title: page.title,
    description: page.description,
  };
}

export default async function Page() {
  const data = WebsiteData.getInstance();

  const { project, menus } = data.getData();

  const page = data.getMainPage();

  return <PagePreview project={project} page={page} menus={menus} />;
}
