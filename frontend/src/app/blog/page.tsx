import { WebsiteData } from '@/data';
import { PostsView } from '@/sections/blog/view';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const data = WebsiteData.getInstance();

  const page = data.getMainPage();

  return {
    title: 'Blogs',
    description: page.description,
  };
}

export default async function Page() {
  const { project, menus } = WebsiteData.getInstance().getData();

  const posts = project.posts || [];

  return <PostsView posts={posts} project={project} menus={menus} />;
}
