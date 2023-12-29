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

export interface ITest2 {
	image?: string;
	ask: string;
	variant1: string;
	variant2: string;
	variant3: string;
	variant4: string;
	variant5: string;
}

export const test2: ITest2[] = [
	{
		ask: 'Dans quelle ville est née Jésus Сhrist ?',
		image: image1,
		variant1: 'Jérusalem',
		variant2: 'Bethléem',
		variant3: 'Israël',
		variant4: 'Nazareth',
		variant5: 'Jericho',
	},
	{
		ask: 'Combien y a-t-il de sourates dans le Coran ?',
		image: image2,
		variant1: '286',
		variant2: '114',
		variant3: '6236',
		variant4: '40',
		variant5: 'Cela dépend de la version du Coran.',
	},
	{
		ask: "L'eau purificatrice doit être fabriquée à partir des cendres de quel animal et quel était sa couleur ?",
		image: image3,
		variant1: 'Une vache rousse',
		variant2: 'Un serpent brun',
		variant3: 'Un agneau blanc',
		variant4: 'Un mouton blanc',
		variant5: 'Une colombe blanche',
	},
	{
		ask: 'Que signifie " Bouddha ? "',
		image: image4,
		variant1: 'Bienheureux',
		variant2: 'Éveillé',
		variant3: 'Sage',
		variant4: 'Harmonieux',
		variant5: 'Le messager',
	},
	{
		ask: `" avant que le coq chante, tu m'auras renié… "`,
		image: image5,
		variant1: 'Deux fois',
		variant2: 'Devant dieu',
		variant3: 'Trois fois',
		variant4: 'Juda',
		variant5: 'Cinq fois',
	},
	{
		ask: 'A quel mois a lieu la fête de Roch Hachana?',
		image: image6,
		variant1: 'en octobre',
		variant2: 'en novembre',
		variant3: 'cela dépend de la Lune',
		variant4: 'fin septembre',
		variant5: 'En janvier',
	},
	{
		ask: 'Où se situe la plus grande église orthodoxe du Monde ?',
		image: image7,
		variant1: 'A Moscou',
		variant2: 'A Yerevan',
		variant3: 'A Sofia',
		variant4: 'A Saint Petersbourg',
		variant5: 'à Bucarest',
	},
	{
		ask: 'Combien y a t il de sacrements dans la religion catholique ?',
		image: image8,
		variant1: '3',
		variant2: '7',
		variant3: '8',
		variant4: '11',
		variant5: `Il n'y en a pas . Le nom sacrement a été changé par le Pape Jean Paul 2 .`,
	},
	{
		ask: "Quelle est l'année islamique selon le calendrier musulman ?",
		image: image9,
		variant1: '2023',
		variant2: '1447',
		variant3: '1673',
		variant4: '1445',
		variant5: '5784',
	},
	{
		ask: 'Où est apparue la religion bouddhiste ?',
		image: image10,
		variant1: `Dans le sud de l'Inde`,
		variant2: 'Au Tibet',
		variant3: `Dans le nord de l'Inde`,
		variant4: 'En Chine',
		variant5: 'En Indonésie',
	},
];
