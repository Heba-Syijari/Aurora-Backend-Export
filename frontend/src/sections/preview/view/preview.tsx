'use client';

import { IMenu } from '@/types/menu';
import { IPage, IProject } from '@/types/project';
import { Box } from '@mui/material';
import { useCallback, useMemo } from 'react';
import ComponentFactory from '../components/factory';
import HeaderOne from '../components/header/header-one';
import { filterHeaderMenu } from '../components/header/utils';
import { ComponentVariation } from '../types';

type PagePreviewProps = {
  project: IProject;
  page: IPage;
  menus: IMenu[];
};

export default function PagePreview({ project, page, menus }: PagePreviewProps) {
  const headerMenu = useCallback(() => filterHeaderMenu({ menus, page }), [menus, page]);
  return (
    <Box>
      <HeaderOne
        logoType={project.settings.logoType}
        logoValue={project.settings.logoValue}
        menus={headerMenu()}
      />

      <Page project={project} page={page} menus={menus} />
    </Box>
  );
}

type PageProps = {
  project: IProject;
  page: IPage;
  menus: IMenu[];
};

export function Page({ project, page, menus }: PageProps) {
  const components = useMemo(() => {
    const pageComponents = project.pages.find((p) => p.id === page.id)?.components ?? [];

    const heroComponent = pageComponents.find((c) => c.component.type === ComponentVariation.HERO);
    const footerComponents = pageComponents.filter(
      (c) => c.component.type === ComponentVariation.FOOTER
    );

    const sortedComponents = pageComponents
      .filter(
        (c) =>
          c.component.type !== ComponentVariation.HERO &&
          c.component.type !== ComponentVariation.FOOTER
      )
      .sort((a, b) => a.order - b.order);

    return [
      ...(heroComponent ? [heroComponent] : []),
      ...sortedComponents,
      ...(footerComponents.length > 0 ? footerComponents : []),
    ];
  }, [page.id, project.pages]);
  return (
    <Box
      component="main"
      sx={{
        bgcolor: 'background.neutral',
      }}
    >
      {components.map((item, i) => (
        <Box key={i} id={item.component.type}>
          <ComponentFactory
            type={item.component.type}
            name={item.component.name}
            data={item.data}
            project={project}
            pageId={page.id}
            menus={menus}
          />
        </Box>
      ))}
    </Box>
  );
}
