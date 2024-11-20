import styles from './currentDay.module.scss';
import { FC } from 'react';
import { SvgSelector as LocationIcon } from '../Common/SvgSelector';
import { SvgSelector as SunIcon } from '../Common/SvgSelector';

const CurrentDay: FC = (): JSX.Element => {
    return (
        <div className={styles.currentDay}>
            <div className={styles.upperPart}>
                <LocationIcon iconName={'location'} className={styles.location} />
                <div>{'Perm'}</div>
            </div>
            <div className={styles.middlePart}>
                <div className={styles.day}>
                    <div className={styles.weekDay}>Friday</div>
                    <div className={styles.date}>11 Dec, 2024</div>
                </div>
                <div className={styles.localTime}>15:55</div>
            </div>
            <div className={styles.lowerPart}>
                <SunIcon iconName={'sun'} className={styles.sunIcon} />
                <div className={styles.description}>
                    <div className={styles.temp}>
                        <div className={styles.dayTemp}>5&#176;C</div>
                        <div className={styles.nightTemp}>/ 1&#176;C</div>
                    </div>
                    <div className={styles.phenomena}>Пасмурно</div>
                </div>
            </div>
        </div>
    );
};

export { CurrentDay };
