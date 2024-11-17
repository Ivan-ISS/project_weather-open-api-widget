import { HTMLAttributes } from 'react';
import styles from './picture.module.scss';

export interface IPictureProps extends HTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
}

const Picture = ({ src, alt, ...props }: IPictureProps) => {
    return <img {...props} className={styles.picture} src={src} alt={alt} />;
};

export { Picture };
