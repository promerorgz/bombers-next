export const formatDate = (date = "", format) => {
    const [y, m, d] = date?.split("-").map((d) => Number(d));
  
    const dateObject = new Date(date).toLocaleDateString("en-US", {
      dateStyle: "long",
      timeZone: "UTC",
    });
    const diff = Date.now() - new Date(y, m, d).getTime();
    const ageObject = new Date(diff);
    const age = Math.abs(ageObject.getUTCFullYear() - 1970);
  
    return {
      long: dateObject,
      age,
    }[format];
  };
  
  export default formatDate;