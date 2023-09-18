import { useParams } from "react-router-dom";
import styles from "./PhotoPage.module.scss";
import { ninjaPhotos } from "@/data/photos";
import Arrow, { ArrowDirection } from "@/shared/ui/Arrow";
import Close from "@/shared/ui/Close/Close";

interface IPhotoPageProps {
  single?: boolean;
}

const PhotoPage = ({ single }: IPhotoPageProps) => {
  const { id } = useParams();
  if (single) {
    return (
      <div className={styles.photoPage}>
        <p className={styles.text}>{ninjaPhotos[0].text1}</p>
        <img src={ninjaPhotos[0].photo} alt='Photo' className={styles.img} />
        <p className={styles.text2}>{ninjaPhotos[0].text2}</p>
        {ninjaPhotos[0].text3 && (
          <p className={styles.text3}>{ninjaPhotos[0].text3}</p>
        )}
        <div className={styles.footer}>
          <Arrow to={`/photo/1`} direction={ArrowDirection.next} />
        </div>
      </div>
    );
  } else if (id) {
    return (
      <div className={`${styles.photoPage} ${styles.photoSinglePage}`}>
        <p className={styles.text}>{ninjaPhotos[+id].text1}</p>
        <img src={ninjaPhotos[+id].photo} alt='Photo' className={styles.img} />
        <p className={styles.text2}>{ninjaPhotos[+id].text2}</p>
        {ninjaPhotos[+id].text3 && (
          <p className={styles.text3}>{ninjaPhotos[+id].text3}</p>
        )}
        <div className={styles.footer}>
          {!ninjaPhotos[+id + 1] && <Close color='black' to='/' />}
          {ninjaPhotos[+id + 1] && (
            <Arrow to={`/photo/${+id + 1}`} direction={ArrowDirection.next} />
          )}
        </div>
      </div>
    );
  }
};

export default PhotoPage;
