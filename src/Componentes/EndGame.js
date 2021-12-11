import party from '../assets/party.png'
import sad from '../assets/sad.png'

export default function EndGame({ incorretAnswers }) {
    return (
        <div className="end-game">
            <div className="title">
                <strong>{incorretAnswers === 0 ? "PARABÉNS!" : "Putz.."}</strong>
                {incorretAnswers === 0 ? <img src={party} alt="" /> : <img src={sad} alt="" />}
            </div>
            <p className="message">{incorretAnswers === 0 ? "Você não esqueceu de nenhum flashcard!" : `Você esqueceu ${incorretAnswers} flashcards.. Não desanime! Na próxima você consegue!`}</p>
        </div >
    )
}