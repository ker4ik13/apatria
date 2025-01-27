import { Link } from "react-router-dom";
import styles from "./Arrow.module.scss";
import arrow from "@/images/icons/arrow.svg";

export enum ArrowDirection {
  back = "back",
  next = "next",
}

interface IArrow {
  to: string;
  direction: ArrowDirection;
  onClick?: () => void;
}

const Arrow = ({ to, direction, onClick }: IArrow) => {
  if (direction === ArrowDirection.back) {
    return (
      <Link className={styles.back} to={to}>
        <img src={arrow} className={styles.arrow} />
        <span className={styles.bg}></span>
      </Link>
    );
  }
  return (
    <Link className={styles.next} to={to} {...onClick}>
      <img src={arrow} className={styles.arrow} />
      <span className={styles.bg}></span>
    </Link>
  );
};

export default Arrow;
