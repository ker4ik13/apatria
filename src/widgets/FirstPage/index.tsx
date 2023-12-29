import video from '@/data/video.mp4';
import logo from '@/images/logo.png';
import styles from './FirstPage.module.scss';

const FirstPage = () => {
	return (
		<div className={styles.firstPage}>
			<div className={styles.logo}>
				<img src={logo} alt='Logo' className={styles.img} />
				<p className={styles.logoText}>Ministère Du Climat</p>
			</div>
			<p className={styles.centerText}>
				Bienvenue au Centre de Tri de la Migration Mondiale
			</p>
			<div className={styles.videoFrame}>
				<video src={video} controls></video>
			</div>
		</div>
	);
};

export default FirstPage;
