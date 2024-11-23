import styles from './layout.module.scss';
import { FC, useState, useEffect } from 'react';
import { themeName, placeholders } from '../../data';
import { setThemeStyleVar } from '../../helpers/setThemeStyleVar';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Logo } from '../Common/Logo';
import { Input } from '../Common/Input';
import { Switch } from '../Common/Switch';
import { CurrentDay } from '../CurrentDay';

interface ILayoutProps {
    getGeolocation: () => void;
    setDisplayCity: (value: boolean) => void;
    setCity: (value: string) => void;
}

const Layout: FC<ILayoutProps> = ({ getGeolocation, setCity, setDisplayCity }): JSX.Element => {
    const [theme, setTheme] = useState<string>(themeName.light);

    useEffect(() => {
        setThemeStyleVar(theme);
    }, [theme]);

    const handleClickSwitch = () => {
        setTheme(theme === themeName.light ? themeName.dark : themeName.light);
    };

    const hendleClick = () => {
        getGeolocation();
        setDisplayCity(false);
    };

    return (
        <div className={styles.layout}>
            <Header>
                <Logo />
                <Input
                    placeholder={placeholders.search}
                    iconName={'search'}
                    setInputValue={setCity}
                />
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
