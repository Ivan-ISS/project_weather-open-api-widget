import styles from './layout.module.scss';
import { ICurrentW, IForecastFiveW } from '../../types/entityTypes';
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
import { LineDays } from '../LineDays';
import { PrimaryButton } from '../Common/Buttons/PrimaryButton';

interface ILayoutProps {
    currentWeather: ICurrentW;
    forecastFiveWeather: IForecastFiveW[];
    getGeolocation: () => void;
    setCity: (value: string) => void;
}

const Layout: FC<ILayoutProps> = ({
    currentWeather,
    forecastFiveWeather,
    getGeolocation,
    setCity,
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
        setCity('');
    };

    return (
        <div className={styles.layout}>
            <Header children={'Header'}></Header>
            <main className={styles.main}>
                <div
                    className={`
                        ${styles.mainContainer}
                        ${'containerCommon'}
                    `}
                >
                    <div className={styles.header}>
                        <Logo />
                        <div className={styles.searchPanel}>
                            <Switch isActive={false} onClick={handleClickSwitch} />
                            <Input
                                placeholder={placeholders.search}
                                iconName={'search'}
                                setInputValue={setCity}
                            />
                            <PrimaryButton onClick={hendleClick} text={'Current location'} />
                        </div>
                    </div>
                    <div className={styles.forecast}>
                        <div className={styles.current}>
                            <CurrentDay currentWeather={currentWeather} />
                            <CurrentDayDetails currentWeather={currentWeather} />
                        </div>
                        <LineDays forecastFiveWeather={forecastFiveWeather} />
                    </div>
                </div>
            </main>
            <Footer children={'Footer'}></Footer>
        </div>
    );
};

export { Layout };
