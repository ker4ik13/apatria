import Close from "@/shared/ui/Close/Close";
import styles from "./TestResultPage.module.scss";
import qr from "@/images/qr.jpg";

const fakeText: string[] = [
  "%HB896- 76:++",
  "xXdZ-3212",
  "FFX4$$@1_65",
  "GEVP-2234%",
  "***23DW&***",
  "QWX-001#2W",
  "&E1225-23E##^",
  "^^#4R2FS-442D",
  "____5GSVSA____32",
  "%53DSCS%%21",
];

const TestResultPage = () => {
  const random = Math.floor(Math.random() * fakeText.length);
  return (
    <div className={styles.testResultPage}>
      <div className={styles.close}>
        <Close to='/' color='black' />
      </div>
      <p className={styles.title}>Ваш результат теста!</p>
      <div className={styles.result}>
        <img src={qr} alt='Qr-code' className={styles.qr} />
        <p className={styles.text}>{fakeText[random]}</p>
      </div>
      <p className={styles.screenshot}>
        сделайте скриншот! Предъявляйте по требованию!
      </p>
    </div>
  );
};

export default TestResultPage;