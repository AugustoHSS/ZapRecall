export default function Lobby({ setCurrentScren }) {
    return (
        <div className="lobby">
            <img src="./assets/logo.png" alt="" />
            <div className="button-start-react" onClick={() => setCurrentScren('game')}>
                <strong>Praticar React</strong>
                <img src="./assets/next.png" alt="" />
            </div>
        </div>
    )
}

