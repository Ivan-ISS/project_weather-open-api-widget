import { useEffect, useState } from 'react';
import { fetchCurrentWeather } from './api/fetchCurrentWeather';
import { fetchForecastFiveWeather } from './api/fetchForecastFiveWeather';
import { useGeolocation } from './hooks/useGeolocation';
import { Layout } from './components/Layout';

function App() {
    // Состояние данных погоды
    const [currentWeather, setCurrentWeather] = useState();
    const [forecastFiveWeather, setForecastFiveWeather] = useState();

    // Состояние данных геолокации
    const [latitude, setLatitude] = useState<number>(0);
    const [longitude, setLongitude] = useState<number>(0);
    const [geoStatus, setGeoStatus] = useState<string>('');

    const [getGeolocation] = useGeolocation({
        setLatitude,
        setLongitude,
        setGeoStatus,
    });

    async function requestWeather(lat: number, lon: number) {
        const resCurrentWeather = await fetchCurrentWeather({ lat, lon });
        const resForecastFiveWeather = await fetchForecastFiveWeather({ lat, lon });
        setCurrentWeather(resCurrentWeather);
        setForecastFiveWeather(resForecastFiveWeather);
    }

    useEffect(() => {
        getGeolocation();
    }, [getGeolocation]);

    useEffect(() => {
        if (latitude && longitude) requestWeather(latitude, longitude);
    }, [latitude, longitude]);

    useEffect(() => {
        if (geoStatus) console.log(geoStatus);
        if (latitude && longitude) {
            console.log(latitude, longitude);
        }
    }, [latitude, longitude, geoStatus]);

    console.log('render');

    useEffect(() => {
        if (currentWeather) console.log('current: ', currentWeather);
        if (forecastFiveWeather) console.log('forecast: ', forecastFiveWeather);
    }, [currentWeather, forecastFiveWeather]);

    return <Layout getGeolocation={getGeolocation} />;
}

export default App;
