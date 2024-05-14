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
  mexico: { nationality: "MX" },
  mexican: { nationality: "MX" },
  american: { nationality: "USA" },
  "new zealand": { nationality: "NZ" },
  "south africa": { nationality: "SA" },
  "south african": { nationality: "SA" },
  england: { nationality: "ENG" },
  english: { nationality: "ENG" },
  australia: { nationality: "AUS" },
  australian: { nationality: "AUS" },
  scotland: { nationality: "SCOTLAND" },
  scottish: { nationality: "SCOTLAND" },
  colombia: { nationality: "COLOMBIA" },
  colombian: { nationality: "COLOMBIA" },
  "united states": { nationality: "USA" },
  spanish: { nationality: "SPAIN" },
  spain: { nationality: "SPAIN" },
};

const flags = {
  MX: "🇲🇽",
  USA: "🇺🇸",
  NZ: "🇳🇿",
  SA: "🇿🇦",
  ENG: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
  AUS: "🇦🇺",
  SCOTLAND: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
  COLOMBIA: "🇨🇴",
  SPAIN: "🇪🇸",
};

export const getNationality = (nationality) => {
  const nat = nationality || "United States";
  return countryCodes[nat.toLowerCase()]?.nationality;
};

export const getFlag = (nationality = "") => {
  return flags[nationality];
};
