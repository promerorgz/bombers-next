export const isAfterToday = (date) => {
  const dateToCompare = new Date(date).getTime();
  const today = new Date().getTime();
  return today <= dateToCompare;
};
