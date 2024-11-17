import { routes, API_KEY } from './routes';
import { getQueryParams } from '../helpers/getQueryParams';

export interface IFetchData {
    lat: number;
    lon: number;
}

async function fetchCurrentWeather(args: IFetchData) {
    try {
        const response = await fetch(
            `${routes.urlCurrentWeather()}?${getQueryParams({ lat: args.lat, lon: args.lon, appid: API_KEY })}`
        );

        if (!response.ok) {
            const error = await response.json();
            console.log('Ошибка ответа (статус не 200): ', error);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.log('Сервер не отвечает: ', error);
    }
}

export { fetchCurrentWeather };
