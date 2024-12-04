import { ICurrentW, IForecastFiveW } from './types/entityTypes';
import { initialCurrentWeather, initialForecastFiveWeather } from './data';
import { prepareCurrentWeather } from './helpers/prepareCurrentWeather';
import { prepareForecastFiveWeather } from './helpers/prepareForecastFiveWeather';
import { useEffect, useState } from 'react';
import { fetchCurrentWeather } from './api/fetchCurrentWeather';
import { fetchForecastFiveWeather } from './api/fetchForecastFiveWeather';
import { useGeolocation } from './hooks/useGeolocation';
import { Layout } from './components/Layout';

function App() {
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
    }, [currentWeather, forecastFiveWeather]);

    return (
        <Layout
            currentWeather={currentWeather}
            forecastFiveWeather={forecastFiveWeather}
            getGeolocation={getGeolocation}
            setCity={setCity}
        />
    );
}

export default App;
