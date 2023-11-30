import testImg1 from '@/images/test/1.png';
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
        variant1: "A. Courgettes",
        variant2: "В. Haricots Verts",
        variant3: 'С. Avocat',
        variant4: "D. Citrouille",
    },
    {
        ask: 'Question architectural',
        image: testImg7,
        title: "Qu'est-ce que c'est ?",
        variant1: 'A. Viande',
        variant2: "В. Hérisson",
        variant3: 'С. Chaise',
        variant4: "D. château",
    },
    {
        ask: 'Faune question',
        image: testImg8,
        title: "Qu'est-ce que c'est ?",
        variant1: 'A. gâteau',
        variant2: "В. stylo",
        variant3: 'С. seau',
        variant4: "д. poisson",
    },
    {
        ask: "question d'histoire",
        image: testImg4,
        title: "Qu'est-ce que c'est ?",
        variant1: 'ковер',
        variant2: "медведь",
        variant3: 'цикр',
        variant4: "баклажан",
    },
    {
        ask: 'Question gastronomique',
        image: testImg1,
        title: "Qu'est-ce que c'est ?",
        variant1: 'а.chat',
        variant2: "В.Téléphone",
        variant3: 'С.fenêtre',
        variant4: "д.microphone",
    },
    {
        ask: 'Question de parfum',
        image: testImg2,
        title: "Qu'est-ce que c'est ?",
        variant1: 'а. canapé',
        variant2: "В.arbre de Noël",
        variant3: 'С. voiture',
        variant4: "д. boutique",
    },
    {
        ask: "question d'amour",
        image: testImg3,
        title: "Qu'est-ce que c'est ?",
        variant1: 'а. livre',
        variant2: "В. pistolet",
        variant3: 'С.roue',
        variant4: "д. porte",
    },
    {
        ask: 'Question architectural',
        image: testImg8,
        title: "Qu'est-ce que c'est ?",
        variant1: 'а.lampe',
        variant2: "В. sac",
        variant3: 'С. canne à pêche',
        variant4: "д.avion",
    },
    {
        ask: "question d'histoire",
        image: testImg9,
        title: "Qu'est-ce que c'est ?",
        variant1: 'а. noix',
        variant2: "В. violon",
        variant3: 'С. balai',
        variant4: "д. grenouille",
    },
    {
        ask: 'Faune question',
        image: testImg6,
        title: "Qu'est-ce que c'est ?",
        variant1: 'а. char',
        variant2: "В.casserole",
        variant3: 'С.tournevis',
        variant4: "д. champignon",
    },
]