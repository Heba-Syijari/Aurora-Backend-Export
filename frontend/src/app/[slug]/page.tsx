import { WebsiteData } from '@/data';
import { PagePreview } from '@/sections/preview/view';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export async function generateStaticParams() {
  const { pages } = WebsiteData.getInstance().getProject();

  return pages.map(({ slug }) => ({ slug }));
}

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;

  const { pages } = WebsiteData.getInstance().getProject();

  const page = pages.find((p) => p.slug === slug);

  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = params;

  const data = WebsiteData.getInstance();

  const { project, menus } = data.getData();

  const page = project.pages.find((p) => p.slug === slug);

  if (!page) return null;

  const mainPage = data.getMainPage();

  if (page.id === mainPage.id) {
    redirect('/');
  }

  return <PagePreview project={project} page={page} menus={menus} />;
}
