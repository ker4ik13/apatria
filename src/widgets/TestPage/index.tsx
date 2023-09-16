import { useParams } from "react-router-dom";
import styles from "./TestPage.module.scss";
import { test1 } from "@/data/test/test1";
import { ITest } from "@/data/test/test1";
import BlueTitle from "@/shared/ui/BlueTitle";
import WhiteTitle from "@/shared/ui/WhiteTitle/WhiteTitle";
import WhiteLink from "@/shared/ui/WhiteLink";

const TestPage = () => {
  const { id } = useParams();
  if (id) {
    const test: ITest = test1[+id];
    return (
      <div className={styles.testPage}>
        <p className={styles.number}>{+id + 1}/10</p>
        <BlueTitle title={test.ask} />
        <div className={styles.imgWrapper}>
          <img src='' className={styles.img} />
        </div>
        <WhiteTitle title={test.title} />

        {+id === 9 && (
          <>
            <WhiteLink text={test.variant1} to={"/test-result/"} />
            <WhiteLink text={test.variant2} to={"/test-result/"} />
            <WhiteLink text={test.variant3} to={"/test-result/"} />
            <WhiteLink text={test.variant4} to={"/test-result/"} />
          </>
        )}
        <WhiteLink text={test.variant1} to={`/test/${+id + 1}`} />
        <WhiteLink text={test.variant2} to={`/test/${+id + 1}`} />
        <WhiteLink text={test.variant3} to={`/test/${+id + 1}`} />
        <WhiteLink text={test.variant4} to={`/test/${+id + 1}`} />
      </div>
    );
  }
};

export default TestPage;
