import { Link } from "react-router-dom";
import styles from "./WhiteLink.module.scss";

interface IWhiteLink {
  to: string;
  text: string;
  isUpperCase?: boolean;
}

const WhiteLink = ({ to, text, isUpperCase }: IWhiteLink) => {
  return (
    <Link to={to} className={styles.link}>
      <p className={isUpperCase ? styles.upperText : ""}>{text}</p>
      <div className={styles.bg}></div>
    </Link>
  );
};

export default WhiteLink;
