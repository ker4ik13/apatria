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
			"je n'ai plus de batterie . pouvez-vous partager votre connexion internet avec moi?",
		photo: photo1,
	},
	{
		text1: 'faites comme ça',
		text2: 'dites-le',
		text3: "avez-vous où je peux trouver du réseau et de l'eau potable?",
		photo: photo2,
	},
	{
		text1: 'faites comme ça',
		text2: 'dites-le',
		text3:
			"je suis en hypoglycémie : j'ai besoin de manger mais je suis allergique au gluten , au soja, au lactose et je suis intolérant aux produits non végétaux d'origine européenne ou aux aliments iodés. je dois avaler quelque chose dans les 10 minutes .",
		photo: photo3,
	},
	{
		text1: 'faites comme ça',
		text2: 'dites-le',
		text3: 'veni vidi vici wifi',
		photo: photo4,
	},
	{
		text1: 'faites comme ça',
		text2: 'dites-le',
		text3:
			'je ressens quelque chose. Je ne suis pas un AA, je suis un humain identifié avec des sentiments ',
		photo: photo5,
	},
];
