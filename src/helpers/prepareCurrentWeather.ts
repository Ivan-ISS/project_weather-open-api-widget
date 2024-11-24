import { ICurrentWRes, ICurrentW } from '../types/entityTypes';
import { initialCurrentWeather, icons, countries } from '../data';
import { formatDate } from './formatDate';

function prepareCurrentWeather(inputData: ICurrentWRes | null): ICurrentW {
    const resultData: ICurrentW = initialCurrentWeather;

    if (inputData) {
        resultData.dt = formatDate(Date.now() / 1000 + inputData.timezone);

        resultData.city = inputData.name;
        resultData.country = countries[inputData.sys.country];
        resultData.timezone = inputData.timezone;

        resultData.temp = Math.round(inputData.main.temp - 273);
        resultData.feelsLike = Math.round(inputData.main.feels_like - 273);
        resultData.tempMin = Math.round(inputData.main.temp_min - 273);
        resultData.tempMax = Math.round(inputData.main.temp_max - 273);
        resultData.pressure = Math.round(inputData.main.pressure * 0.7500637554192);
        resultData.humidity = inputData.main.humidity;
        resultData.clouds = inputData.clouds.all;
        resultData.visibility = inputData.visibility;
        resultData.sunrise = inputData.sys.sunrise;
        resultData.sunset = inputData.sys.sunset;
        resultData.weather = inputData.weather[0];
        resultData.wind = inputData.wind;

        const str = resultData.weather.description;
        resultData.weather.description = str.charAt(0).toUpperCase() + str.slice(1);
        resultData.weather.icon = icons[resultData.weather.icon];
    }

    return resultData;
}

export { prepareCurrentWeather };
