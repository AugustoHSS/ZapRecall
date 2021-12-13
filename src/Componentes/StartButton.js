import next from '../assets/next.png'

export default function StartButton({ setCurrentScreen, inputValue }) {


    return (
        <div className="button-start" onClick={inputValidation}>
            <strong data-identifier="start-zap-recall">Praticar React</strong>
            <img src={next} alt="" />
        </div>
    )


    function inputValidation() {
        if (inputValue >= 1) {
            setCurrentScreen('game')
        } else {
            alert("Meta de zaps deve ser no mínimo 1")
        }

    }

}