import logo from '../assets/logo.png';
import next from '../assets/next.png';
export default function Lobby({ setCurrentScreen }) {
    return (
        <div className="lobby">
            <img src={logo} alt="" />
            <div className="button-start-react" onClick={() => setCurrentScreen('game')}>
                <strong>Praticar React</strong>
                <img src={next} alt="" />
            </div>
        </div>
    )
}

