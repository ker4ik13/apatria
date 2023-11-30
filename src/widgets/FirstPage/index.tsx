import styles from "./FirstPage.module.scss";
import logo from "@/images/logo.jpeg";

const FirstPage = () => {
  return (
    <div className={styles.firstPage}>
      <div className={styles.logo}>
        <img src={logo} alt='Logo' className={styles.img} />
        <p className={styles.logoText}>Ministère Du Climat</p>
      </div>
      <p className={styles.centerText}>
        Bienvenue au Centre du Tri d’Immigration mondial
      </p>
      <div className={styles.videoFrame}>
        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/dQw4w9WgXcQ?si=jFDlF8pviG0Bk4nq'
          frameBorder={0}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen={true}
        ></iframe>
      </div>
    </div>
  );
};

export default FirstPage;
