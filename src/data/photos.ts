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
        text3: 'Il mesurait six pieds de haut',
        photo: photo1,
    },
    {
        text1: 'faites comme ça',
        text2: 'dites-le',
        text3: 'Y a pas à dire, il était beau',
        photo: photo2,
    },
    {
        text1: 'faites comme ça',
        text2: 'dites-le',
        text3: 'Des cheveux blonds, couleur de paille',
        photo: photo3,
    },
    {
        text1: 'faites comme ça',
        text2: 'dites-le',
        text3: 'Sur son front tombait en bataille',
        photo: photo4,
    },
    {
        text1: 'faites comme ça',
        text2: 'dites-le',
        text3: "J'aimais regarder ses dents blanches",
        photo: photo5,
    },
]