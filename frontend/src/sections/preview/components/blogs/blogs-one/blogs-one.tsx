import { paths } from '@/routes/paths';
import { PostButton } from '@/sections/common/posts';
import { TextData } from '@/sections/preview/types';
import { IPost } from '@/types/project';
import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import { IPostConfig } from '../types';
import BlogsOneItem from './blogs-one-item';

type BlogsOneProps = {
  post: IPostConfig;
  posts: IPost[];
  title: TextData;
  description: TextData;
};

export default function BlogsOne({ post: postConfig, posts, title, description }: BlogsOneProps) {
  const gridMdItemsPerRowCount = 12 / Math.min(Math.max(postConfig.itemsPerRowCount, 2), 4);
  const maxPostsCount = Math.max(Math.min(posts.length, postConfig.itemsCount), 2);

  return (
    <Box sx={{ py: 11 }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Chip label="Blogs" />
        </Box>

        <Stack spacing={2.5} alignItems="center" textAlign="center">
          <Typography
            variant="h2"
            fontWeight={700}
            color={title.color}
            letterSpacing="-0.02em"
            maxWidth={970}
          >
            {title.text}
          </Typography>

          <Typography variant="body1" fontSize={20} color={description.color} maxWidth={920}>
            {description.text}
          </Typography>
        </Stack>

        <Box sx={{ mt: 8 }}>
          <Grid container spacing={4}>
            {posts.slice(0, maxPostsCount).map((post) => (
              <Grid key={post.id} item xs={12} sm={6} md={gridMdItemsPerRowCount}>
                <BlogsOneItem post={post} config={postConfig} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <PostButton text="View all" link={paths.blog} />
        </Box>
      </Container>
    </Box>
  );
}
