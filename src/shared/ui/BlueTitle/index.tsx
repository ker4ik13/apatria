import styles from "./BlueTitle.module.scss";

interface IBlueTitleProps {
  title: string;
}

const BlueTitle = ({ title }: IBlueTitleProps) => {
  return (
    <div className={styles.blueTitle}>
      <p className={styles.text}>{title}</p>
      <div className={styles.bg}></div>
    </div>
  );
};

export default BlueTitle;
