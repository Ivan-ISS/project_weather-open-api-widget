import { IForecastFiveWRes, IForecastFiveW } from '../types/entityTypes';
import { initialForecastFiveWeather, weatherIcons } from '../data';

function prepareForecastFiveWeather(inputData: IForecastFiveWRes | null): IForecastFiveW {
    let resultData: IForecastFiveW = initialForecastFiveWeather;
    resultData = [];

    if (inputData) {
        inputData.list.forEach((element, index) => {
            /* resultData[index].dtTxt = element.dt_txt;

            resultData[index].temp = Math.round(element.main.temp - 273);
            resultData[index].feelsLike = Math.round(element.main.feels_like - 273);
            resultData[index].tempMin = Math.round(element.main.temp_min - 273);
            resultData[index].tempMax = Math.round(element.main.temp_max - 273);
            resultData[index].pressure = Math.round(element.main.pressure * 0.7500637554192);
            resultData[index].humidity = element.main.humidity;
            resultData[index].clouds = element.clouds.all;
            resultData[index].visibility = element.visibility;
            resultData[index].weather = element.weather[0];
            resultData[index].wind = element.wind;
            resultData[index].pop = element.pop;
            resultData[index].pod = element.sys.pod;

            resultData[index].weather.icon = weatherIcons[resultData[index].weather.icon];
            resultData[index].wind.speed = Math.round(element.wind.speed * 3.6);
            resultData[index].weather.description =
                resultData[index].weather.description.charAt(0).toUpperCase() +
                resultData[index].weather.description.slice(1); */

            resultData.push({
                dtTxt: element.dt_txt,

                temp: Math.round(element.main.temp - 273),
                feelsLike: Math.round(element.main.feels_like - 273),
                tempMin: Math.round(element.main.temp_min - 273),
                tempMax: Math.round(element.main.temp_max - 273),
                pressure: Math.round(element.main.pressure * 0.7500637554192),
                humidity: element.main.humidity,
                clouds: element.clouds.all,
                visibility: element.visibility,
                weather: element.weather[0],
                wind: element.wind,
                pop: element.pop,
                pod: element.sys.pod,
            });

            resultData[index].weather.icon = weatherIcons[resultData[index].weather.icon];
            resultData[index].wind.speed = Math.round(element.wind.speed * 3.6);
            resultData[index].weather.description =
                resultData[index].weather.description.charAt(0).toUpperCase() +
                resultData[index].weather.description.slice(1);
        });
    }

    return resultData;
}

export { prepareForecastFiveWeather };
