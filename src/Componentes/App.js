import Lobby from "./Lobby";
import Game from "./Game";
import { useState } from 'react';

export default function App() {
    const [currentScreen, setCurrentScren] = useState('lobby')

    return (
        <>
            {currentScreen === "lobby" ? <Lobby setCurrentScren={setCurrentScren} /> : <Game />}
        </>
    )
}