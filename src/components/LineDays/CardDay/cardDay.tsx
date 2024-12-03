import styles from './cardDay.module.scss';
import { IHourInfo } from '../../../types/entityTypes';
import { rewriteDate } from '../../../helpers/formatDate';
import { FC } from 'react';
import { SvgSelector as Icon } from '../../Common/SvgSelector';

export interface ICardDayProps {
    date: string;
    hourInfo: IHourInfo[];
}

const CardDay: FC<ICardDayProps> = ({ date, hourInfo }): JSX.Element => {
    const { dayOfWeek, dayOfMonth, month } = rewriteDate(date);

    const dayInfo = hourInfo.find((item) => item.time === '15:00:00' || !item.time);
    const nightInfo = hourInfo.find((item) => item.time === '00:00:00' || !item.time);

    const { temp: tempDay, weather } = dayInfo as IHourInfo;
    const { temp: tempNight } = nightInfo as IHourInfo;

    if (dayInfo && nightInfo) {
        return (
            <div className={styles.cardDay}>
                <div className={styles.dayDate}>
                    <div className={styles.day}>{dayOfWeek}</div>
                    <div className={styles.date}>{`${dayOfMonth} ${month}`}</div>
                </div>
                <Icon className={styles.icon} iconName={weather.icon} />
                <div className={styles.temp}>
                    <div className={styles.dayTemp}>{tempDay}&#176;C</div>
                    <div className={styles.nightTemp}>{tempNight}&#176;C</div>
                </div>
                <div className={styles.phenomena}>{weather.description}</div>
            </div>
        );
    } else {
        return <div></div>;
    }
};

export { CardDay };
