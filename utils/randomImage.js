function randomImage() {
  const images = [
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
  ];
  const index = Math.round(Math.random() * images.length);
  return images[index];
}

export default randomImage;
