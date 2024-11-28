import styles from './layout.module.scss';
import { ICurrentW } from '../../types/entityTypes';
import { FC, useState, useEffect } from 'react';
import { themeName, placeholders } from '../../data';
import { setThemeStyleVar } from '../../helpers/setThemeStyleVar';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Logo } from '../Common/Logo';
import { Input } from '../Common/Input';
import { Switch } from '../Common/Switch';
import { CurrentDay } from '../CurrentDay';
import { CurrentDayDetails } from '../CurrentDayDetails';

interface ILayoutProps {
    currentWeather: ICurrentW;
    getGeolocation: () => void;
    setDisplayCity: (value: boolean) => void;
    setCity: (value: string) => void;
}

const Layout: FC<ILayoutProps> = ({
    currentWeather,
    getGeolocation,
    setCity,
    setDisplayCity,
}): JSX.Element => {
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
                    <div className={styles.current}>
                        <CurrentDay currentWeather={currentWeather} />
                        <CurrentDayDetails currentWeather={currentWeather} />
                    </div>
                </div>
            </main>
            <Footer children={'Footer'}></Footer>
        </div>
    );
};

export { Layout };
