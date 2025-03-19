import { IMenu } from '@/types/menu';

export function getMenuTargetURL(menu: IMenu): string {
  if (menu.pageSlug) return `/${menu.pageSlug}`;

  if (menu.link) return menu.link;

  if (menu.section) return `#${menu.section}`;
  return '#';
}
