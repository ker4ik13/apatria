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
			<LabsVariable
				id={1}
				img={labs1}
				title='title'
				text={
					<>
						<p>
							Ce test nouvelle génération déterminera en partie votre
							destination ZRP.
						</p>
						<p>
							Le test du chaman viendra compléter votre origine dans sa fonction
							spirituelle.
						</p>
					</>
				}
			/>
			<FingerTest />
			<LabsVariable
				id={2}
				img={labs2}
				title='choisissez la bonne réponse'
				text="Afin d'évaluer votre niveau de connaissance de la langue française ainsi que votre culture générale globale, nous vous demandons de bien vouloir effectuer ce test sans l'aide d'une tierce personne"
				buttonLink='/test/0'
				buttonText='Commencer le test'
			/>
			<LabsVariable
				id={3}
				img={labs3}
				text={
					<>
						<p>
							La religion qui vous sera attribuée suite au résultat de ce test
							sera déterminante pour votre avenir.
						</p>
						<p>
							Si besoin est, vous devrez passer par la case conversion
							totalement prise en charge par nos services.'
						</p>
					</>
				}
				buttonLink='/test2/0'
				buttonText='Commencer le test'
			/>
			<LabsVariable
				id={4}
				img={labs4}
				text="Chantez dans le micro une berceuse de votre enfance. Attendez le résultat qui détermineral'origine de cette berceuse."
			/>
			<Microphone />
			<LabsVariable
				id={5}
				img={labs5}
				title='title'
				text={
					<>
						<p>
							Reproduisez le mouvement que vous voyez , image par image tout en
							répétant les phrases de survie dans toutes les langues que vous
							connaissez ou parvenez à lire ( on met en plusieurs langues
							peut-être là)?
						</p>
						<p>
							Appliquez vous, leur réalisation doit être parfaite . Le cas
							échéant, l'étape survie ne sera pas validée.
						</p>
					</>
				}
			/>
			<PhotoPage />
			<LabsVariable
				id={6}
				img={labs6}
				text={
					<>
						<p>
							Évaluez avec nous , pas à pas votre patrimoine personnel ainsi que
							celui de votre conjoint.
						</p>
						<p>
							Selon le choix que vous ferez de suivre ou non votre partenaire en
							zone ZRP, il vous sera demandé de rendre une partie ou la totalité
							de vos biens à l’État de Droit Autochtone et si nécessaire un
							divorce express peut être mis en place par nos agents pour des
							raisons de non partage de patrimoine
						</p>
					</>
				}
			/>
			<Droites />
			<Questionnaire
				link='https://docs.google.com/forms/d/1Rq83PlSift4s3whNw1Yub7uyTY0fnxeMmVP0ftpjHb0/viewform?edit_requested=true'
				text='Questionnaire'
			/>
		</>
	);
};

export default MainPage;
