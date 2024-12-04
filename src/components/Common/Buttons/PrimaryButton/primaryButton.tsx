import styles from './primaryButton.module.scss';
import { ButtonHTMLAttributes, FC } from 'react';

export interface IPrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: number | string;
    isActive?: boolean;
    isDisabled?: boolean;
}

const PrimaryButton: FC<IPrimaryButtonProps> = ({
    text,
    isActive,
    isDisabled,
    ...props
}): JSX.Element => {
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
                ${isActive ? styles.active : null}
                ${isDisabled ? styles.disabled : null}
            `}
            disabled={isDisabled}
        >
            <div>{text}</div>
        </button>
    );
};

export { PrimaryButton };
