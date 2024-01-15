import WhiteLink from '@/shared/ui/WhiteLink';
import { ReactNode } from 'react';
import styles from './LabsVariable.module.scss';

interface ILabsVariable {
	id: number;
	img: string;
	title?: string | ReactNode;
	text: string | ReactNode;
	buttonLink?: string;
	buttonText?: string;
}

const LabsVariable = ({
	id,
	img,
	title,
	text,
	buttonLink,
	buttonText,
}: ILabsVariable) => {
	return (
		<div className={styles.labsVariable} id={`labs${id}`}>
			<div className={styles.header}>
				<img src={img} className={styles.img} />
			</div>
			<div className={styles.content}>
				{title && <h2 className={styles.title}>{title}</h2>}
				<div className={styles.text}>{text}</div>
			</div>
			{buttonLink && buttonText && (
				<WhiteLink text={buttonText} to={buttonLink} />
			)}
		</div>
	);
};

export default LabsVariable;
