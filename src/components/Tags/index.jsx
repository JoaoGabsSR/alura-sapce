import styles from './Tags.module.scss';
import pictures from '../Gallery/pictures.json'

const Tags = ({ tags, pictureFilter, setImages }) => {
    return (
        <div className={styles.tags}>
            <p>Filtre por tag: </p>
            <ul className={styles.tags__list}>
                {tags.map(tag => <li key={tag} onClick={() => pictureFilter(tag)}>{tag}</li>)}
                <li onClick={() => setImages(pictures)}>Todas</li>
            </ul>
        </div>
    );
}

export default Tags;
