import styles from './weatherBlock.module.scss';
import { FC } from 'react';
import { SvgSelector as Icon } from '../../../Common/SvgSelector';

export interface IWeatherBlockProps {
    icon: string;
    temp: number;
    tempMin: number;
    feelsLike: number;
    description: string;
}

const WeatherBlock: FC<IWeatherBlockProps> = ({ icon, temp, tempMin, feelsLike, description }) => {
    return (
        <div className={styles.weatherBlock}>
            <Icon iconName={icon} />
            <div className={styles.info}>
                <div className={styles.temp}>
                    <div className={styles.dayTemp}>{temp}&#176;C</div>
                    <div className={styles.nightTemp}>/ {tempMin}&#176;C</div>
                </div>
                <div>
                    <div className={styles.phenomena}>{description}</div>
                    <div className={styles.tempFeelsLike}>{`Feels like ${feelsLike}`}&#176;</div>
                </div>
            </div>
        </div>
    );
};

export { WeatherBlock };
