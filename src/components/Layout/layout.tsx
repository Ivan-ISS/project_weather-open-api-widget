import styles from './layout.module.scss';
import { FC } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

const Layout: FC = (): JSX.Element => {
    return (
        <div className={styles.layout}>
            <Header>{'Header'}</Header>
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
