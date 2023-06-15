import Card from '../Card';

const CardsGroup = ({ images, styles }) => {
    return (
        <ul className={styles.gallery__cards}>
            {images.map(picture => (
                <Card picture={picture} styles={styles} />
            ))}
        </ul>
    );
}

export default CardsGroup;
