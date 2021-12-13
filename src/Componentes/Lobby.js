import logo from '../assets/logo.png';
import StartButton from './StartButton'

export default function Lobby({ setCurrentScreen }) {
    return (
        <div className="lobby">
            <img src={logo} alt="" />
            <StartButton setCurrentScreen={setCurrentScreen} />
        </div>
    )
}


