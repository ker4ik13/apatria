import styles from "./Preloader.module.scss";
import loading from "@/images/loading.gif";

interface IPreloader {
  notFullHeight?: boolean;
}

const Preloader = ({ notFullHeight }: IPreloader) => {
  if (notFullHeight) {
    return (
      <h2 className={styles.myPreloader}>
        <img src={loading} alt='Loading' className={styles.img} />
      </h2>
    );
  }
  return (
    <h2 className={styles.preloader}>
      <img src={loading} alt='Loading' className={styles.img} />.
    </h2>
  );
};

export default Preloader;
