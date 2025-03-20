export enum IntellectualPropertyVariation {
  GENERAL = 'GENERAL',
  PERSONAL = 'PERSONAL',
  ORGANIZATIONAL = 'ORGANIZATIONAL',
}

export type IntellectualPropertyVariationType = `${IntellectualPropertyVariation}`;

export type IIntellectualProperty =
  | {
      type: `${IntellectualPropertyVariation.GENERAL}`;
      contactEmail: string;
      relatedLinks: string[];
    }
  | {
      type: `${IntellectualPropertyVariation.PERSONAL}`;
      bio: string;
      contactNumber: string;
      contactEmail: string;
      relatedLinks: string[];
    }
  | {
      type: `${IntellectualPropertyVariation.ORGANIZATIONAL}`;
      about: string;
      location: string;
      contactNumber: string;
      contactEmail: string;
      relatedLinks: string[];
    };
