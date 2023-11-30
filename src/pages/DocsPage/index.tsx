import { useParams } from "react-router-dom";
import styles from "./DocsPage.module.scss";
import Arrow, { ArrowDirection } from "@/shared/ui/Arrow";
import docs1 from "@/data/docs/docs1.png";
import docs2 from "@/data/docs/docs2.png";
import docs3 from "@/data/docs/docs3.png";
import docs4 from "@/data/docs/docs4.png";
import docs5 from "@/data/docs/docs5.png";

const DocsPage = () => {
  const { id } = useParams();
  if (id) {
    return (
      <div className={styles.docsPage}>
        <div className={styles.header}>
          <Arrow to='/#droites' direction={ArrowDirection.back} />
          <h2 className={styles.title}>{id}</h2>
        </div>
        <div className={styles.content}>
          {id === "1" && <img src={docs1} className={styles.img} />}
          {id === "2" && <img src={docs2} className={styles.img} />}
          {id === "3" && <img src={docs3} className={styles.img} />}
          {id === "4" && <img src={docs4} className={styles.img} />}
          {id === "5" && <img src={docs5} className={styles.img} />}
        </div>
      </div>
    );
  } else {
    return <div>error</div>;
  }
};

export default DocsPage;
