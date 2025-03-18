'use client';

import HeaderOne from '@/sections/preview/components/header/header-one';
import { IMenu } from '@/types/menu';
import { IPost, IProject } from '@/types/project';
import { Box, Stack, Typography } from '@mui/material';
import { PostsList } from '../components/posts-list';

type Props = {
  project: IProject;
  posts: IPost[];
  menus: IMenu[];
};

export function PostsView({ posts, project, menus }: Props) {
  const { name} = project;

  return (
    <>
      <HeaderOne
        logoType={project.settings.logoType}
        logoValue={project.settings.logoValue}
        menus={menus}
      />

      <main>
        <Stack spacing={6}>
          <Box sx={{ py: 6, mt: 10 }}>
            <Stack spacing={2.5} alignItems="center" textAlign="center">
              <Typography variant="h2" fontWeight={700} letterSpacing="-0.02em" maxWidth={970}>
                Blog
              </Typography>

              <Typography variant="body1" fontSize={20} color="text.secondary" maxWidth={920}>
                Insights from {name}
              </Typography>
            </Stack>
          </Box>

          <PostsList posts={posts} />
        </Stack>
      </main>
    </>
  );
}
