import { IPalette } from '@/types/project';

export type Project = {
  id: string;
  name: string;
  purpose: string;
  introduction: string;
  description: string;
  keywords: string[];
  similarWebsites: string[];
  websiteLocation: string;
  mainLanguage: string;
  settings: ProjectSettings;
  pages: Page[];
};

export type LogoType = 'text' | 'image';

export type ProjectSettings = {
  projectId: string;
  logoType: LogoType;
  logoValue: string;
  fontFamily: string;
  palette: IPalette;
};

export type Page = {
  id: number;
  title: string;
  description: string;
  components: PageComponent[];
};

export type PageComponent = {
  id: number;
  pageId: number;
  order: number;
  data: any;
  component: Component;
};

export type Component = {
  id: number;
  image: string;
  name: string;
  type: ComponentVariationType;
};

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
}

export type ComponentVariationType = `${ComponentVariation}`;

// ----- Button Data ----------------------------

export type ButtonData = {
  text: string;
  linkTo: string;
  color: string;
  icon: string;
  backgroundColor: string;
};

// ----- Text Data -------------------------------

export type TextData = {
  text: string;
  color: string;
};

// ----- Image Data -------------------------------

export type ImageData = {
  url: string;
  alt: string;
};

// ----- Video Data -------------------------------

export type VideoData = string;

// ----- Item Metadata -------------------------------

export type ItemMetadata = {
  itemType: string;
  sectionType: string;
};
