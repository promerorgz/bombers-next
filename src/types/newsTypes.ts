import { Image } from "./imageTypes";

export type Author = {
  id: number;
  name: string;
  email: string | null;
  created_at: string;
  updated_at: string;
  picture: Image;
};

export type Category = {
  id: number;
  name: string;
  slug: string;
  created_at: string;
  updated_at: string;
};

export type Article = {
  author: Author;
  category: Category;
  comments: any;
  content: string;
  created_at: string;
  description: string;
  highlight: boolean;
  id: number;
  image: Image;
  likes: number;
  publishedAt: string;
  slug: string;
  status: string;
  tagline: string | null;
  title: string;
  uid: string;
  updated_at: string;
};
