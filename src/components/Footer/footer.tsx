import styles from './footer.module.scss';
import { FC, ReactNode } from 'react';

interface IFooterProps {
    children: JSX.Element | ReactNode;
}

const Footer: FC<IFooterProps> = ({ children }): JSX.Element => {
    return (
        <div className={styles.footer}>
            <div
                className={`
                    ${styles.footerContainer}
                    ${'containerCommon'}`}
            >
                {children}
            </div>
        </div>
    );
};

export { Footer };
