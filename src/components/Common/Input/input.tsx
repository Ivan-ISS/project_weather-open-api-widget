import styles from './input.module.scss';
import { FC } from 'react';
import { SvgSelector as SearchIcon } from '../../Common/SvgSelector';

export interface InputProps {
    placeholder: string;
    iconName?: string;
}

const Input: FC<InputProps> = ({ placeholder, iconName }): JSX.Element => {
    return (
        <div className={styles.inputWrap}>
            {iconName ? (
                <button className={styles.btnSearch}>
                    <SearchIcon iconName={iconName} className={styles.search} />
                </button>
            ) : null}
            <input className={styles.input} type={'text'} placeholder={placeholder} />
        </div>
    );
};

export { Input };
