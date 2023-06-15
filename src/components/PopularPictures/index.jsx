import Picture from '../Picture';
import styles from './PopularPictures.module.scss';
import pictures from './popular-pictures.json';

const PopularPictures = () => {
    return (
        <aside className={styles.popular}>
            <h2>Populares</h2>
            <ul className={styles.popular__images}>
                {pictures.map(picture => <Picture id={picture.id} picture={picture} styles={styles} />)}
            </ul>
            <button>Ver mais fotos</button>
        </aside>
    );
}

export default PopularPictures;
