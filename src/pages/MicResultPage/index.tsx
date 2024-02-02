import { generateArrays } from '@/features/generateRandomPercentage';
import slidersIcon from '@/images/icons/sliders.svg';
import BlueTitle from '@/shared/ui/BlueTitle';
import Close from '@/shared/ui/Close/Close';
import styles from './MicResultPage.module.scss';

const fakeInfo = ['volume', 'de qualité', 'du rythme'];

const [valuesArray, percentagesArray] = generateArrays(fakeInfo);

const MicResultPage = () => {
	valuesArray.length;
	return (
		<div className={styles.micResultPage}>
			<div className={styles.header}>
				<Close color='black' to='/' />
				<BlueTitle title='Résultat' />
			</div>
			<img src={slidersIcon} className={styles.sliders} />
			<div className={styles.info}>
				<div className={styles.infoItem}>
					<p
						className={styles.item}
						style={{ width: `calc(150px + (${percentagesArray[0]}px * 3))` }}
					>
						{percentagesArray[0]} volume
					</p>
				</div>
				<div className={styles.infoItem}>
					<p
						className={styles.item}
						style={{ width: `calc(150px + (${percentagesArray[1]}px * 3))` }}
					>
						{percentagesArray[1]} de qualité
					</p>
				</div>
				<div className={styles.infoItem}>
					<p
						className={styles.item}
						style={{ width: `calc(150px + (${percentagesArray[2]}px * 3))` }}
					>
						{percentagesArray[2]} du rythme
					</p>
				</div>
			</div>
			<p className={styles.screenshot}>
				Prenez une capture d'écran! Présenter à la demande!
			</p>
		</div>
	);
};

export default MicResultPage;
