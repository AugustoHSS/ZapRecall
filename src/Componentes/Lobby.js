import react from "react";


export default function Lobby({ setPaginaAtual }) {
    return (
        <div className="lobby">
            <img src="./assets/logo.png" alt="" />
            <div className="button-start-react" onClick={() => setPaginaAtual('game')}>
                <strong>Praticar React</strong>
                <img src="./assets/next.png" alt="" />
            </div>
        </div>
    )
}

