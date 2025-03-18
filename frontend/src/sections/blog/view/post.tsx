'use client';

import HeaderOne from '@/sections/preview/components/header/header-one';
import { IMenu } from '@/types/menu';
import { IPost, IProject } from '@/types/project';
import { PostHeroSection } from '../components/hero-section';
import { PostsList } from '../components/posts-list';
import { PostTextSection } from '../components/text-section';

type Props = {
  project: IProject;
  post: IPost;
  relatedPosts: IPost[];
  menus: IMenu[];
};

export function PostView({ post, relatedPosts, project, menus }: Props) {

  return (
    <>
      <HeaderOne
        logoType={project.settings.logoType}
        logoValue={project.settings.logoValue}
        menus={menus}
      />

      <main>
        <PostHeroSection
          title={post.title}
          description={post.description}
          imageURL={post.imagePath}
          createdAt={post.createdAt}
        />

        <PostTextSection body={post.body} />

        <PostsList title="More Posts" posts={relatedPosts} />
      </main>
    </>
  );
}
