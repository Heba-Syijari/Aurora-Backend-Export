import { IIntellectualProperty } from './intellectual-property';
import { IMedia } from './media';
import { IMenu } from './menu';
import { ContentTypeVariationType } from './website-content-type';

export interface IData {
  project: IProject;
  menus: IMenu[];
  measurementId?: string;
  adamConfig?: IAdamConfig;
}

export type IProjectTargetType = {
  title: string;
  description: string;
  imageUrl: string;
};

export type IProject = {
  id: string;
  name: string;
  purpose: string;
  description: string;
  contentType: ContentTypeVariationType;
  keywords: string[];
  intellectualPropertyInfo: IIntellectualProperty;
  similarWebsites: string[];
  websiteLocation: string;
  mainLanguage: string;
  audience: IProjectAudience;
  settings: IProjectSettings;
  pages: IPage[];
  posts: IPost[];
  media: IMedia[];
  contactMessages?: IContactMessage[];
};

export interface IProjectAudience {
  age: string[];
  knowledge: string[];
  gender: string[];
  language: string[];
  organizations?: string[];
  countries?: string[];
}

export interface IPalette {
  primary: string;
  secondary: string;
  neutral: string;
  titles: string;
  subTitles: string;
}

export interface IProjectSettings {
  projectId: string;
  logoType: 'text' | 'image';
  logoValue: string;
  fontFamily: string;
  palette: IPalette;
}

export interface IContactMessage {
  id: number;
  name: string;
  email: string;
  description: string;
  createdAt: string;
}

export interface IPost {
  id: number;
  title: string;
  slug: string;
  description: string;
  body: string;
  imagePath: string;
  imageAlt?: string;
  createdAt: string;
}

export interface IPage {
  id: number;
  title: string;
  description: string;
  slug?: string;
  components: IPageComponent[];
}

export interface IPageComponent {
  id: number;
  pageId: number;
  order: number;
  data: any;
  component: IComponent;
}

export interface IComponent {
  id: number;
  image: string;
  name: string;
  type: ComponentVariationType;
}

// ------ Component type ------------------------

export enum ComponentVariation {
  HERO = 'HERO',
  ABOUT = 'ABOUT',
  FAQ = 'FAQ',
  BLOGS = 'BLOGS',
  IMPACT = 'IMPACT',
  VIDEO = 'VIDEO',
  IMPORTANCE = 'IMPORTANCE',
  SPECIAL_TIMES = 'SPECIAL_TIMES',
  CONTACT = 'CONTACT',
  TEAM = 'TEAM',
  FEATURES = 'FEATURES',
  GALLERY = 'GALLERY',
  FOOTER = 'FOOTER',
  PRIVACY_POLICY = 'PRIVACY_POLICY',
  TERMS_AND_SERVICES = 'TERMS_AND_SERVICES',
  COPY_WRITE = 'COPY_WRITE',
  SUBSCRIPTION = 'SUBSCRIPTION',
  HOW_IT_WORKS = 'HOW_IT_WORKS',
  SLIDER = 'SLIDER',
  OUR_CLIENTS = 'OUR_CLIENTS',
  OUR_SOLUTION = 'OUR_SOLUTION',
  MWSSAGE_WITH_ACTION = 'MESSAGE_WITH_ACTION',
}

export type ComponentVariationType = `${ComponentVariation}`;

// ------ Content type ------------------------

export type IProjectContentType = {
  id: number;
  name: string;
  parentId?: number | null;
};

// ------ Plugins ------------------------

export const supportedPlugins = ['IADAM', 'ARK'] as const;

export type PluginsVariation = (typeof supportedPlugins)[number];

export type IAdamConfig = IAdamWidgetConfig & {
  clientId: string;
  source: string;
};

export interface IAdamWidgetConfig {
  fontSize: number;
  primaryColor: string;
  secondaryColor: string;
}
