const countryCodes = {
  mexico: "MX",
  mexican: "MX",
  american: "US",
  "new zealand": "NZ",
  "south africa": "ZA",
  "south african": "ZA",
  england: "GB",
  english: "GB",
  australia: "AU",
  australian: "AU",
  scotland: "SCO",
  scottish: "SCO",
  colombia: "CO",
  colombian: "CO",
  "united states": "US",
};

const getCountryCodes = (nationality = "") => {
  const nat = nationality || "United States";
  return countryCodes[nat.toLowerCase()];
};

export default getCountryCodes;
