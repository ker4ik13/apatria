import labs1 from '@/images/labs/1.jpeg';
import labs2 from '@/images/labs/2.jpeg';
import labs3 from '@/images/labs/3.jpeg';
import labs4 from '@/images/labs/4.jpeg';
import labs5 from '@/images/labs/5.jpeg';
import labs6 from '@/images/labs/6.jpeg';
import Droites from '@/widgets/Droites/Droites';
import FirstPage from '@/widgets/FirstPage';
import Labs from '@/widgets/Labs/Labs';
import FingerTest from '@/widgets/Labs1Test';
import LabsVariable from '@/widgets/LabsVariable';
import Microphone from '@/widgets/Microphone';
import Questionnaire from '@/widgets/Questionnaire';
import Slider from '@/widgets/SliderPage';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PhotoPage from '../PhotoPage';

const MainPage = () => {
	const { hash } = useLocation();

	useEffect(() => {
		if (hash) {
			const scrollTo: HTMLElement | null = document.querySelector(hash);

			if (scrollTo) {
				window.scrollTo({
					top: scrollTo.offsetTop,
					behavior: 'smooth',
				});
			}
		}
	}, [hash]);
	return (
		<>
			<FirstPage />
			<Slider />
			<Labs />
			<LabsVariable id={1} img={labs1} title='title' text='text' />
			<FingerTest />
			<LabsVariable
				id={2}
				img={labs2}
				title='Choisissez le bon réponses'
				text='Description texte Descriptiondescription texte Descriptiondescription texte Descriptiondescription texte descriptiondescription texte Descriptiondescription texte Descriptiondescription texte Descriptiondescription'
				buttonLink='/test/0'
				buttonText='Commencer le test'
			/>
			<LabsVariable
				id={3}
				img={labs3}
				title='title'
				text='text'
				buttonLink='/test2/0'
				buttonText='Commencer le test'
			/>
			<LabsVariable
				id={4}
				img={labs4}
				text="Chantez dans le micro une berceuse de votre enfance. Attendez le résultat qui détermineral'origine de cette berceuse."
			/>
			<Microphone />
			<LabsVariable id={5} img={labs5} title='title' text='text' />
			<PhotoPage />
			<LabsVariable id={6} img={labs6} title='title' text='text' />
			<Droites />
			<Questionnaire
				link='https://docs.google.com/forms/d/1Rq83PlSift4s3whNw1Yub7uyTY0fnxeMmVP0ftpjHb0/viewform?edit_requested=true'
				text='Questionnaire'
			/>
		</>
	);
};

export default MainPage;
