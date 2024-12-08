import styles from './locationBlock.module.scss';
import { FC } from 'react';
import { SvgSelector as Icon } from '../../../Common/SvgSelector';

export interface ILocationBlockProps {
    city: string;
    country: string;
}

const LocationBlock: FC<ILocationBlockProps> = ({ city, country }) => {
    return (
        <div className={styles.locationBlock}>
            <Icon iconName={'location'} />
            <div>{`${city}, ${country}`}</div>
        </div>
    );
};

export { LocationBlock };
