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
            const error = await response.json(); // Нужно типизировать ошибку и сделать обработку в FiveForecast аналогично и использовать ее показ в зависимости от error в current или error в forecast
            console.log('Ошибка ответа (статус не 200): ', error);
            return error.message as string;
        }

        const data: ICurrentWRes = await response.json();

        // console.log('response_1: ', data);

        return data;
    } catch (error) {
        console.log('Сервер не отвечает: ', error);
        return 'Oops, something went wrong! Try again';
    }
}

export { fetchCurrentWeather };
