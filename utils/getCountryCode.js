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
};

const getCountryCodes = (nationality = "") => {
  return countryCodes[nationality.toLowerCase()];
};

export default getCountryCodes;
