import { useRef, useState } from "react";
import styles from "./Labs1Test.module.scss";
import { fingerStates } from "./FingerStates";
import useLongPress from "@/features/useLongPress";
import { Link } from "react-router-dom";
import fingerGif from "@/images/finger.gif";
import eyeGif from "@/images/eye-scanner.gif";
import { startProgress } from "./startProgress";

const FingerTest = () => {
  const [fingerTest, setFingerTest] = useState(fingerStates.notStarted);
  const [eyeTest, setEyeTest] = useState(fingerStates.notStarted);
  const div1 = useRef<HTMLDivElement>(null);
  const div2 = useRef<HTMLDivElement>(null);

  const longPress = useLongPress(() => {
    setFingerTest(fingerStates.completed);
  }, 3000);

  const random = Math.floor(Math.random() * (30 - 1) + 1);

  return (
    <>
      <div className={styles.fingerPage}>
        <h2 className={styles.title}>Приложите и держите</h2>
        <div className={styles.fingerZone}>
          <div className={styles.finger} {...longPress}>
            <div
              onTouchStart={(event) => {
                event.stopPropagation();
                if (fingerTest === fingerStates.completed) {
                  return;
                } else {
                  startProgress(div1.current);
                }
              }}
              onTouchEnd={(event) => {
                event.stopPropagation();
                if (fingerTest === fingerStates.completed) {
                  return;
                } else {
                  if (div1.current) {
                    div1.current.style.width = "0";
                  }
                }
              }}
              onClick={(event) => {
                event.stopPropagation();
                event.preventDefault();
              }}
            ></div>
            <img
              src={fingerGif}
              alt='Finger'
              className={styles.fingerGif}
              draggable={false}
            />
          </div>
          <div className={styles.progress}>
            <div className={styles.prog} ref={div1}></div>
          </div>
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
                startProgress(div2.current);
                setTimeout(() => {
                  setEyeTest(fingerStates.completed);
                }, 3000);
              }}
            >
              Start
            </button>
            <div className={styles.eye}>
              <div
                onTouchStart={(event) => {
                  event.stopPropagation();
                }}
                onTouchEnd={(event) => {
                  event.stopPropagation();
                }}
                onClick={(event) => {
                  event.stopPropagation();
                }}
              ></div>
              <img
                src={eyeGif}
                alt='Eye'
                className={styles.eyeGif}
                draggable={false}
              />
            </div>
            <div className={styles.progress}>
              <div className={styles.prog} ref={div2}></div>
            </div>
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
