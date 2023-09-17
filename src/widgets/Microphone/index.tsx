import { useNavigate } from "react-router-dom";
import styles from "./Microphone.module.scss";
import { useEffect, useRef, useState } from "react";

// interface IMicrophoneProps {}

const Microphone = () => {
  const [recording, setRecording] = useState(false);
  const [dirty, setDirty] = useState(false);
  const stopButton = useRef<HTMLButtonElement>(null);
  const resultButton = useRef<HTMLButtonElement>(null);
  const micButton = useRef<HTMLButtonElement>(null);
  const rec = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (stopButton.current && rec.current && micButton.current && !recording) {
      rec.current.classList.remove(styles.active);
      stopButton.current.disabled = true;
      micButton.current.classList.remove(styles.active);
    }
    if (stopButton.current && rec.current && micButton.current && recording) {
      rec.current.classList.add(styles.active);
      micButton.current.classList.add(styles.active);
      stopButton.current.disabled = false;
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

  const navigate = useNavigate();
  return (
    <div className={styles.microphonePage}>
      <div className={styles.header}>
        <div className={styles.record}>
          <span>REC</span>
          <div className={styles.rec} ref={rec}></div>
        </div>
        <button
          type='button'
          className={styles.stop}
          ref={stopButton}
          onClick={() => {
            setRecording(false);
            setDirty(true);
          }}
        >
          Stop
        </button>
      </div>
      <button
        type='button'
        className={styles.microphoneButton}
        ref={micButton}
        onClick={() => {
          setRecording(true);
        }}
      >
        <img src='' alt='' className={styles.img} />
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
