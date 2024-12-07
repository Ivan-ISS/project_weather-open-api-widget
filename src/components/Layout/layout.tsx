import styles from './layout.module.scss';
import { FC } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Main } from '../Main';
import { WeatherWidget } from '../WeatherWidget';

const Layout: FC = (): JSX.Element => {
    return (
        <div className={styles.layout}>
            <Header children={'Header'}></Header>
            <Main>
                <WeatherWidget />
            </Main>
            <Footer children={'Footer'}></Footer>
        </div>
    );
};

export { Layout };
