import Lobby from "./Componentes/Lobby";
import Game from "./Componentes/Game";

import "./css/styles.css";
import { useState } from 'react';

export default function App() {
    const [currentScreen, setCurrentScreen] = useState('lobby')

    return (
        <>
            {currentScreen === "lobby" ? <Lobby setCurrentScreen={setCurrentScreen} /> : <Game />}
        </>
    )
}