import {
  format,
  formatDistance,
  formatRelative,
  getHours,
  getMinutes,
  subDays,
} from "date-fns";
class Utils {
  getAge(dob: string): string {
    return formatDistance(subDays(new Date(), Date.parse(dob)), new Date());
  }

  getLongDate(date: Date) {
    const time = new Date(date);
    return [
      new Date(date).toLocaleDateString("en-US", {
        dateStyle: "long",
        timeZone: "UTC",
      }),
      format(time, "p"),
    ];
  }

  isAfterToday(date: string): boolean {
    const dateToCompare = new Date(date).getTime();
    const today = new Date().getTime();
    return today <= dateToCompare;
  }
  generateRandomImage() {
    return [
      "DSC_0271.JPG",
      "DSC_0462.JPG",
      "DSC_0545.JPG",
      "DSC_0578.JPG",
      "DSC_0885.JPG",
      "coach_pic1.jpeg",
      "coach_pic2.jpeg",
      "d1_pic.jpeg",
      "d1_team.jpeg",
      "d3TeamPhoto.JPG",
      "default",
      "jk_legends_pic.jpeg",
      "legends5.jpeg",
      "legends_3.jpeg",
      "legends_4.jpeg",
      "legends_pic2.jpeg",
      "logos",
      "mcb-hero.jpeg",
      "nationals17.jpg",
    ][Math.round(Math.random() * 19)];
  }
}

export default Utils;
