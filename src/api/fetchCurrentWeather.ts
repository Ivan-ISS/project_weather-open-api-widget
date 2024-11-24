import { ICurrentWRes } from '../types/entityTypes';
import { routes, API_KEY } from './routes';
import { getQueryParams } from '../helpers/getQueryParams';

export interface IFetchData {
    city?: string;
    lat?: number;
    lon?: number;
}

async function fetchCurrentWeather(args: IFetchData) {
    try {
        const response = await fetch(
            `${routes.urlCurrentWeather()}?${getQueryParams({ city: args.city, lat: args.lat, lon: args.lon, appid: API_KEY })}`
        );

        if (!response.ok) {
            const error = await response.json();
            console.log('Ошибка ответа (статус не 200): ', error);
        }

        const data: ICurrentWRes = await response.json();

        return data;
    } catch (error) {
        console.log('Сервер не отвечает: ', error);
        return null;
    }
}

export { fetchCurrentWeather };
