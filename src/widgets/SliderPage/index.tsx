import styles from "./SliderPage.module.scss";
import sliderBg from "@/images/slider/sliderBg.jpg";
import slider1Img from "@/images/slider/slider1.jpg";
import slider2Img from "@/images/slider/slider2.jpg";
import slider3Img from "@/images/slider/slider3.jpg";
import slider4Img from "@/images/slider/slider4.jpg";
import slider5Img from "@/images/slider/slider5.jpg";
import slider6Img from "@/images/slider/slider6.jpg";
import Close from "@/shared/ui/Close/Close";
import { useRef } from "react";
import { handleScroll } from "./handleScroll";

const allSliderImg: string[] = [
  slider1Img,
  slider2Img,
  slider3Img,
  slider4Img,
  slider5Img,
  slider6Img,
];

const Slider = () => {
  const items = useRef<HTMLDivElement>(null);
  const indicators = useRef<HTMLDivElement>(null);

  const handleSlider = (index: number) => {
    if (items.current && indicators.current) {
      const allItems = items.current.children;

      const allArray: ChildNode[] = [];
      indicators.current.childNodes.forEach((item) => {
        allArray.push(item);
      });

      const elems = Array.prototype.slice.call(allArray);

      elems.map((item) => {
        item.classList.remove(styles.active);
      });
      indicators.current.children[index].classList.add(styles.active);

      items.current.scrollTo({
        left: allItems[index].scrollWidth * index + 30 * index,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className={styles.sliderPage}>
      <img src={sliderBg} className={styles.bg} />
      <div className={styles.content}>
        <h2 className={styles.title}>ZPRs</h2>
        <p className={styles.description}>зоны распределения</p>
        <div className={styles.slider}>
          <div
            className={styles.items}
            ref={items}
            onScroll={() => handleScroll(items, indicators, styles)}
          >
            {allSliderImg.map((item, index) => (
              <div
                className={styles.sliderItem}
                key={index}
                id={`slide-${index}`}
                onClick={(event) => {
                  event.currentTarget.parentElement?.classList.toggle(
                    styles.overflow,
                  );
                  document.body.classList.toggle("overflow");
                  event.currentTarget.classList.toggle(styles.active);
                }}
              >
                <div className={styles.close}>
                  <Close to='#' color='black' />
                </div>
                <img src={item} className={styles.img} draggable={false} />
                <div className={styles.contentText}>
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
          <div className={styles.indicators} ref={indicators}>
            {allSliderImg.map((_, index) => (
              <button
                type='button'
                className={
                  index === 0
                    ? `${styles.indicator} ${styles.active}`
                    : styles.indicator
                }
                key={index}
                onClick={() => handleSlider(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
