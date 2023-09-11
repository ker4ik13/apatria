import styles from "./Labs.module.scss";

const Labs = () => {
  return (
    <div className={styles.labsPage}>
      <h1 className={styles.title}>Labs</h1>
      <div className={styles.variables}>
        <a href='#' className={styles.variable}>
          <img src='#' className={styles.img} />
        </a>
        <a href='#' className={styles.variable}>
          <img src='#' className={styles.img} />
        </a>
        <a href='#' className={styles.variable}>
          <img src='#' className={styles.img} />
        </a>
        <a href='#' className={styles.variable}>
          <img src='#' className={styles.img} />
        </a>
        <a href='#' className={styles.variable}>
          <img src='#' className={styles.img} />
        </a>
        <a href='#' className={styles.variable}>
          <img src='#' className={styles.img} />
        </a>
      </div>
    </div>
  );
};

export default Labs;
