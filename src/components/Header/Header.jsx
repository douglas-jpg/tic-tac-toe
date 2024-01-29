import styles from "./Header.module.css";

export default function Header({ jogador, ganhador }) {
    return (
        <>
            <h1 className={styles.header}>Tic Tac Toe</h1>
            <p>
                Vez do jogador: <span>{jogador}</span>
            </p>
            {ganhador && <p>Parabéns {ganhador}, você ganhou!!!</p>}
            <hr />
        </>
    );
}
