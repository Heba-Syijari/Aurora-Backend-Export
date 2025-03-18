import { WebsiteData } from '@/data';
import { PostView } from '@/sections/blog/view';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const { posts } = WebsiteData.getInstance().getProject();

  if (!posts || posts.length === 0) return  [ { slug: "/"} ]
  return posts.map((post) => {
    const slug = `${post.id}-${post.slug}`;

    return { slug };
  });
}

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;

  const { posts } = WebsiteData.getInstance().getProject();

  const postIndex = posts.findIndex(({ id }) => id === parseInt(slug, 10));

  if (postIndex < 0) return {};

  const post = posts[postIndex];

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = params;

  const { project, menus } = WebsiteData.getInstance().getData();

  const posts = project.posts || [];

  const postIndex = posts.findIndex(({ id }) => id === parseInt(slug, 10));

  if (postIndex < 0) return null;

  const post = posts[postIndex];

  const relatedPosts = posts.slice(0, postIndex).concat(posts.slice(postIndex + 1));

  return <PostView post={post} relatedPosts={relatedPosts} project={project} menus={menus} />;
}
