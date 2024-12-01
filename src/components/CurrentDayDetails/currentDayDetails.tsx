import styles from './currentDayDetails.module.scss';
import { ICurrentW } from '../../types/entityTypes';
import { indicatorIcons } from '../../data';
import { FC } from 'react';
import { CardDetail } from './CardDetail';

export interface ICurrentDay {
    currentWeather: ICurrentW;
}

const CurrentDayDetails: FC<ICurrentDay> = ({ currentWeather }): JSX.Element => {
    const { humidity, visibility, wind, sunrise, sunset, backImg } = currentWeather;
    const list = [humidity, visibility, wind.speed, sunrise, sunset];

    return (
        <div className={styles.currentDayDetails}>
            {indicatorIcons.map((icon, index) => (
                <CardDetail
                    key={index}
                    iconName={icon.name.toLowerCase()}
                    label={icon.name}
                    data={`${list[index]} ${icon.text}`}
                />
            ))}
            <div className={styles.backgroundImage}>
                <img className={styles.image} src={backImg} alt={'background'} />
            </div>
        </div>
    );
};

export { CurrentDayDetails };
