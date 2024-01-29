import { useState } from "react";
import Board from "../Board/Board";
import Header from "../Header/Header";
import Restart from "../Restart/Restart";

export default function Jogo() {
    const [xIsActive, setXIsActive] = useState(true);
    const [blocks, setBlocks] = useState(Array(9).fill(null));

    function handlePlay(nextBlock) {
        setBlocks(nextBlock);
        setXIsActive(!xIsActive);
    }

    function isWinner(blocks) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (
                blocks[a] &&
                blocks[a] === blocks[b] &&
                blocks[a] === blocks[c]
            ) {
                return blocks[a];
            }
        }
        return null;
    }

    const winner = isWinner(blocks);
    let status;
    if (winner) {
        status = winner;
    } else {
        status = xIsActive ? "X" : "O";
    }

    function newGame() {
        setBlocks(Array(9).fill(null));
        setXIsActive(true);
    }

    return (
        <>
            <Header jogador={status} ganhador={winner} />
            <Board
                xIsActive={xIsActive}
                blocks={blocks}
                onPlay={handlePlay}
                isWinner={winner}
            />
            <Restart reiniciar={newGame} />
        </>
    );
}
