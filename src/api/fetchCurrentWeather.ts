import { routes, API_KEY } from './routes';
import { getQueryParams } from '../helpers/getQueryParams';

export interface IFetchData {
    lat: number;
    lon: number;
}

async function fetchCurrentWeather(args: IFetchData) {
    const response = await fetch(
        `${routes.urlCurrentWeather()}?${getQueryParams({ lat: args.lat, lon: args.lon, appid: API_KEY })}`
    );
    const data = await response.json();

    return data;
}

export { fetchCurrentWeather };
