import { Image } from "./imageTypes";

export type PageLink = {
  display: string;
  url: string;
  card: boolean;
  link: string;
  title: string;
};
export type Block = {
  cards?: boolean;
  content?: string;
  display?: boolean;
  id: number;
  image?: Image;
  imagePosition?: string;
  links?: Array<PageLink>;
  subtitle?: string;
  title?: string;
  __component: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  subTitle?: string;
  background?: Image;
  buttons?: Array<any>;
  contentLink?: string;
  field: Field[];
};

export type Field = {
  type: string;
  placeholder: string;
  name: string;
  initialValue: any;
};
