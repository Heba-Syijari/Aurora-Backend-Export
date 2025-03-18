import { PostItem } from '@/sections/common/posts';
import { IPost } from '@/types/project';

type Props = {
  post: IPost;
  config: { titleTextColor: string; descriptionTextColor: string };
};

export default function BlogsOneItem(props: Props) {
  return <PostItem {...props} />;
}
