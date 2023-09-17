import Close from "@/shared/ui/Close/Close";
import styles from "./MicResultPage.module.scss";
import BlueTitle from "@/shared/ui/BlueTitle";
import slidersIcon from "@/images/icons/sliders.svg";
import { generateArrays } from "@/features/generateRandomPercentage";

const fakeInfo = ["hight", "medium", "low"];

const [percentagesArray] = generateArrays(fakeInfo);

const MicResultPage = () => {
  return (
    <div className={styles.micResultPage}>
      <div className={styles.header}>
        <Close color='black' to='/' />
        <BlueTitle title='Resultat' />
      </div>
      <img src={slidersIcon} className={styles.sliders} />
      <div className={styles.info}>
        <div className={styles.infoItem}>
          <p
            className={styles.item}
            style={{ width: `calc(150px + (${percentagesArray[0]}px * 3))` }}
          >
            {percentagesArray[0]} hight
          </p>
        </div>
        <div className={styles.infoItem}>
          <p
            className={styles.item}
            style={{ width: `calc(150px + (${percentagesArray[1]}px * 3))` }}
          >
            {percentagesArray[1]} medium
          </p>
        </div>
        <div className={styles.infoItem}>
          <p
            className={styles.item}
            style={{ width: `calc(150px + (${percentagesArray[2]}px * 3))` }}
          >
            {percentagesArray[2]} low
          </p>
        </div>
      </div>
      <p className={styles.screenshot}>
        сделайте скриншот! Предъявляйте по требованию!
      </p>
    </div>
  );
};

export default MicResultPage;
