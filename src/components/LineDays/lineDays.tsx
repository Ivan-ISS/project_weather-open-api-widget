import styles from './lineDays.module.scss';
import { IForecastFiveW } from '../../types/entityTypes';
import { FC } from 'react';
import { CardDay } from './CardDay';

export interface ILineDaysProps {
    forecastFiveWeather: IForecastFiveW[];
}

const LineDays: FC<ILineDaysProps> = ({ forecastFiveWeather }): JSX.Element => {
    return (
        <div className={styles.lineDays}>
            {forecastFiveWeather.map(
                (day, index) =>
                    index > 0 && <CardDay key={index} date={day.date} hourInfo={day.hours} />
            )}
        </div>
    );
};

export { LineDays };
