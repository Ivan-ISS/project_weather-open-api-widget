import styles from './layout.module.scss';
import { FC } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Logo } from '../Common/Logo';

interface ILayoutProps {
    getGeolocation: () => void;
}

const Layout: FC<ILayoutProps> = ({ getGeolocation }): JSX.Element => {
    const hendlerClick = () => {
        getGeolocation();
    };

    return (
        <div className={styles.layout}>
            <Header>
                <Logo />
                <button onClick={hendlerClick}>Клик</button>
            </Header>
            <main className={styles.main}>
                <div
                    className={`
                        ${styles.mainContainer}
                        ${'containerCommon'}`}
                >
                    {'Main'}
                </div>
            </main>
            <Footer children={'Footer'}></Footer>
        </div>
    );
};

export { Layout };
