import { IForecastFiveWRes, IForecastFiveW } from '../types/entityTypes';
import { weatherIcons } from '../data';

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
                temp: Math.round(item.main.temp - 273),
                feelsLike: Math.round(item.main.feels_like - 273),
                tempMin: Math.round(item.main.temp_min - 273),
                tempMax: Math.round(item.main.temp_max - 273),
                pressure: Math.round(item.main.pressure * 0.7500637554192),
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
                    speed: item.wind.speed * 3.6,
                    deg: item.wind.deg,
                    gust: item.wind.gust,
                },
                pop: item.pop,
                pod: item.sys.pod,
            });
        });
    }

    return Object.values(resultData);
}

export { prepareForecastFiveWeather };
