import styles from './input.module.scss';
import { FC, useState } from 'react';
import { SvgSelector } from '../../Common/SvgSelector';

export interface IInputProps {
    placeholder: string;
    iconName?: string;
    setInputValue: (inputValue: string) => void;
}

const Input: FC<IInputProps> = ({ placeholder, iconName, setInputValue }): JSX.Element => {
    const [value, setValue] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            setInputValue(value);
            setValue('');
        }
    };

    const handleClickSearch = () => {
        setInputValue(value);
        setValue('');
    };

    return (
        <div className={styles.inputWrap}>
            {iconName ? (
                <button className={styles.btnIcon} onClick={handleClickSearch}>
                    <SvgSelector iconName={iconName} className={styles.icon} />
                </button>
            ) : null}
            <input
                className={styles.input}
                value={value}
                type={'text'}
                placeholder={placeholder}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
            />
        </div>
    );
};

export { Input };
