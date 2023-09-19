import styles from "./Droites.module.scss";
import WhiteTitle from "@/shared/ui/WhiteTitle/WhiteTitle";
import WhiteLink from "@/shared/ui/WhiteLink";

const Droites = () => {
  return (
    <div className={styles.droitesPage} id='droites'>
      <WhiteTitle title='Droites' />
      <WhiteLink to='/docs/1' text='1. dmsakdjhaskds' />
      <WhiteLink to='/docs/2' text='2. dmsakdjhaskds' />
      <WhiteLink to='/docs/3' text='3. dmsakdjhaskds' />
      <WhiteLink to='/docs/4' text='4. dmsakdjhaskds' />
    </div>
  );
};

export default Droites;
