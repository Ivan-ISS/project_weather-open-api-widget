import styles from './header.module.scss';
import { FC, ReactNode } from 'react';

interface IHeaderProps {
    children: JSX.Element | ReactNode;
}

const Header: FC<IHeaderProps> = ({ children }): JSX.Element => {
    return (
        <div className={styles.header}>
            <div
                className={`
                    ${styles.headerContainer}
                    ${'containerCommon'}`}
            >
                {children}
            </div>
        </div>
    );
};

export { Header };
