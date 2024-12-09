import { IForecastFiveWRes } from '../types/entityTypes';
import { routes, API_KEY } from './routes';
import { getQueryParams } from '../helpers/getQueryParams';

export interface IFetchData {
    city?: string;
    lat?: number;
    lon?: number;
}

async function fetchForecastFiveWeather(args: IFetchData) {
    try {
        const response = await fetch(
            `${routes.urlForecastFiveWeather()}?${getQueryParams({ city: args.city, lat: args.lat, lon: args.lon, appid: API_KEY })}`
        );

        if (!response.ok) {
            const error = await response.json();
            console.log('Ошибка ответа (статус не 200): ', error);
            return error.message as string;
        }

        const data: IForecastFiveWRes = await response.json();

        // console.log('response_2: ', data);

        return data;
    } catch (error) {
        console.log('Сервер не отвечает: ', error);
        return 'Oops, something went wrong! Try again';
    }
}

export { fetchForecastFiveWeather };

// Добавить типизацию данных из ответа (здесь и в других запросах)
// Добавить обработку ошибок от сервера и асинхронного кода (здесь и в других запросах)
