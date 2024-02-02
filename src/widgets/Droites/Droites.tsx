import WhiteLink from '@/shared/ui/WhiteLink';
import WhiteTitle from '@/shared/ui/WhiteTitle/WhiteTitle';
import styles from './Droites.module.scss';

const Droites = () => {
	return (
		<div className={styles.droitesPage} id='droites'>
			<WhiteTitle title='Les décrets:' />
			<WhiteLink to='/docs/1' text='Apatria: définition' />
			<WhiteLink to='/docs/2' text='Centre de tri de migration mondiale' />
			<WhiteLink to='/docs/3' text='Dernier jour du choix' />
			<WhiteLink to='/docs/4' text='Décret №3456 du 16 avril 2036' />
			<WhiteLink to='/docs/5' text='Décret No 3457 du 1er mai 2036' />
		</div>
	);
};

export default Droites;
