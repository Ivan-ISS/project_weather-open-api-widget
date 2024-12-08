import styles from './closeButton.module.scss';
import { FC, HTMLAttributes } from 'react';

export interface ICloseButtonProps extends HTMLAttributes<HTMLButtonElement> {
    show?: boolean;
}

const CloseButton: FC<ICloseButtonProps> = ({ show, ...props }) => {
    return (
        <button
            {...props}
            className={`${styles.closeButton} ${show ? styles.closeButtonShow : null}`}
        ></button>
    );
};

export { CloseButton };
