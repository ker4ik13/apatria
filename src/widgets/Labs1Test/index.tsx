import { useRef, useState } from "react";
import styles from "./Labs1Test.module.scss";
import { fingerStates } from "./FingerStates";
import useLongPress from "@/features/useLongPress";
import { Link } from "react-router-dom";

const FingerTest = () => {
  const [fingerTest, setFingerTest] = useState(fingerStates.notStarted);
  const [eyeTest, setEyeTest] = useState(fingerStates.notStarted);
  const div = useRef<HTMLDivElement>(null);

  const longPress = useLongPress(() => {
    setFingerTest(fingerStates.completed);
    if (div.current) {
      div.current.style.backgroundColor = "#fff";
      div.current.innerText = "Completed";
    }
  }, 2000);

  const random = Math.floor(Math.random() * (30 - 1) + 1);
  console.log(random);

  return (
    <>
      <div className={styles.fingerPage}>
        <h2 className={styles.title}>Приложите и держите 3s</h2>
        <div className={styles.fingerZone}>
          <div className={styles.finger} {...longPress}></div>
          <div className={styles.progress} ref={div}></div>
          {/* <button type='button' className={styles.button}>
            Start
          </button> */}
        </div>
        {fingerTest === fingerStates.completed && (
          <div className={styles.footer}>
            <a className={styles.next} href='#eyePage'>
              Next
            </a>
          </div>
        )}
      </div>
      {fingerTest === fingerStates.completed && (
        <div className={styles.fingerPage} id='eyePage'>
          <h2 className={styles.title}>Нажмите и смотрите в камеру</h2>
          <div className={styles.fingerZone}>
            <button
              type='button'
              className={styles.button}
              onClick={() => {
                setTimeout(() => {
                  setEyeTest(fingerStates.completed);
                }, 3000);
              }}
            >
              Start
            </button>
            <div className={styles.eye}></div>
          </div>
          {eyeTest === fingerStates.completed && (
            <Link to={`/dna/${random}`} className={styles.resButton}>
              Resultat
            </Link>
          )}
        </div>
      )}
    </>
  );
};

export default FingerTest;
