import styles from './button.module.css';

function Button({personType, fn, text}) {
    return (
        <button
            className={`${styles.button} ${styles[personType]}`}
            onClick={fn}
        >
            {text}
        </button>
    );
}

export default Button;

