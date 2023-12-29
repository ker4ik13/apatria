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
	variant1: string;
	variant2: string;
	variant3: string;
	variant4: string;
}

export const test1: ITest[] = [
	{
		ask: 'Question gastronomique',
		image: testImg5,
		title: "Qu'est-ce que c'est ?",
		variant1: 'Courgettes',
		variant2: 'Haricots Verts',
		variant3: 'Avocat',
		variant4: 'Citrouille',
	},
	{
		ask: 'Question architectural',
		image: testImg7,
		title: "Qu'est-ce que c'est ?",
		variant1: 'Viande',
		variant2: 'Hérisson',
		variant3: 'Chaise',
		variant4: 'château',
	},
	{
		ask: 'Faune question',
		image: testImg9,
		title: "Qu'est-ce que c'est ?",
		variant1: 'gâteau',
		variant2: 'stylo',
		variant3: 'seau',
		variant4: 'poisson',
	},
	{
		ask: "question d'histoire",
		image: testImg4,
		title: "Qu'est-ce que c'est ?",
		variant1: 'chat',
		variant2: 'Téléphone',
		variant3: 'fenêtre',
		variant4: 'microphone',
	},
	{
		ask: 'Question gastronomique',
		image: testImg1,
		title: "Qu'est-ce que c'est ?",
		variant1: 'chat',
		variant2: 'Téléphone',
		variant3: 'fenêtre',
		variant4: 'microphone',
	},
	{
		ask: 'Question de parfum',
		image: testImg2,
		title: "Qu'est-ce que c'est ?",
		variant1: 'canapé',
		variant2: 'arbre de Noël',
		variant3: 'voiture',
		variant4: 'boutique',
	},
	{
		ask: "question d'amour",
		image: testImg3,
		title: "Qu'est-ce que c'est ?",
		variant1: 'livre',
		variant2: 'pistolet',
		variant3: 'roue',
		variant4: 'porte',
	},
	{
		ask: 'Question architectural',
		image: testImg8,
		title: "Qu'est-ce que c'est ?",
		variant1: 'lampe',
		variant2: 'sac',
		variant3: 'canne à pêche',
		variant4: 'avion',
	},
	{
		ask: "question d'histoire",
		image: testImg10,
		title: "Qu'est-ce que c'est ?",
		variant1: 'noix',
		variant2: 'violon',
		variant3: 'balai',
		variant4: 'grenouille',
	},
	{
		ask: 'Faune question',
		image: testImg6,
		title: "Qu'est-ce que c'est ?",
		variant1: 'char',
		variant2: 'casserole',
		variant3: 'tournevis',
		variant4: 'champignon',
	},
];
