const countryCodes = {
  mexico: "MX",
  mexican: "MX",
  american: "US",
  "new zealand": "NZ",
  "south african": "ZA",
  english: "GB",
  australian: "AU",
  scottish: "GB",
  colombian: "CO",
  "united states": "US",
};

const getCountryCodes = (nationality = "") => {
  const nat = nationality || "United States";
  return countryCodes[nat.toLowerCase()];
};

export default getCountryCodes;
