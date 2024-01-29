import styles from "./Block.module.css";

export default function Block({ value, onBlock }) {
    return (
        <button className={styles.block} onClick={onBlock}>
            {value}
        </button>
    );
}
