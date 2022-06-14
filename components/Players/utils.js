import { groupBy, isNumber } from "lodash";

export const matches = (string, match) => {
  return string.toLowerCase().startsWith(match.toLowerCase());
};

export const splitForwardsAndBacks = (players) =>
  groupBy(players, ({ position }) => (position >= 9 ? "backs" : "forwards"));

export const getPosition = (position) => {
  return isNumber(position)
    ? {
        1: "Loose Head Prop",
        2: "Hooker",
        3: "Tight Head Prop",
        4: "Lock",
        5: "Lock",
        6: "Flanker",
        7: "Flanker",
        8: "8",
        9: "Scrum-half",
        10: "Fly-half",
        11: "Wing",
        12: "Inside Center",
        13: "Outside Center",
        14: "Wing",
        15: "Fullback",
      }[position]
    : position;
};

export const countryCodes = {
  mexico: "🇲🇽",
  mexican: "🇲🇽",
  american: "🇺🇸",
  "new zealand": "🇳🇿",
  "south africa": "🇿🇦",
  "south african": "🇿🇦",
  england: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
  english: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
  australia: "🇦🇺",
  australian: "🇦🇺",
  scotland: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
  scottish: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
  colombia: "🇨🇴",
  colombian: "🇨🇴",
  "united states": "🇺🇸",
  spanish: "🇪🇸",
  spain: "🇪🇸",
};

export const getFlag = (nationality = "") => {
  const nat = nationality || "United States";
  return countryCodes[nat.toLowerCase()];
};
