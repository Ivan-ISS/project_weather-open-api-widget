import { ICurrentWRes, ICurrentW } from '../types/entityTypes';
import {
    initialCurrentWeather,
    weatherIcons,
    countries,
    backgroundImages,
    conversionFactors,
} from '../data';
import { formatDate } from './formatDate';

function prepareCurrentWeather(inputData: ICurrentWRes | null): ICurrentW {
    const resultData: ICurrentW = initialCurrentWeather;

    if (inputData) {
        resultData.dt = formatDate(Date.now() * 0.001 + inputData.timezone);

        resultData.city = inputData.name;
        resultData.country = countries[inputData.sys.country];
        resultData.timezone = inputData.timezone;

        resultData.temp = Math.round(inputData.main.temp - conversionFactors.temp);
        resultData.feelsLike = Math.round(inputData.main.feels_like - conversionFactors.temp);
        resultData.tempMin = Math.round(inputData.main.temp_min - conversionFactors.temp);
        resultData.tempMax = Math.round(inputData.main.temp_max - conversionFactors.temp);
        resultData.pressure = Math.round(inputData.main.pressure * conversionFactors.pressure);
        resultData.humidity = inputData.main.humidity;
        resultData.clouds = inputData.clouds.all;
        resultData.visibility = inputData.visibility * conversionFactors.visibility;
        resultData.sunrise = formatDate(inputData.sys.sunrise + inputData.timezone).currentTime;
        resultData.sunset = formatDate(inputData.sys.sunset + inputData.timezone).currentTime;
        resultData.weather.id = inputData.weather[0].id;
        resultData.weather.main = inputData.weather[0].main;
        resultData.weather.description =
            inputData.weather[0].description.charAt(0).toUpperCase() +
            inputData.weather[0].description.slice(1);
        resultData.weather.icon = weatherIcons[inputData.weather[0].icon];
        resultData.wind.deg = inputData.wind.deg;
        resultData.wind.gust = inputData.wind.gust;
        resultData.wind.speed = Math.round(inputData.wind.speed * conversionFactors.speed);
        resultData.backImg = backgroundImages[inputData.weather[0].icon];
    }

    return resultData;
}

export { prepareCurrentWeather };
