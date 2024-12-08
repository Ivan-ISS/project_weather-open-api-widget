import styles from './dateBlock.module.scss';
import { FC } from 'react';

export interface IDateBlockProps {
    dayWeek: string;
    currentDate: string;
    currentTime: string;
}

const DateBlock: FC<IDateBlockProps> = ({ dayWeek, currentDate, currentTime }) => {
    return (
        <div className={styles.dateBlock}>
            <div className={styles.day}>
                <div className={styles.dayWeek}>{dayWeek}</div>
                <div className={styles.currentDate}>{currentDate}</div>
            </div>
            <div className={styles.currentTime}>{currentTime}</div>
        </div>
    );
};

export { DateBlock };
