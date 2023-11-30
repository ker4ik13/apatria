import styles from "./DnaPage.module.scss";
import { Chart } from "chart.js/auto";
import { useEffect, useRef } from "react";
import { generateArrays } from "@/features/generateRandomPercentage";
import Close from "@/shared/ui/Close/Close";

const mockNation: string[] = [
  "Juif",
  "Ethiopien",
  "Tatar",
  "Abkhazes",
  "de Roms",
  "Grec",
  "Letton",
  "Polonais",
  "Estonien",
  "Géorgiens",
  "Italien",
  "Russe",
  "Arménien",
  "Tchouvache",
  "Ossètes",
  "Mexicain",
  "Yakut",
  "Albanais",
  "Daghestan",
  "Américain",
  "Africain",
  "Tadjik",
  "Irlandais",
  "Coréen",
  "de Roumains",
  "Serbe",
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

  useEffect(() => {
    if (diagram.current) {
      new Chart(diagram.current, {
        data: data,
        type: "pie",
      });
    }
  }, [diagram.current]);

  return (
    <div className={styles.dnaPage}>
      <div className={styles.header}>
        <Close color='white' to='/#labs' />
      </div>
      <div className={styles.content}>
        <div className={styles.diagram}>
          <canvas ref={diagram}></canvas>
        </div>
        <div className={styles.results}>
          <h2 className={styles.title}>Votre ADN:</h2>
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
      </div>
      <p className={styles.screenshot}>
        Prenez une capture d'écran ! Présenter à la demande!
      </p>
    </div>
  );
};

export default DnaPage;
