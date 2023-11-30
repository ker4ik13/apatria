import styles from "./Droites.module.scss";
import WhiteTitle from "@/shared/ui/WhiteTitle/WhiteTitle";
import WhiteLink from "@/shared/ui/WhiteLink";

const Droites = () => {
  return (
    <div className={styles.droitesPage} id='droites'>
      <WhiteTitle title='Les Lois' />
      <WhiteLink to='/docs/1' text='Apatria : définition' />
      <WhiteLink to='/docs/2' text='Centre du Tri d’Immigration Obligatoire ' />
      <WhiteLink to='/docs/3' text='Dernier jour du choix' />
      <WhiteLink to='/docs/4' text='Décret №3456 du 16 avril 2036' />
      <WhiteLink to='/docs/5' text='Décret No 3457 du 1er mai 2036' />
    </div>
  );
};

export default Droites;
