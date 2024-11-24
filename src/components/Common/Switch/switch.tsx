import styles from './switch.module.scss';
import { FC, useState, HTMLAttributes } from 'react';

export interface ISwitchProps extends HTMLAttributes<HTMLInputElement> {
    isActive: boolean;
    label?: string;
}

const Switch: FC<ISwitchProps> = ({ isActive, label, ...props }) => {
    const [isChecked, setIsChecked] = useState(isActive);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };

    return (
        <div>
            <label className={styles.switch}>
                <input
                    {...props}
                    className={styles.input}
                    type={'checkbox'}
                    checked={isChecked}
                    onChange={handleChange}
                />
                <span className={styles.slider}></span>
            </label>
            {label && ' - ' + label}
        </div>
    );
};

export { Switch };
