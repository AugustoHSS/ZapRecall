import Lobby from "./Lobby";
import Game from "./Game";
import { useState } from 'react';

export default function App() {
    const [paginaAtual, setPaginaAtual] = useState('lobby')

    return (
        <>
            {paginaAtual === "lobby" ? <Lobby setPaginaAtual={setPaginaAtual} /> : <Game />}
        </>
    )
}