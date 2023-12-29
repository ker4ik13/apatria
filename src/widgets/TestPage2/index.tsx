import { ITest2, test2 } from '@/data/test/test2';
import BlueTitle from '@/shared/ui/BlueTitle';
import WhiteLink from '@/shared/ui/WhiteLink';
import { useParams } from 'react-router-dom';
import styles from './TestPage.module.scss';

const TestPage2 = () => {
	const { id } = useParams();
	if (id) {
		const test: ITest2 = test2[+id];
		return (
			<div className={styles.testPage}>
				<p className={styles.number}>
					{+id + 1}/{test2.length}
				</p>
				<BlueTitle title={test.ask} />
				<div className={styles.imgWrapper}>
					<img src={test.image} className={styles.img} />
				</div>

				{+id === 9 && (
					<>
						<WhiteLink isUpperCase text={test.variant1} to={'/predresult/'} />
						<WhiteLink isUpperCase text={test.variant2} to={'/predresult/'} />
						<WhiteLink isUpperCase text={test.variant3} to={'/predresult/'} />
						<WhiteLink isUpperCase text={test.variant4} to={'/predresult/'} />
						<WhiteLink isUpperCase text={test.variant5} to={'/predresult/'} />
					</>
				)}
				{+id !== 9 && (
					<>
						<WhiteLink
							isUpperCase
							text={test.variant1}
							to={`/test2/${+id + 1}`}
						/>
						<WhiteLink
							isUpperCase
							text={test.variant2}
							to={`/test2/${+id + 1}`}
						/>
						<WhiteLink
							isUpperCase
							text={test.variant3}
							to={`/test2/${+id + 1}`}
						/>
						<WhiteLink
							isUpperCase
							text={test.variant4}
							to={`/test2/${+id + 1}`}
						/>
						<WhiteLink
							isUpperCase
							text={test.variant5}
							to={`/test2/${+id + 1}`}
						/>
					</>
				)}
			</div>
		);
	}
};

export default TestPage2;
