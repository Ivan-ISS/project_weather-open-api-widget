import { IForecastFiveWRes, IForecastFiveW } from '../types/entityTypes';
import { weatherIcons, conversionFactors, initialForecastFiveWeather } from '../data';

function prepareForecastFiveWeather(inputData: IForecastFiveWRes | null): IForecastFiveW[] {
    const resultData: { [date: string]: IForecastFiveW } = {};

    if (inputData) {
        inputData.list.forEach((item) => {
            const date = item.dt_txt.split(' ')[0];
            const time = item.dt_txt.split(' ')[1];

            if (!resultData[date]) {
                resultData[date] = {
                    date: date,
                    hours: [],
                };
            }

            resultData[date].hours.push({
                time: time,
                temp: Math.round(item.main.temp - conversionFactors.temp),
                feelsLike: Math.round(item.main.feels_like - conversionFactors.temp),
                tempMin: Math.round(item.main.temp_min - conversionFactors.temp),
                tempMax: Math.round(item.main.temp_max - conversionFactors.temp),
                pressure: Math.round(item.main.pressure * conversionFactors.pressure),
                humidity: item.main.humidity,
                clouds: item.clouds.all,
                visibility: item.visibility,
                weather: {
                    id: item.weather[0].id,
                    main: item.weather[0].main,
                    description:
                        item.weather[0].description.charAt(0).toUpperCase() +
                        item.weather[0].description.slice(1),
                    icon: weatherIcons[item.weather[0].icon],
                },
                wind: {
                    speed: item.wind.speed * conversionFactors.speed,
                    deg: item.wind.deg,
                    gust: item.wind.gust,
                },
                pop: item.pop,
                pod: item.sys.pod,
            });
        });
    } else {
        return initialForecastFiveWeather;
    }

    return Object.values(resultData);
}

export { prepareForecastFiveWeather };
