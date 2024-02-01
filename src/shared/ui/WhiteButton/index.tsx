import styles from './WhiteButton.module.scss';

interface IWhiteButton {
	text: string;
	isUpperCase?: boolean;
	disabled?: boolean;
	className?: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onClick?: (...args: any[]) => void;
}

const WhiteButton = ({
	text,
	isUpperCase,
	onClick,
	className,
	disabled,
}: IWhiteButton) => {
	return (
		<button
			type='button'
			disabled={disabled}
			onClick={onClick}
			className={`${styles.button} ${className}`}
		>
			<p className={isUpperCase ? styles.upperText : ''}>{text}</p>
			<div className={styles.bg}></div>
		</button>
	);
};

export default WhiteButton;
