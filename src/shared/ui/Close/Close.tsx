import { Link } from "react-router-dom";
import styles from "./Close.module.scss";

interface IClose {
  color: string;
  to: string;
}

const Close = ({ color, to }: IClose) => {
  if (color === "white") {
    return <Link to={to} className={styles.closeWhite}></Link>;
  }
  if (color === "black") {
    return <Link to={to} className={styles.closeBlack}></Link>;
  }
};

export default Close;
