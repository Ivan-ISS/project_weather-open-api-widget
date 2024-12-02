import styles from './lineDays.module.scss';
import { IForecastFiveW } from '../../types/entityTypes';
import { FC } from 'react';

export interface ILineDaysProps {
    forecastFiveWeather: IForecastFiveW[];
}

const LineDays: FC<ILineDaysProps> = ({ forecastFiveWeather }): JSX.Element => {
    return <div className={styles.lineDays}>{forecastFiveWeather.map((day) => day.date)}</div>;
};

export { LineDays };
