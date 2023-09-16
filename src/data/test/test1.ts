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
        ask: 'Гастро вопрос',
        image: testImg1,
        title: 'Что это?',
        variant1: 'Цукинни',
        variant2: "Стручковая фасоль",
        variant3: 'Авокадо',
        variant4: "Тыква",
    },
    {
        ask: 'Архитектурный вопрос',
        image: testImg2,
        title: 'Что это?',
        variant1: 'Мясо',
        variant2: "Еж",
        variant3: 'Стул',
        variant4: "Заком",
    },
    {
        ask: 'Фауна вопрос',
        image: testImg3,
        title: 'Что это?',
        variant1: 'торт',
        variant2: "ручка",
        variant3: 'ведро',
        variant4: "рыба",
    },
    {
        ask: 'истории вопрос',
        image: testImg4,
        title: 'Что это?',
        variant1: 'ковер',
        variant2: "медведь",
        variant3: 'цикр',
        variant4: "баклажан",
    },
    {
        ask: 'Гастро вопрос',
        image: testImg5,
        title: 'Что это?',
        variant1: 'кот',
        variant2: "телефон",
        variant3: 'окно',
        variant4: "микрофон",
    },
    {
        ask: 'обояние вопрос',
        image: testImg6,
        title: 'Что это?',
        variant1: 'диван',
        variant2: "елка",
        variant3: 'машина',
        variant4: "магазин",
    },
    {
        ask: 'любовный вопрос',
        image: testImg7,
        title: 'Что это?',
        variant1: 'книга',
        variant2: "пистолет",
        variant3: 'колесо',
        variant4: "дверь",
    },
    {
        ask: 'архитектурный вопрос',
        image: testImg8,
        title: 'Что это?',
        variant1: 'лампа',
        variant2: "сумка",
        variant3: 'удочка',
        variant4: "самолет",
    },
    {
        ask: 'истории вопрос',
        image: testImg9,
        title: 'Что это?',
        variant1: 'орех',
        variant2: "скрипка",
        variant3: 'швабра',
        variant4: "лягушка",
    },
    {
        ask: 'фауна вопрос',
        image: testImg3,
        title: 'Что это?',
        variant1: 'танк',
        variant2: "кострюля",
        variant3: 'отвертка',
        variant4: "гриб",
    },
]