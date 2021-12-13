import logo from '../assets/logo.png';
import StartButton from './StartButton'

export default function Lobby({ setCurrentScreen, inputValue, setInputValue }) {

    return (
        <div className="lobby">
            <img src={logo} alt="" />
            <input type="number" placeholder="Sua meta de zaps" onChange={e => {
                setInputValue(e.target.value)
            }} />
            <StartButton setCurrentScreen={setCurrentScreen} inputValue={inputValue} />
        </div>
    )
}


