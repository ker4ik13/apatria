import WhiteLink from "@/shared/ui/WhiteLink";
import styles from "./LabsVariable.module.scss";

interface ILabsVariable {
  id: number;
  img: string;
  title: string;
  text: string;
  buttonLink?: string;
  buttonText?: string;
}

const LabsVariable = ({
  id,
  img,
  title,
  text,
  buttonLink,
  buttonText,
}: ILabsVariable) => {
  return (
    <div className={styles.labsVariable} id={`labs${id}`}>
      <div className={styles.header}>
        <img src={img} className={styles.img} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
      </div>
      {buttonLink && buttonText && (
        <WhiteLink text={buttonText} to={buttonLink} />
      )}
    </div>
  );
};

export default LabsVariable;
