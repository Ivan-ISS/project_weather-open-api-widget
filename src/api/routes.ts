const CURRENT_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '71785f3da74dc6dd12f7757a1f01cf6e';

interface IRoutes {
    urlCurrentWeather: () => string;
}

const routes: IRoutes = {
    urlCurrentWeather: () => CURRENT_WEATHER_URL,
};

export { routes, API_KEY, CURRENT_WEATHER_URL };
