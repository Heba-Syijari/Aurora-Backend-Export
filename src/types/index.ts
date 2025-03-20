export interface IProject {
  id: string;
  [key: string]: any;
}

export interface IMenu {
  id: number;
  label: string;
  parentId?: number;
  link?: string;
  pageId?: number;
  children?: IMenu[];
  pageSlug?: string;
}

export interface IData {
  project: IProject;
  menus: IMenu[];
  measurementId?: string;
}
