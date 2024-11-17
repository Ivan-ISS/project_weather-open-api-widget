import styles from './layout.module.scss';
import { FC } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Logo } from '../Common/Logo';
import { Switch } from '../Common/Switch';

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
                <Switch isActive={false} />
            </Header>
            <main className={styles.main}>
                <div
                    className={`
                        ${styles.mainContainer}
                        ${'containerCommon'}`}
                >
                    {'Main'}
                    <button onClick={hendlerClick}>Клик</button>
                </div>
            </main>
            <Footer children={'Footer'}></Footer>
        </div>
    );
};

export { Layout };
