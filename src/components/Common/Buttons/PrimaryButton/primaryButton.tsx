import styles from './primaryButton.module.scss';
import { ButtonHTMLAttributes, FC } from 'react';
import { SvgSelector } from '../../SvgSelector';

export interface IPrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: number | string;
    iconName?: string;
}

const PrimaryButton: FC<IPrimaryButtonProps> = ({ text, iconName, ...props }): JSX.Element => {
    const handleClickBtn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (props.onClick) {
            props.onClick(e);
        }
    };

    return (
        <button
            {...props}
            onClick={handleClickBtn}
            className={`
                ${styles.button}
            `}
        >
            {iconName ? <SvgSelector iconName={iconName} className={styles.icon} /> : null}
            <div className={styles.text}>{text}</div>
        </button>
    );
};

export { PrimaryButton };
