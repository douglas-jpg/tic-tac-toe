import { row } from "./Board.module.css";
import Block from "../Block/Block";

export default function Board({ xIsActive, blocks, onPlay, isWinner }) {
    function handleClick(i) {
        if (blocks[i] || isWinner) {
            return;
        }
        const nextBlock = blocks.slice();

        if (xIsActive) {
            nextBlock[i] = "X";
        } else {
            nextBlock[i] = "O";
        }
        onPlay(nextBlock);
    }

    return (
        <>
            <div className={row}>
                <Block
                    value={blocks[0]}
                    onBlock={() => {
                        handleClick(0);
                    }}
                />
                <Block
                    value={blocks[1]}
                    onBlock={() => {
                        handleClick(1);
                    }}
                />
                <Block
                    value={blocks[2]}
                    onBlock={() => {
                        handleClick(2);
                    }}
                />
            </div>
            <div className={row}>
                <Block
                    value={blocks[3]}
                    onBlock={() => {
                        handleClick(3);
                    }}
                />
                <Block
                    value={blocks[4]}
                    onBlock={() => {
                        handleClick(4);
                    }}
                />
                <Block
                    value={blocks[5]}
                    onBlock={() => {
                        handleClick(5);
                    }}
                />
            </div>
            <div className={row}>
                <Block
                    value={blocks[6]}
                    onBlock={() => {
                        handleClick(6);
                    }}
                />
                <Block
                    value={blocks[7]}
                    onBlock={() => {
                        handleClick(7);
                    }}
                />
                <Block
                    value={blocks[8]}
                    onBlock={() => {
                        handleClick(8);
                    }}
                />
            </div>
        </>
    );
}
