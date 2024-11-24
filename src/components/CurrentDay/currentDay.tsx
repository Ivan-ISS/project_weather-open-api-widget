import styles from './currentDay.module.scss';
import { ICurrentW } from '../../types/entityTypes';
import { FC } from 'react';
import { SvgSelector as LocationIcon } from '../Common/SvgSelector';
import { SvgSelector as SunIcon } from '../Common/SvgSelector';

export interface ICurrentDay {
    currentWeather: ICurrentW;
}

const CurrentDay: FC<ICurrentDay> = ({ currentWeather }): JSX.Element => {
    const { dt, city, country, temp, tempMin, feelsLike, weather } = currentWeather;

    return (
        <div className={styles.currentDay}>
            <div className={styles.upperPart}>
                <LocationIcon iconName={'location'} className={styles.location} />
                <div>{`${city}, ${country}`}</div>
            </div>
            <div className={styles.middlePart}>
                <div className={styles.day}>
                    <div className={styles.weekDay}>{dt.dayWeek}</div>
                    <div className={styles.date}>{dt.currentDate}</div>
                </div>
                <div className={styles.localTime}>{dt.currentTime}</div>
            </div>
            <div className={styles.lowerPart}>
                <SunIcon iconName={'clearDay'} className={styles.sunIcon} />
                <div className={styles.description}>
                    <div className={styles.temp}>
                        <div className={styles.dayTemp}>{temp}&#176;C</div>
                        <div className={styles.nightTemp}>/ {tempMin}&#176;C</div>
                    </div>
                    <div>
                        <div className={styles.phenomena}>{weather.description}</div>
                        <div className={styles.tempFeelsLike}>
                            {`Feels like ${feelsLike}`}&#176;
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { CurrentDay };
