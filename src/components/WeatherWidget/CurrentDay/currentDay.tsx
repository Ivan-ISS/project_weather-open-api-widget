import styles from './currentDay.module.scss';
import { ICurrentW } from '../../../types/entityTypes';
import { FC } from 'react';
import { LocationBlock } from './LocationBlock';
import { DateBlock } from './DateBlock';
import { WeatherBlock } from './WeatherBlock';

export interface ICurrentDayProps {
    currentWeather: ICurrentW;
}

const CurrentDay: FC<ICurrentDayProps> = ({ currentWeather }): JSX.Element => {
    const { dt, city, country, temp, tempMin, feelsLike, weather } = currentWeather;

    return (
        <div className={styles.currentDay}>
            <LocationBlock city={city} country={country} />
            <DateBlock
                dayWeek={dt.dayWeek}
                currentDate={dt.currentDate}
                currentTime={dt.currentTime}
            />
            <WeatherBlock
                icon={weather.icon}
                temp={temp}
                tempMin={tempMin}
                feelsLike={feelsLike}
                description={weather.description}
            />
        </div>
    );
};

export { CurrentDay };
