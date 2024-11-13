import { routes, API_KEY } from './routes';
import { getQueryParams } from '../helpers/getQueryParams';

export interface IFetchData {
    lat: number;
    lon: number;
}

async function fetchForecastFiveWeather(args: IFetchData) {
    const response = await fetch(
        `${routes.urlForecastFiveWeather()}?${getQueryParams({ lat: args.lat, lon: args.lon, appid: API_KEY })}`
    );
    const data = await response.json();

    return data;
}

export { fetchForecastFiveWeather };

// Добавить типизацию данных из ответа (здесь и в других запросах)
// Добавить обработку ошибок от сервера и асинхронного кода (здесь и в других запросах)
