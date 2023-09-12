import { Link } from "react-router-dom";
import styles from "./DnaPage.module.scss";
import { Chart } from "chart.js/auto";
import { useRef, useState } from "react";
import { generateArrays } from "@/features/generateRandomPercentage";

const mockNation: string[] = [
  "Еврей",
  "Эфиоп",
  "Татарин",
  "Абхаз",
  "Цыган",
  "Грек",
  "Талыш",
  "Поляк",
  "Эстонец",
  "Грузин",
  "Итальянец",
  "Русский",
];
const [valuesArray, percentagesArray] = generateArrays(mockNation);

const DnaPage = () => {
  const diagram = useRef<HTMLCanvasElement>(null);

  const data = {
    labels: valuesArray,
    datasets: [
      {
        label: "%",
        data: percentagesArray,
        borderWidth: 3,
        backgroundColor: ["#DB4437", "#4285F4", "#0F9D58"],
      },
    ],
  };

  const draw = (diagram: HTMLCanvasElement) => {
    new Chart(diagram, {
      data: data,
      type: "pie",
    });
  };

  return (
    <div className={styles.dnaPage}>
      <div className={styles.header}>
        <Link to={"/"} className={styles.close}>
          close
        </Link>
      </div>
      <div className={styles.content}>
        <canvas
          className={styles.diagram}
          width={300}
          height={300}
          ref={diagram}
        ></canvas>
        <div className={styles.results}>
          <h2 className={styles.title}>Ваш DNA</h2>
          <p className={styles.text1}>
            {percentagesArray[0]}% {valuesArray[0]}
          </p>
          <p className={styles.text2}>
            {percentagesArray[1]}% {valuesArray[1]}
          </p>
          <p className={styles.text3}>
            {percentagesArray[2]}% {valuesArray[2]}
          </p>
        </div>
        <button
          className={styles.button}
          type='button'
          onClick={() => {
            draw(diagram.current);
          }}
        >
          Показать результат
        </button>
      </div>
      <p className={styles.screenshot}>
        сделайте скриншот! Предъявляйте по требованию!
      </p>
    </div>
  );
};

export default DnaPage;
