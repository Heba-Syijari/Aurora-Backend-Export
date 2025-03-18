import Image from '@/components/image';
import TextMaxLine from '@/components/text-max-line';
import { paths } from '@/routes/paths';
import { IPost } from '@/types/project';
import { Box, Stack } from '@mui/material';
import { PostButton } from './post-button';

type PostItemProps = {
  post: IPost;
  config: { titleTextColor: string; descriptionTextColor: string };
  height?: number;
};

export default function PostItem({ post, config, height }: PostItemProps) {
  return (
    <Box>
      <Stack spacing={3}>
        <Image
          alt={post.imageAlt}
          src={post.imagePath}
          sx={{
            height: height || 312,
            borderRadius: '6px',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />

        <Stack spacing={2} alignItems="flex-start">
          <TextMaxLine variant="h4" color={config.titleTextColor}>
            {post.title}
          </TextMaxLine>

          <TextMaxLine variant="body1" fontSize={18} color={config.descriptionTextColor}>
            {post.description}
          </TextMaxLine>

          <PostButton text="Read post" link={paths.postDetails(post.id, post.slug)} />
        </Stack>
      </Stack>
    </Box>
  );
}
