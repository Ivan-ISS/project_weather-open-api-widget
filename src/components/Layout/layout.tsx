import styles from './layout.module.scss';
import { FC, useState, useEffect } from 'react';
import { setThemeStyleVar } from '../../helpers/setThemeStyleVar';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Logo } from '../Common/Logo';
import { Switch } from '../Common/Switch';
import { CurrentDay } from '../CurrentDay';

interface ILayoutProps {
    getGeolocation: () => void;
}

const Layout: FC<ILayoutProps> = ({ getGeolocation }): JSX.Element => {
    const [theme, setTheme] = useState<string>('Light');

    useEffect(() => {
        setThemeStyleVar(theme);
    });

    const handleClickSwitch = () => {
        setTheme(theme === 'Light' ? 'Dark' : 'Light');
    };

    const hendleClick = () => {
        getGeolocation();
    };

    return (
        <div className={styles.layout}>
            <Header>
                <Logo />
                <Switch isActive={false} onClick={handleClickSwitch} />
            </Header>
            <main className={styles.main}>
                <div
                    className={`
                        ${styles.mainContainer}
                        ${'containerCommon'}
                    `}
                >
                    <button onClick={hendleClick}>Клик</button>
                    <CurrentDay />
                </div>
            </main>
            <Footer children={'Footer'}></Footer>
        </div>
    );
};

export { Layout };
