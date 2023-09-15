import styles from "./SliderPage.module.scss";
import sliderBg from "@/images/slider/sliderBg.png";
import slider1Img from "@/images/slider/slider1.png";
import slider2Img from "@/images/slider/slider2.png";
import slider3Img from "@/images/slider/slider3.png";
import slider4Img from "@/images/slider/slider4.png";
import slider5Img from "@/images/slider/slider5.png";
import slider6Img from "@/images/slider/slider6.png";

const allSliderImg: string[] = [
  slider1Img,
  slider2Img,
  slider3Img,
  slider4Img,
  slider5Img,
  slider6Img,
];

const Slider = () => {
  return (
    <div className={styles.sliderPage}>
      <img src={sliderBg} className={styles.bg} />
      <div className={styles.content}>
        <h2 className={styles.title}>ZPRs</h2>
        <p className={styles.description}>зоны распределения</p>
      </div>
    </div>
  );
};

export default Slider;
