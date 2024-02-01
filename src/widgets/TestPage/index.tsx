import correctSound from '@/data/sounds/correct.mp3';
import errorSound from '@/data/sounds/error.mp3';
import { ITest, test1 } from '@/data/test/test1';
import BlueTitle from '@/shared/ui/BlueTitle';
import WhiteButton from '@/shared/ui/WhiteButton';
import WhiteTitle from '@/shared/ui/WhiteTitle/WhiteTitle';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useSound from 'use-sound';
import styles from './TestPage.module.scss';

const TestPage = () => {
	const [playCorrect] = useSound(correctSound);
	const [playError] = useSound(errorSound);

	const [isAnswered, setIsAnswered] = useState(false);

	const { id } = useParams();
	if (id) {
		const test: ITest = test1[+id];
		return (
			<div className={styles.testPage}>
				<p className={styles.number}>{+id + 1}/10</p>
				<BlueTitle title={test.ask} />
				<div className={styles.imgWrapper}>
					<img src={test.image} className={styles.img} />
				</div>
				<WhiteTitle title={test.title} />
				{test.variants.map((variant, index) => (
					<WhiteButton
						key={index}
						className={
							isAnswered
								? variant.isCorrect
									? styles.correctColor
									: styles.errorColor
								: ''
						}
						text={variant.label}
						disabled={!!isAnswered}
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						onClick={(event: any) => {
							if (event.currentTarget.disabled) {
								event.preventDefault();
								return;
							}
							setIsAnswered(true);

							if (variant.isCorrect) {
								event.currentTarget.classList.add(styles.correctColor);
								playCorrect();
								setTimeout(() => {
									+id === 9
										? (window.location.href = '/predresult/')
										: (window.location.href = `/test/${+id + 1}`);
								}, 1500);
							} else {
								event.currentTarget.classList.add(styles.errorColor);
								playError();
								setTimeout(() => {
									+id === 9
										? (window.location.href = '/predresult/')
										: (window.location.href = `/test/${+id + 1}`);
								}, 3000);
							}
						}}
					/>
				))}
			</div>
		);
	}
};

export default TestPage;
