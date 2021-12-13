import party from '../assets/party.png'
import sad from '../assets/sad.png'
import next from '../assets/next.png'

export default function EndGame({ incorretAnswers }) {
    return (
        <div className="end-game">
            <div className="title">
                <strong>{incorretAnswers === 0 ? "PARABÉNS!" : "Putz.."}</strong>
                {incorretAnswers === 0 ? <img src={party} alt="" /> : <img src={sad} alt="" />}
            </div>
            <p className="message">{incorretAnswers === 0 ? "Você não esqueceu de nenhum flashcard!" : `Você esqueceu ${incorretAnswers} flashcards.. Não desanime! Na próxima você consegue!`}</p>
            <PlayAgain />
        </div >
    )
}


function PlayAgain({ setCurrentScreen }) {
    return (
        <div className="button-play-again" onClick={() => window.location.reload(false)}>
            <strong>Jogar Novamente</strong>
            <img src={next} alt="" />
        </div>
    )


}