import testImg1 from '@/images/test/1.png';
import testImg10 from '@/images/test/10.png';
import testImg2 from '@/images/test/2.png';
import testImg3 from '@/images/test/3.png';
import testImg4 from '@/images/test/4.png';
import testImg5 from '@/images/test/5.png';
import testImg6 from '@/images/test/6.png';
import testImg7 from '@/images/test/7.png';
import testImg8 from '@/images/test/8.png';
import testImg9 from '@/images/test/9.png';

export interface ITest {
	title: string;
	image?: string;
	ask: string;
	variants: {
		label: string;
		isCorrect: boolean;
	}[];
}

export const test1: ITest[] = [
	{
		ask: 'Question Civilisation',
		image: testImg5,
		title: "Qu'est-ce que c'est ?",
		variants: [
			{
				label: 'Un croissant au beurre',
				isCorrect: true,
			},
			{
				label: 'Un croissant aux amandes',
				isCorrect: false,
			},
			{
				label: 'Une chocolatine',
				isCorrect: false,
			},
			{
				label: 'Un croissant sans gluten',
				isCorrect: false,
			},
		],
	},
	{
		ask: 'Question Patrimoine',
		image: testImg7,
		title: "Qu'est-ce que c'est ?",
		variants: [
			{
				label: 'La lettre A de l’alphabet latin avant 2031',
				isCorrect: false,
			},
			{
				label: 'Une grue de 1980',
				isCorrect: false,
			},
			{
				label: 'Une antenne radio de 1990',
				isCorrect: false,
			},
			{
				label: 'La tour Eiffel avant 2030',
				isCorrect: true,
			},
		],
	},
	{
		ask: 'Question Sciences de la Vie et de la Terre',
		image: testImg9,
		title: "Qu'est-ce que c'est ?",
		variants: [
			{
				label: 'Un crapaud',
				isCorrect: false,
			},
			{
				label: 'Un lapin vert',
				isCorrect: false,
			},
			{
				label: 'Une grenouille',
				isCorrect: true,
			},
			{
				label: 'Une rainette',
				isCorrect: false,
			},
		],
	},
	{
		ask: 'Question Histoire de l’Art',
		image: testImg4,
		title: "Qu'est-ce que c'est ?",
		variants: [
			{
				label: 'La schtroumpfette',
				isCorrect: false,
			},
			{
				label: 'Catherine Deneuve',
				isCorrect: false,
			},
			{
				label: 'Brigitte Bardot',
				isCorrect: false,
			},
			{
				label: 'Marianne',
				isCorrect: true,
			},
		],
	},
	{
		ask: 'Question Géographie appliquée',
		image: testImg1,
		title: "Qu'est-ce que c'est ?",
		variants: [
			{
				label: 'Beaujolais nouveau année 2036',
				isCorrect: false,
			},
			{
				label: 'Bordeaux année 2030',
				isCorrect: false,
			},
			{
				label: 'Château neuf du pape année 2026',
				isCorrect: false,
			},
			{
				label: 'Côte du Rhône de Wallonie année 2035',
				isCorrect: true,
			},
		],
	},
	{
		ask: 'Question Mode et parfum',
		image: testImg2,
		title: "Qu'est-ce que c'est ?",
		variants: [
			{
				label: 'Shanel numéro 5',
				isCorrect: false,
			},
			{
				label: 'Poison rouge de Dyor',
				isCorrect: false,
			},
			{
				label: 'Savon de Marseille numéro 19',
				isCorrect: true,
			},
			{
				label: 'Armania Niente',
				isCorrect: false,
			},
		],
	},
	{
		ask: 'Question Littérature',
		image: testImg3,
		title: "Qu'est-ce que c'est ?",
		variants: [
			{
				label: 'Le voleur à plume',
				isCorrect: false,
			},
			{
				label: 'La « blonde »',
				isCorrect: false,
			},
			{
				label: 'Le démon',
				isCorrect: false,
			},
			{
				label: 'Chérubin',
				isCorrect: true,
			},
		],
	},
	{
		ask: 'Question Architecture',
		image: testImg8,
		title: "Qu'est-ce que c'est ?",
		variants: [
			{
				label: 'La porte Saint Martin',
				isCorrect: false,
			},
			{
				label: 'La porte d’Aix',
				isCorrect: false,
			},
			{
				label: 'L’arc de triomphe',
				isCorrect: true,
			},
			{
				label: 'L’arche de la Défense',
				isCorrect: false,
			},
		],
	},
	{
		ask: 'Question Mythologie française',
		image: testImg10,
		title: "Qu'est-ce que c'est ?",
		variants: [
			{
				label: 'Général Bonaparte',
				isCorrect: true,
			},
			{
				label: 'Empereur Napoléon 1 er',
				isCorrect: true,
			},
			{
				label: 'Premier consul',
				isCorrect: true,
			},
			{
				label: 'Président de la République Italienne',
				isCorrect: true,
			},
		],
	},
	{
		ask: 'Question Gastronomie',
		image: testImg6,
		title: "Qu'est-ce que c'est ?",
		variants: [
			{
				label: 'Escargot',
				isCorrect: false,
			},
			{
				label: 'Limace',
				isCorrect: false,
			},
			{
				label: 'Tortue',
				isCorrect: false,
			},
			{
				label: 'Antipasti spéciaux',
				isCorrect: true,
			},
		],
	},
];
