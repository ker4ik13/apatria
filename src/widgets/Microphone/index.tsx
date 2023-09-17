import { useNavigate } from "react-router-dom";
import styles from "./Microphone.module.scss";
import { useEffect, useRef, useState } from "react";
import mic1Img from "@/images/icons/mic1.webp";
import mic2Img from "@/images/icons/mic2.webp";

const Microphone = () => {
  const [recording, setRecording] = useState(false);
  const [dirty, setDirty] = useState(false);

  const micImg = useRef<HTMLImageElement>(null);
  const resultButton = useRef<HTMLButtonElement>(null);
  const micButton = useRef<HTMLButtonElement>(null);
  const rec = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (rec.current && micButton.current && micImg.current && !recording) {
      rec.current.classList.remove(styles.active);
      micButton.current.classList.remove(styles.active);
      micImg.current.src = mic2Img;
    }
    if (rec.current && micButton.current && micImg.current && recording) {
      rec.current.classList.add(styles.active);
      micButton.current.classList.add(styles.active);
      micImg.current.src = mic1Img;
    }
  }, [recording]);
  useEffect(() => {
    if (resultButton.current && !dirty) {
      resultButton.current.disabled = true;
    }
    if (resultButton.current && dirty) {
      resultButton.current.disabled = false;
    }
  }, [dirty]);

  return (
    <div className={styles.microphonePage}>
      <div className={styles.header}>
        <div className={styles.record}>
          <span>REC</span>
          <div className={styles.rec} ref={rec}></div>
        </div>
      </div>
      <button
        type='button'
        className={styles.microphoneButton}
        ref={micButton}
        onClick={() => {
          setDirty(true);
          if (recording) {
            setRecording(false);
          } else {
            setRecording(true);
          }
        }}
      >
        <img
          src={mic1Img}
          alt='Microphone'
          className={styles.img}
          ref={micImg}
        />
      </button>
      <div className={styles.mic}></div>
      <button
        type='button'
        ref={resultButton}
        className={styles.resultat}
        onClick={() => {
          navigate("/mic-result");
        }}
      >
        Resultat
      </button>
    </div>
  );
};

export default Microphone;
