import { IMenu } from '@/types/menu';
import { ComponentVariation, IPage } from '@/types/project';

export function getMenuTargetURL(menu: IMenu): string {
  if (menu.pageSlug) return `/${menu.pageSlug}`;

  if (menu.link) return menu.link;
  if (menu.section) return `#${menu.section}`;
  return '#';
}

export function filterHeaderMenu({ menus, page }: { page: IPage; menus: IMenu[] }) {
  if (!page) return [];

  const currentPageComponents = page.components.map((comp) => comp.component.type);

  return menus.filter(
    ({ parentId, place, section }) =>
      !parentId &&
      place === 'header' &&
      currentPageComponents.includes(section as ComponentVariation)
  );
}
