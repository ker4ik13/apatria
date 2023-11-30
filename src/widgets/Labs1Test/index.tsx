import { useRef, useState } from "react";
import styles from "./Labs1Test.module.scss";
import { Link } from "react-router-dom";
import { fingerStates } from "./FingerStates";
import useLongPress from "@/features/useLongPress";
import { startProgress } from "./startProgress";
import fingerGif from "@/images/finger.gif";
import eyeGif from "@/images/eye-scanner.gif";
import fingerImg from "@/images/fingerImg.jpg";
import eyeImg from "@/images/eye-scannerImg.jpg";
import glaz from "@/images/glaz.png";

const FingerTest = () => {
  const [fingerTest, setFingerTest] = useState(fingerStates.notStarted);
  const [eyeTest, setEyeTest] = useState(fingerStates.notStarted);
  const div1 = useRef<HTMLDivElement>(null);
  const div2 = useRef<HTMLDivElement>(null);
  const finger = useRef<HTMLImageElement>(null);
  const eye = useRef<HTMLImageElement>(null);

  const longPress = useLongPress(() => {
    setFingerTest(fingerStates.completed);
  }, 3000);

  const random = Math.floor(Math.random() * (30 - 1) + 1);

  const handleFingerStart = () => {
    if (fingerTest === fingerStates.completed) {
      if (finger.current) {
        finger.current.src = fingerImg;
      }
      return;
    } else {
      if (finger.current) {
        finger.current.src = fingerGif;
      }
      startProgress(div1.current);
    }
  };
  const handleFingerEnd = () => {
    if (fingerTest === fingerStates.completed) {
      if (finger.current) {
        finger.current.src = fingerImg;
      }
      return;
    } else {
      if (div1.current) {
        div1.current.style.width = "0";
        if (finger.current) {
          finger.current.src = fingerImg;
        }
      }
    }
  };
  const handleEye = () => {
    startProgress(div2.current);
    if (eye.current) {
      eye.current.src = eyeGif;
    }
    setTimeout(() => {
      setEyeTest(fingerStates.completed);
      if (eye.current) {
        eye.current.src = eyeImg;
      }
    }, 3000);
  };

  return (
    <>
      <div className={styles.fingerPage}>
        <h2 className={styles.title}>Appuyez et maintenez le doigt</h2>
        <div className={styles.fingerZone}>
          <div className={styles.finger} {...longPress}>
            <div
              onTouchStart={handleFingerStart}
              onTouchEnd={handleFingerEnd}
              onMouseDown={handleFingerStart}
              onMouseUp={handleFingerEnd}
            >
              <div className={styles.prevent}>
                <img
                  src={fingerImg}
                  alt='Finger'
                  className={styles.fingerGif}
                  draggable={false}
                  ref={finger}
                />
              </div>
            </div>
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
          <h2 className={styles.title}>Cliquez et regardez dans la caméra</h2>
          <div className={styles.fingerZone}>
            <button type='button' className={styles.button} onClick={handleEye}>
              Start
            </button>
            <div className={styles.eye}>
              <div className={styles.prevent}>
                <img
                  src={eyeImg}
                  alt='Eye'
                  className={styles.eyeGif}
                  draggable={false}
                  ref={eye}
                />
                <img
                  src={glaz}
                  alt='Eye'
                  className={styles.glaz}
                  draggable={false}
                />
              </div>
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
