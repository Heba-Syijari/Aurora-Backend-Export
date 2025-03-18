import { IData, IPage, IProject } from '@/types/project';
import { readFileSync } from 'fs';
import path from 'path';

const json = readFileSync(path.resolve('src/data/data.json'));

export class WebsiteData {
  private static _instance?: WebsiteData;

  private readonly data: IData;

  private constructor() {
    this.data = JSON.parse(json.toString());
  }

  static getInstance(): WebsiteData {
    if (!this._instance) {
      this._instance = new WebsiteData();
    }

    return this._instance;
  }

  getData(): IData {
    const { menus, ...rest } = this.data;

    return { menus: menus || [], ...rest };
  }

  getProject(): IProject {
    const { project } = this.data;

    return project;
  }

  getMainPage(): IPage {
    const {
      project: { pages },
    } = this.data;

    pages.sort((a, b) => a.id - b.id);

    return pages[0];
  }
}
