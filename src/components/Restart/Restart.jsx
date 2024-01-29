import styles from "./Restart.module.css";

export default function Restart({ reiniciar }) {
    return (
        <div className={styles.container}>
            <button className={styles.reset} onClick={reiniciar}>
                Novo jogo
            </button>
        </div>
    );
}
