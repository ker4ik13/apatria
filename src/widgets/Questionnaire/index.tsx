import styles from "./Questionnaire.module.scss";
import WhiteLink from "@/shared/ui/WhiteLink";

interface IQuestionnaireProps {
  text: string;
  link: string;
}

const Questionnaire = ({ text, link }: IQuestionnaireProps) => {
  return (
    <div className={styles.questionnaire}>
      <WhiteLink text={text} to={link} />
    </div>
  );
};

export default Questionnaire;
