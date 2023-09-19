import BlueTitle from "@/shared/ui/BlueTitle";
import styles from "./PredResultPage.module.scss";
import Preloader from "@/shared/ui/Preloader";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface IPredResultPage {
  link: string;
}

const PredResultPage = ({ link }: IPredResultPage) => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(link);
    }, 3000);
  }, []);
  return (
    <div className={styles.predResult}>
      <BlueTitle title='Resultat' />
      <Preloader notFullHeight={true} />
    </div>
  );
};

export default PredResultPage;
