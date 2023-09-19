import WhiteTitle from "@/shared/ui/WhiteTitle/WhiteTitle";
import styles from "./Labs.module.scss";
import labs1img from "@/images/labs/1.jpeg";
import labs2img from "@/images/labs/2.jpeg";
import labs3img from "@/images/labs/3.jpeg";
import labs4img from "@/images/labs/4.jpeg";
import labs5img from "@/images/labs/5.jpeg";
import labs6img from "@/images/labs/6.jpeg";
// import labs7img from "@/images/labs/7.jpeg";
const allLabs: string[] = [
  labs1img,
  labs2img,
  labs3img,
  labs4img,
  labs5img,
  labs6img,
];

const Labs = () => {
  return (
    <div className={styles.labsPage} id='labs'>
      <WhiteTitle title='Labs' />
      <div className={styles.variables}>
        {allLabs.map((lab, index) => (
          <a href={`#labs${index + 1}`} className={styles.variable} key={index}>
            <img src={lab} className={styles.img} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Labs;
