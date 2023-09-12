import { Link } from "react-router-dom";
import styles from "./WhiteLink.module.scss";

interface IWhiteLink {
  to: string;
  text: string;
}

const WhiteLink = ({ to, text }: IWhiteLink) => {
  return (
    <Link to={to} className={styles.link}>
      <p>{text}</p>
      <div className={styles.bg}></div>
    </Link>
  );
};

export default WhiteLink;
