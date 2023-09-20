import styles from "./PhotoPage.module.scss";
import { ninjaPhotos } from "@/data/photos";
import { useRef } from "react";
import { handleIndicators } from "@/features/handleIndicators";
import { handleScrollPhotos } from "@/features/handleScrollPhotos";

const PhotoPage = () => {
  const items = useRef<HTMLDivElement>(null);
  const indicators = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.photoPage}>
      <div className={styles.slider}>
        <div
          className={styles.items}
          ref={items}
          onScroll={() => handleScrollPhotos(items, indicators, styles)}
        >
          {ninjaPhotos.map((item, index) => (
            <div className={styles.sliderItem} key={index}>
              <p className={styles.text}>{item.text1}</p>
              <img src={item.photo} alt='Photo' className={styles.img} />
              <p className={styles.text2}>{item.text2}</p>
              {item.text3 && <p className={styles.text3}>{item.text3}</p>}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.indicators} ref={indicators}>
        {ninjaPhotos.map((_, index) => (
          <button
            type='button'
            className={
              index === 0
                ? `${styles.indicator} ${styles.active}`
                : styles.indicator
            }
            key={index}
            onClick={() =>
              handleIndicators({ index, indicators, items, styles })
            }
          ></button>
        ))}
      </div>
    </div>
  );
};

export default PhotoPage;
