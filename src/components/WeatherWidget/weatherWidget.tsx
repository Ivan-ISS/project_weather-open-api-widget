import styles from './weatherWidget.module.scss';
import { ICurrentW, IForecastFiveW } from '../../types/entityTypes';
import {
    themeName,
    placeholders,
    initialCurrentWeather,
    initialForecastFiveWeather,
} from '../../data';
import { fetchCurrentWeather } from '../../api/fetchCurrentWeather';
import { fetchForecastFiveWeather } from '../../api/fetchForecastFiveWeather';
import { setThemeStyleVar } from '../../helpers/setThemeStyleVar';
import { prepareCurrentWeather } from '../../helpers/prepareCurrentWeather';
import { prepareForecastFiveWeather } from '../../helpers/prepareForecastFiveWeather';
import { useGeolocation } from '../../hooks/useGeolocation';

import { FC, useState, useEffect } from 'react';
import { Logo } from '../Common/Logo';
import { Input } from '../Common/Input';
import { Switch } from '../Common/Switch';
import { PrimaryButton } from '../Common/Buttons/PrimaryButton';
import { CurrentDay } from './CurrentDay';
import { CurrentDayDetails } from './CurrentDayDetails';
import { LineDays } from './LineDays';
import { Modal } from '../Common/Modal';

const WeatherWidget: FC = () => {
    const [theme, setTheme] = useState<string>(themeName.light);

    // Состояние данных погоды
    const [currentWeather, setCurrentWeather] = useState<ICurrentW>(initialCurrentWeather);
    const [forecastFiveWeather, setForecastFiveWeather] = useState<IForecastFiveW[]>(
        initialForecastFiveWeather
    );

    // Состояние данных геолокации
    const [city, setCity] = useState<string>('');
    const [latitude, setLatitude] = useState<number>(0);
    const [longitude, setLongitude] = useState<number>(0);
    const [geoStatus, setGeoStatus] = useState<string>('');

    const [getGeolocation] = useGeolocation({
        setLatitude,
        setLongitude,
        setGeoStatus,
    });

    async function requestWeather(city: string, lat: number, lon: number) {
        const resCurrentWeather = await fetchCurrentWeather({ city, lat, lon });
        const resForecastFiveWeather = await fetchForecastFiveWeather({ city, lat, lon });
        setCurrentWeather(prepareCurrentWeather(resCurrentWeather));
        setForecastFiveWeather(prepareForecastFiveWeather(resForecastFiveWeather));
    }

    useEffect(() => {
        getGeolocation();
    }, [getGeolocation]);

    useEffect(() => {
        if (latitude && longitude) requestWeather(city, latitude, longitude);
    }, [latitude, longitude, city]);

    useEffect(() => {
        if (geoStatus) console.log(geoStatus);
        if (latitude && longitude) {
            console.log(latitude, longitude);
        }
    }, [latitude, longitude, geoStatus]);

    // console.log('render');

    useEffect(() => {
        if (currentWeather) console.log('current: ', currentWeather);
        if (forecastFiveWeather) console.log('forecast: ', forecastFiveWeather);
    }, [currentWeather, forecastFiveWeather, city]);

    useEffect(() => {
        setThemeStyleVar(theme);
    }, [theme]);

    const handleClickSwitch = () => {
        setTheme(theme === themeName.light ? themeName.dark : themeName.light);
    };

    const hendleClickLocation = () => {
        getGeolocation();
        setCity('');
    };

    return (
        <div className={styles.weatherWidget}>
            <div className={styles.header}>
                <Logo />
                <div className={styles.searchPanel}>
                    <Switch isActive={false} onClick={handleClickSwitch} />
                    <Input
                        placeholder={placeholders.search}
                        iconName={'search'}
                        setInputValue={setCity}
                    />
                    <PrimaryButton onClick={hendleClickLocation} text={'Current location'} />
                </div>
            </div>
            {(currentWeather.error || forecastFiveWeather[0].error) && (
                <Modal
                    insert={
                        <div className={styles.error}>
                            {currentWeather.error || forecastFiveWeather[0].error}
                        </div>
                    }
                />
            )}
            <div className={styles.forecast}>
                <div className={styles.current}>
                    <CurrentDay currentWeather={currentWeather} />
                    <CurrentDayDetails currentWeather={currentWeather} />
                </div>
                <LineDays forecastFiveWeather={forecastFiveWeather} />
            </div>
        </div>
    );
};

export { WeatherWidget };
