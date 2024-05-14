import { Image } from "./imageTypes";

export type Player = {
  first_name: string;
  last_name: string;
  picture: Image;
  division: string;
  slug: string;
  position: number;
};
