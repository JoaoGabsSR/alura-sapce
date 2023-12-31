import styles from './Footer.module.scss';
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import instagram from "../../assets/icons/instagram.svg";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__icons}>
                <a
                    href="https://www.facebook.com/AluraCursosOnline/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={facebook} alt="ícone do facebook" />
                </a>
                <a
                    href="https://twitter.com/aluraonline?lang=en"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={twitter} alt="ícone do twitter" />
                </a>
                <a
                    href="https://www.instagram.com/aluraonline/?hl=en"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={instagram} alt="ícone do instagram" />
                </a>
            </div>
            <p>Desenvolvido por Alura</p>
        </footer>
    );
}

export default Footer;
