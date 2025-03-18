import { IPost } from '@/types/project';
import dynamic from 'next/dynamic';
import { BlogsComponentName, BlogsComponentNameType } from './types';

const BlogsOne = dynamic(() => import('./blogs-one'), { ssr: false });

type BlogsFactoryProps = {
  name: BlogsComponentNameType;
  data: any;
  posts: IPost[];
};

export default function BlogsFactory({ name, data, ...rest }: BlogsFactoryProps) {
  switch (name) {
    case BlogsComponentName.BLOGS_ONE:
      return <BlogsOne {...data} {...rest} />;

    case BlogsComponentName.BLOGS_TWO:
    default:
      return null;
  }
}
