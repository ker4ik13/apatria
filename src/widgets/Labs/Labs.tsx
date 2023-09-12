import WhiteTitle from "@/shared/ui/WhiteTitle/WhiteTitle";
import styles from "./Labs.module.scss";
import labs1img from "@/images/labs/1.jpeg";
import labs2img from "@/images/labs/2.jpeg";
import labs3img from "@/images/labs/3.jpeg";
import labs4img from "@/images/labs/4.jpeg";
import labs5img from "@/images/labs/5.jpeg";
import labs6img from "@/images/labs/6.jpeg";
import labs7img from "@/images/labs/7.jpeg";

const Labs = () => {
  return (
    <div className={styles.labsPage}>
      <WhiteTitle title='Labs' />
      <div className={styles.variables}>
        <a href='#labs1' className={styles.variable}>
          <img src={labs1img} className={styles.img} />
        </a>
        <a href='#labs2' className={styles.variable}>
          <img src={labs2img} className={styles.img} />
        </a>
        <a href='#labs3' className={styles.variable}>
          <img src={labs3img} className={styles.img} />
        </a>
        <a href='#labs4' className={styles.variable}>
          <img src={labs4img} className={styles.img} />
        </a>
        <a href='#labs5' className={styles.variable}>
          <img src={labs5img} className={styles.img} />
        </a>
        <a href='#labs6' className={styles.variable}>
          <img src={labs6img} className={styles.img} />
        </a>
      </div>
    </div>
  );
};

export default Labs;
