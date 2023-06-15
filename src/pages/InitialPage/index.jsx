import styles from './InitialPage.module.scss';

import Header from "components/Header"
import Menu from "components/Menu";
import Banner from "components/Banner";
import Footer from "components/Footer";
import Gallery from "components/Gallery";
import PopularPictures from "components/PopularPictures";

const InitialPage = () => {
    return (
        <>
            <Header />
            <main>
                <section className={styles.main}>
                    <Menu />
                    <Banner />
                </section>
                <div className={styles.galery}>
                    <Gallery />
                    <PopularPictures />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default InitialPage;
