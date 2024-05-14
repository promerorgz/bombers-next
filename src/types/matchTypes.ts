import { Image } from "./imageTypes";

export type Team = {
  id: number;
  name: string;
  division: "D1" | "D2";
  bio: string;
  location: string;
  created_at: string;
  updated_at: string;
  logo: Image;
};

export type MatchType = {
  id: number;
  date: string;
  home_score: string;
  preview: string;
  finished: boolean;
  away_score: string;
  division: "d1" | "d2";
  updates: string;
  home: Team;
  away: Team;
  slug: string;
  winner: Team;
  location: string;
  report: string;
  friendly: boolean;
  created_at: string;
  updated_at: string;
  image: Image;
};
