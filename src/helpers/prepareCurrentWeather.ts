import { ICurrentWRes, ICurrentW } from '../types/entityTypes';
import { initialCurrentWeather, weatherIcons, countries, backgroundImages } from '../data';
import { formatDate } from './formatDate';

function prepareCurrentWeather(inputData: ICurrentWRes | null): ICurrentW {
    const resultData: ICurrentW = initialCurrentWeather;

    if (inputData) {
        resultData.dt = formatDate(Date.now() * 0.001 + inputData.timezone);

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
        resultData.visibility = inputData.visibility * 0.001;
        resultData.sunrise = formatDate(inputData.sys.sunrise + inputData.timezone).currentTime;
        resultData.sunset = formatDate(inputData.sys.sunset + inputData.timezone).currentTime;
        resultData.weather = inputData.weather[0];
        resultData.wind = inputData.wind;

        const str = resultData.weather.description;
        resultData.weather.description = str.charAt(0).toUpperCase() + str.slice(1);
        resultData.backImg = backgroundImages[resultData.weather.icon];
        resultData.weather.icon = weatherIcons[resultData.weather.icon];
        resultData.wind.speed = Math.round(inputData.wind.speed * 3.6);

        console.log(resultData.weather.icon);
        console.log(backgroundImages[resultData.weather.icon]);
    }

    return resultData;
}

export { prepareCurrentWeather };
