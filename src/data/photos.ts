import photo1 from '@/images/ninja/1.webp';
import photo2 from '@/images/ninja/2.webp';
import photo3 from '@/images/ninja/3.webp';
import photo4 from '@/images/ninja/4.webp';
import photo5 from '@/images/ninja/5.webp';

export interface IPhotos {
	text1: string;
	text2: string;
	text3?: string;
	photo: string;
}

export const ninjaPhotos: IPhotos[] = [
	{
		text1: 'faites comme ça',
		text2: 'dites-le',
		text3:
			"Je n'ai plus de batterie. Pouvez-vous partager votre connexion internet avec moi?",
		photo: photo1,
	},
	{
		text1: 'faites comme ça',
		text2: 'dites-le',
		text3: "Savez-vous où je peux trouver du réseau et de l'eau potable?",
		photo: photo2,
	},
	{
		text1: 'faites comme ça',
		text2: 'dites-le',
		text3:
			"Je suis en hypoglycémie: j'ai besoin de manger mais je suis allergique au gluten, au soja, au lactose et je suis intolérant aux produits non végétaux d'origine européenne ou aux aliments iodés. Je dois avaler quelque chose dans les 10 minutes.",
		photo: photo3,
	},
	{
		text1: 'faites comme ça',
		text2: 'dites-le',
		text3: 'Veni vidi vici wifi.',
		photo: photo4,
	},
	{
		text1: 'faites comme ça',
		text2: 'dites-le',
		text3:
			'Je ressens quelque chose. Je ne suis pas un IA, je suis un humain identifié avec des sentiments.',
		photo: photo5,
	},
];
