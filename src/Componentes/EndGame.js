import party from '../assets/party.png'
import sad from '../assets/sad.png'
import next from '../assets/next.png'

export default function EndGame({ incorretAnswers, numberOfZaps, inputValue }) {

    return (
        <div className="end-game">
            <div className="title">
                <strong>{numberOfZaps >= inputValue ? "PARABÉNS!" : "Putz.."}</strong>
                {numberOfZaps >= inputValue ? <img src={party} alt="" /> : <img src={sad} alt="" />}
            </div>
            <p className="message">{numberOfZaps >= inputValue ? "Você não esqueceu de nenhum flashcard!" : `Você esqueceu ${incorretAnswers} flashcards.. Não desanime! Na próxima você consegue!`}</p>
            <PlayAgain />
        </div >
    )
}

function PlayAgain() {
    return (
        <div className="button-play-again" onClick={() => window.location.reload(false)}>
            <strong>Jogar Novamente</strong>
            <img src={next} alt="" />
        </div>
    )


}