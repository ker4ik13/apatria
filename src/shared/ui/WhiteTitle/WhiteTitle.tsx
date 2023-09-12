import styles from "./WhiteTitle.module.scss";

interface IWhiteTitle {
  title: string;
}

const WhiteTitle = ({ title }: IWhiteTitle) => {
  return (
    <div className={styles.title}>
      <h2 className={styles.text}>{title}</h2>
      <div className={styles.bg}></div>
    </div>
  );
};

export default WhiteTitle;
