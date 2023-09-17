import styles from "./SliderPage.module.scss";
import sliderBg from "@/images/slider/sliderBg.jpg";
import slider1Img from "@/images/slider/slider1.jpg";
import slider2Img from "@/images/slider/slider2.jpg";
import slider3Img from "@/images/slider/slider3.jpg";
import slider4Img from "@/images/slider/slider4.jpg";
import slider5Img from "@/images/slider/slider5.jpg";
import slider6Img from "@/images/slider/slider6.jpg";

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
        <div className={styles.slider}>
          <div className={styles.items}>
            {allSliderImg.map((item, index) => (
              <div
                className={styles.sliderItem}
                key={index}
                id={`slide-${index + 1}`}
                onClick={(event) => {
                  event.currentTarget.parentElement?.classList.toggle(
                    styles.overflow,
                  );
                  document.body.classList.toggle("overflow");
                  event.currentTarget.classList.toggle(styles.active);
                }}
              >
                <img src={item} className={styles.img} draggable={false} />
                <div className={styles.content}>
                  <p className={styles.text}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Rerum veritatis, non, eveniet laudantium nesciunt dolore
                    dignissimos sed provident architecto aspernatur magnam
                    accusantium itaque qui reiciendis corrupti dolorum eaque nam
                    iusto! Lorem ipsum, dolor sit amet consectetur adipisicing
                    elit. Rerum veritatis, non, eveniet laudantium nesciunt
                    dolore dignissimos sed provident architecto aspernatur
                    magnam accusantium itaque qui reiciendis corrupti dolorum
                    eaque nam iusto! iusto! Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Rerum veritatis, non, eveniet
                    laudantium nesciunt dolore dignissimos sed provident
                    architecto aspernatur magnam accusantium itaque qui
                    reiciendis corrupti dolorum eaque nam iusto!
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
