import image1 from '../test2/image1.png';
import image10 from '../test2/image10.png';
import image2 from '../test2/image2.png';
import image3 from '../test2/image3.png';
import image4 from '../test2/image4.png';
import image5 from '../test2/image5.png';
import image6 from '../test2/image6.png';
import image7 from '../test2/image7.png';
import image8 from '../test2/image8.png';
import image9 from '../test2/image9.png';
import type { ITest } from './test1';

export const test2: ITest[] = [
	{
		ask: 'Dans quelle ville est née Jésus christ .',
		image: image1,
		variants: [
			{
				label: 'Jerusalem',
				isCorrect: false,
			},
			{
				label: 'Bethléem',
				isCorrect: true,
			},
			{
				label: 'Israël',
				isCorrect: false,
			},
			{
				label: 'Nazareth',
				isCorrect: false,
			},
			{
				label: 'Jericho',
				isCorrect: false,
			},
		],
	},
	{
		ask: 'Combien y a t il de sourates dans le Coran ?',
		image: image2,
		variants: [
			{
				label: '286',
				isCorrect: false,
			},
			{
				label: '114',
				isCorrect: true,
			},
			{
				label: '6236',
				isCorrect: false,
			},
			{
				label: '40',
				isCorrect: false,
			},
			{
				label: 'Cela dépend de la version du Coran.',
				isCorrect: false,
			},
		],
	},
	{
		ask: ' L’eau purificatrice doit être fabriquée à partir des cendres de quel animal et quel était sa couleur?',
		image: image3,
		variants: [
			{
				label: 'Une vache rousse',
				isCorrect: true,
			},
			{
				label: 'Un serpent brun',
				isCorrect: false,
			},
			{
				label: 'Un agneau blanc',
				isCorrect: false,
			},
			{
				label: 'Un mouton blanc',
				isCorrect: false,
			},
			{
				label: 'Une colombe blanche',
				isCorrect: false,
			},
		],
	},
	{
		ask: 'Que signifie “Bouddha”',
		image: image4,
		variants: [
			{
				label: 'Bienheureux',
				isCorrect: false,
			},
			{
				label: 'Éveillé',
				isCorrect: true,
			},
			{
				label: 'Sage',
				isCorrect: false,
			},
			{
				label: 'Harmonieux',
				isCorrect: false,
			},
			{
				label: 'Le messager',
				isCorrect: false,
			},
		],
	},
	{
		ask: `“avant que le coq chante, tu m’auras renié…”`,
		image: image5,
		variants: [
			{
				label: 'Deux fois',
				isCorrect: false,
			},
			{
				label: 'Devant dieu',
				isCorrect: false,
			},
			{
				label: 'Trois fois',
				isCorrect: true,
			},
			{
				label: 'Juda',
				isCorrect: false,
			},
			{
				label: 'Cinq fois',
				isCorrect: false,
			},
		],
	},
	{
		ask: 'A quel mois a lieu la fête de Roch Hachana?',
		image: image6,
		variants: [
			{
				label: 'en octobre',
				isCorrect: true,
			},
			{
				label: 'en novembre',
				isCorrect: false,
			},
			{
				label: 'cela dépend de la Lune',
				isCorrect: false,
			},
			{
				label: 'fin septembre',
				isCorrect: false,
			},
			{
				label: 'En janvier',
				isCorrect: false,
			},
		],
	},
	{
		ask: 'Où se situe la plus grande église orthodoxe du Monde?',
		image: image7,
		variants: [
			{
				label: 'A Moscou',
				isCorrect: false,
			},
			{
				label: 'A Yerevan',
				isCorrect: false,
			},
			{
				label: 'A Sofia',
				isCorrect: false,
			},
			{
				label: 'A Saint Petersbourg',
				isCorrect: false,
			},
			{
				label: 'à Bucarest',
				isCorrect: true,
			},
		],
	},
	{
		ask: 'Combien y a t il de sacrements dans la religion catholique ?',
		variants: [
			{
				label: '3',
				isCorrect: false,
			},
			{
				label: '7',
				isCorrect: true,
			},
			{
				label: '8',
				isCorrect: false,
			},
			{
				label: '11',
				isCorrect: false,
			},
			{
				label:
					"Il n'y en a pas . Le nom sacrement a été changé par le Pape Jean Paul 2 .",
				isCorrect: false,
			},
		],
		image: image8,
	},
	{
		ask: 'Quelle est l&#39;année islamique selon le calendrier musulman ?',
		image: image9,
		variants: [
			{
				label: '2023',
				isCorrect: false,
			},
			{
				label: '1447',
				isCorrect: false,
			},
			{
				label: '1673',
				isCorrect: false,
			},
			{
				label: '1445',
				isCorrect: true,
			},
			{
				label: '5784',
				isCorrect: false,
			},
		],
	},
	{
		ask: 'Où est apparue la religion bouddhiste ?',
		image: image10,
		variants: [
			{
				label: 'dans le sud de l&#39; Inde',
				isCorrect: false,
			},
			{
				label: 'Au Tibet',
				isCorrect: true,
			},
			{
				label: 'Dans le nord de l&#39; Inde',
				isCorrect: false,
			},
			{
				label: 'En Chine',
				isCorrect: false,
			},
			{
				label: 'En Indonésie',
				isCorrect: false,
			},
		],
	},
];
