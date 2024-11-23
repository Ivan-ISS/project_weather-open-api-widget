import styles from './input.module.scss';
import { FC, useState } from 'react';
import { SvgSelector as SearchIcon } from '../../Common/SvgSelector';

export interface InputProps {
    placeholder: string;
    iconName?: string;
    setInputValue: (inputValue: string) => void;
}

const Input: FC<InputProps> = ({ placeholder, iconName, setInputValue }): JSX.Element => {
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
                <button className={styles.btnSearch} onClick={handleClickSearch}>
                    <SearchIcon iconName={iconName} className={styles.search} />
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
