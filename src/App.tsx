import { useEffect, useState } from 'react';
import { fetchCurrentWeather } from './api/fetchCurrentWeather';

function App() {
    const [data, setData] = useState();

    async function requestCurrentWeather() {
        const dataRes = await fetchCurrentWeather({ lat: 44.34, lon: 10.99 });
        setData(dataRes);
    }

    useEffect(() => {
        requestCurrentWeather();
    }, []);

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <>
            <h1>{'Hi'}</h1>
        </>
    );
}

export default App;
