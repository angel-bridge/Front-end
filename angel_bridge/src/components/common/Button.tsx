import * as style from '@/components/common/Button.css';

interface ButtonProps {
    isValid: boolean;
    text: string;
}

export default function Button({ isValid, text }: ButtonProps) {
    return (
        <button
        className={`${style.signupButton} ${
            isValid ? style.signupButtonVariants.active : style.signupButtonVariants.disabled
        }`}
        disabled={!isValid}
        >
        <div
            className={
            isValid ? style.signupTextVariants.active : style.signupTextVariants.disabled
            }
        >
            {text}
        </div>
        </button>
    );
}
