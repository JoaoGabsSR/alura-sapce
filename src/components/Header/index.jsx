import logo from '../../assets/images/logo.png';
import search from '../../assets/images/search.png'
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Logo do Alura Space" />
            <div className={styles.header__container}>
                <input
                    type="text"
                    placeholder="O que você procura?"
                    className={styles.header__container}
                />
                <img src={search} alt="ícone de lupa" />
            </div>
        </header>
    );
}

export default Header;
