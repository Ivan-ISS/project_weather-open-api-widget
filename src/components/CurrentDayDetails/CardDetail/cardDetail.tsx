import styles from './cardDetail.module.scss';
import { FC } from 'react';
import { SvgSelector as Icon } from '../../Common/SvgSelector';

export interface ICardDetailProps {
    iconName: string;
    label: string;
    data: string;
}

const CardDetail: FC<ICardDetailProps> = ({ iconName, label, data }): JSX.Element => {
    return (
        <div className={styles.cardDetail}>
            <div className={styles.iconWrap}>
                <Icon iconName={iconName} />
            </div>
            <div className={styles.label}>{label}</div>
            <div className={styles.data}>{data}</div>
        </div>
    );
};

export { CardDetail };
