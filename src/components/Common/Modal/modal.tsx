import styles from './modal.module.scss';
import { FC, HTMLAttributes, ReactNode } from 'react';

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
    insert: JSX.Element | ReactNode;
    overlay?: boolean;
}

const Modal: FC<ModalProps> = ({ insert, ...props }) => {
    return (
        <div {...props} className={styles.modal}>
            {insert}
        </div>
    );
};

export { Modal };
