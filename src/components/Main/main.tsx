import styles from './main.module.scss';
import { FC, ReactNode } from 'react';

interface IMainProps {
    children: JSX.Element | ReactNode;
}

const Main: FC<IMainProps> = ({ children }): JSX.Element => {
    return (
        <div className={styles.main}>
            <div
                className={`
                    ${styles.mainContainer}
                    ${'containerCommon'}
                `}
            >
                {children}
            </div>
        </div>
    );
};

export { Main };
