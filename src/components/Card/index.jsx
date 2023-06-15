import heart from '../../assets/icons/favorito.png';
import open from '../../assets/icons/open.png';


const Card = ({ picture, styles }) => {
    return (
        <li key={picture.id} className={styles.gallery__card}>
            <img
                className={styles.gallery__image}
                src={picture.image}
                alt={picture.title}
            />
            <p className={styles.gallery__description}>{picture.title}</p>
            <div>
                <p>{picture.credits}</p>
                <span>
                    <img src={heart} alt="ícone coração de curtir" />
                    <img src={open} alt="ícone de abrir modal" />
                </span>
            </div>
        </li>
    );
}

export default Card;
