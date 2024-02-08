import { generateArrays } from '@/features/generateRandomPercentage';
import Close from '@/shared/ui/Close/Close';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import styles from './DnaPage.module.scss';

const mockNation: string[] = [
	'Juif',
	'Ethiopien',
	'Tatar',
	'Français',
	'Abkhazes',
	'de Roms',
	'Grec',
	'Letton',
	'Polonais',
	'Estonien',
	'Géorgiens',
	'Italien',
	'Russe',
	'Arménien',
	'Tchouvache',
	'Ossètes',
	'Mexicain',
	'Yakut',
	'Albanais',
	'Daghestan',
	'Français',
	'Américain',
	'Africain',
	'Tadjik',
	'Irlandais',
	'Coréen',
	'de Roumains',
	'Serbe',
	'Colombien',
	'Équatorien',
	'Chinois',
	'Français',
];

ChartJS.register(ArcElement, Tooltip, Legend);

const DnaPage = () => {
	const fake = Math.floor(Math.random() * 51);
	console.log(fake);

	const isFake = () => fake >= 50;

	const [valuesArray, percentagesArray] = generateArrays(mockNation);
	const data = {
		labels: isFake()
			? ['origine inconnue', 'origine inconnue', 'origine inconnue']
			: valuesArray,
		datasets: [
			{
				label: '%',
				data: percentagesArray,
				borderWidth: 3,
				backgroundColor: ['#DB4437', '#4285F4', '#0F9D58'],
			},
		],
	};

	if (isFake()) {
		return (
			<div className={styles.dnaPage}>
				<div className={styles.header}>
					<Close color='white' to='/#labs' />
				</div>
				<div className={styles.content}>
					<div className={styles.diagram}>
						{isFake() ? (
							<div className={styles.error}>?</div>
						) : (
							<Pie data={data} />
						)}
					</div>
					<div className={styles.results}>
						<h2 className={styles.title}>Votre ADN:</h2>
						<p className={styles.text1}>origine inconnue</p>
						<p className={styles.text2}>origine inconnue</p>
						<p className={styles.text3}>origine inconnue</p>
					</div>
				</div>
				<p className={styles.screenshot}>
					Prenez une capture d'écran! Présenter à la demande!
				</p>
			</div>
		);
	} else {
		return (
			<div className={styles.dnaPage}>
				<div className={styles.header}>
					<Close color='white' to='/#labs' />
				</div>
				<div className={styles.content}>
					<div className={styles.diagram}>
						<Pie data={data} />
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
					Prenez une capture d'écran! Présenter à la demande!
				</p>
			</div>
		);
	}
};

export default DnaPage;
