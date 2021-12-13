import next from '../assets/next.png'

export default function StartButton({ setCurrentScreen }) {
    return (
        <div className="button-start-react" onClick={() => setCurrentScreen('game')}>
            <strong data-identifier="start-zap-recall">Praticar React</strong>
            <img src={next} alt="" />
        </div>
    )


}