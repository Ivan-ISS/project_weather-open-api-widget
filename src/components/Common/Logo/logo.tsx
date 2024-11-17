import styles from './logo.module.scss';
import { FC } from 'react';
import { Picture } from '../Picture';
import logoImg from '../../../assets/images/png/earth.png';

const Logo: FC = (): JSX.Element => {
    return (
        <div className={styles.logo}>
            <div className={styles.imgContainer}>
                <Picture src={logoImg} alt={'logo'} />
            </div>
            <div className={styles.text}>{'weather name'}</div>
        </div>
    );
};

export { Logo };
