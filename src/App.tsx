import { useEffect, useState } from 'react';
import { fetchCurrentWeather } from './api/fetchCurrentWeather';
import { fetchForecastFiveWeather } from './api/fetchForecastFiveWeather';
import { Layout } from './components/Layout';

function App() {
    const [currentWeather, setCurrentWeather] = useState();
    const [forecastFiveWeather, setForecastFiveWeather] = useState();

    async function requestWeather() {
        const resCurrentWeather = await fetchCurrentWeather({ lat: 44.34, lon: 10.99 });
        const resForecastFiveWeather = await fetchForecastFiveWeather({ lat: 44.34, lon: 10.99 });
        setCurrentWeather(resCurrentWeather);
        setForecastFiveWeather(resForecastFiveWeather);
    }

    useEffect(() => {
        requestWeather();
    }, []);

    useEffect(() => {
        console.log('current: ', currentWeather);
        console.log('forecast: ', forecastFiveWeather);
    }, [currentWeather, forecastFiveWeather]);

    return <Layout />;
}

export default App;
