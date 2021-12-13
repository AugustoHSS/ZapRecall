import { useState } from "react";
import turn from '../assets/turn.png';

export default function Card({ deck, deckPosition, setDeckPosition, setIncorretAnswers, incorretAnswers, numberOfZaps, setNumberOfZaps }) {
    const [card, setCard] = useState('FrontFace');

    return (
        <div className="card-container" data-identifier="flashcard">
            {card === "FrontFace" ? <CardFrontFace setCard={setCard} deck={deck} deckPosition={deckPosition} /> :
                <CardBackFace deck={deck} setDeckPosition={setDeckPosition} deckPosition={deckPosition} setCard={setCard} setIncorretAnswers={setIncorretAnswers}
                    incorretAnswers={incorretAnswers} numberOfZaps={numberOfZaps} setNumberOfZaps={setNumberOfZaps} />}
        </div>
    )
}


function CardBackFace({ deck, deckPosition, setIncorretAnswers, setDeckPosition, setCard, incorretAnswers, setNumberOfZaps, numberOfZaps }) {
    const [choice, setChoice] = useState("")
    return (
        <div className={"card " + choice}>
            <HeaderBackFace deck={deck} deckPosition={deckPosition} />
            <Answer deck={deck} deckPosition={deckPosition} />
            {choice === "" ? <CardButtons setChoice={setChoice} setIncorretAnswers={setIncorretAnswers} incorretAnswers={incorretAnswers} setNumberOfZaps={setNumberOfZaps} numberOfZaps={numberOfZaps} /> :
                <NextCard setDeckPosition={setDeckPosition} deckPosition={deckPosition} setChoice={setChoice} setCard={setCard} />}
        </div>
    )
}


function HeaderBackFace({ deck, deckPosition }) {
    return (
        <div className="header-backface">
            <strong>{deck[deckPosition].question}</strong>
            <div className="counting-card">
                {`${deckPosition + 1}/${deck.length}`}
            </div>
        </div>
    )
}


function CardButtons({ setChoice, setIncorretAnswers, incorretAnswers, numberOfZaps, setNumberOfZaps }) {
    return (
        <div className="card-buttons">
            <div className="button aprendi" onClick={() => { setChoice('aprendi'); setIncorretAnswers(incorretAnswers + 1) }}>
                <p>Aprendi agora</p>
            </div>
            <div className="button nao-lembrei" onClick={() => { setChoice('nao-lembrei'); setIncorretAnswers(incorretAnswers + 1) }}>
                <p>Não lembrei</p>
            </div>
            <div className="button lembrei-com-esforco" onClick={() => { setChoice('lembrei-com-esforco'); setIncorretAnswers(incorretAnswers + 1) }}>
                <p>Lembrei com esforço</p>
            </div>
            <div className="button zap" onClick={() => { setChoice('zap'); setNumberOfZaps(numberOfZaps + 1) }}>
                <strong>Zap!</strong>
            </div>
        </div >
    )

}

function NextCard({ setDeckPosition, deckPosition, setChoice, setCard }) {
    return (
        <div className="turn-card">
            <img src={turn} alt="" onClick={() => { setDeckPosition(deckPosition + 1); setChoice(""); setCard('FrontFace') }} />
        </div>
    )
}

function Answer({ deck, deckPosition }) {
    return (
        <div className="answer">
            {deck[deckPosition].answer}
        </div>
    )
}

function CardFrontFace({ setCard, deck, deckPosition }) {
    return (
        <div className="card">
            <p data-identifier="counter">{`${deckPosition + 1}/${deck.length}`}</p>
            <div className="question">
                <strong>{deck[deckPosition].question}</strong>
            </div>
            <TurnCard setCard={setCard} />
        </div>
    )
}

function TurnCard({ setCard }) {
    return (
        <div className="turn-card" data-identifier="arrow">
            <img src={turn} alt="" onClick={() => setCard('BackFace')} />
        </div>
    )
}
