import Tags from '../Tags';
import styles from './Gallery.module.scss';
import pictures from './pictures.json';
import CardsGroup from '../CardsGroup';
import { useState } from 'react';

const Gallery = () => {
    const [images, setImages] = useState(pictures);
    const tags = [...new Set(pictures.map(picture => picture.tag))];

    const pictureFilter = (tag) => {
        const newPictures = pictures.filter(picture => {
            return picture.tag === tag;
        });

        setImages(newPictures);
    }

    return (
        <section className={styles.gallery}>
            <h2>Navegue pela galeria</h2>
            <Tags tags={tags} pictureFilter={pictureFilter} setImages={setImages} />
            <CardsGroup images={images} styles={styles} />
        </section>
    );
}

export default Gallery;
