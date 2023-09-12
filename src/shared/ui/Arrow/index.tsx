import { Link } from "react-router-dom";
import styles from "./Arrow.module.scss";
import arrow from "@/images/icons/arrow.svg";

interface IArrow {
  to: string;
}

const Arrow = ({ to }: IArrow) => {
  return (
    <Link className={styles.back} to={to}>
      <img src={arrow} className={styles.arrow} />
      <span className={styles.bg}></span>
    </Link>
  );
};

export default Arrow;
