const getPosition = (position) => {
  return {
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
  }[position];
};

export default getPosition;
