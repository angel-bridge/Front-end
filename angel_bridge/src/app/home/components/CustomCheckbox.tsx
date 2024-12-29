import React from 'react';
import * as styles from '@/app/home/styles/CustomCheckbox.css';

interface CustomCheckboxProps {
    isChecked: boolean;
    setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
    id: string;
}

export const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
    isChecked,
    setIsChecked,
    id,
}) => {
    return (
        <div className={styles.container}>
            <input
                type="checkbox"
                id={id}
                checked={isChecked}
                onChange={() => setIsChecked((prev) => !prev)}
                className={styles.hiddenCheckbox}
            />
            <label
                htmlFor={id}
                className={`${styles.styledCheckbox} ${
                    isChecked ? styles.checkboxVariants.checked : styles.checkboxVariants.unchecked
                }`}
            />
        </div>
    );
};
