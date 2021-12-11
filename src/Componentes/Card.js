import { useState } from "react";
import turn from '../assets/turn.png';

export default function Card({ deck, deckPosition, setDeckPosition, setIncorretAnswers, incorretAnswers }) {

    const [card, setCard] = useState('FrontFace');


    return (
        <div className="card-container">
            {card === "FrontFace" ? <CardFrontFace setCard={setCard} deck={deck} deckPosition={deckPosition} /> :
                <CardBackFace deck={deck} setDeckPosition={setDeckPosition} deckPosition={deckPosition} setCard={setCard} setIncorretAnswers={setIncorretAnswers} incorretAnswers={incorretAnswers} />}
        </div>
    )
}


function CardBackFace({ deck, setDeckPosition, deckPosition, setCard, setIncorretAnswers, incorretAnswers }) {
    const [choice, setChoice] = useState("")
    return (
        <div className={"card " + choice}>
            <HeaderBackFace deck={deck} deckPosition={deckPosition} />
            <Answer deck={deck} deckPosition={deckPosition} />
            {choice === "" ? <CardButtons setChoice={setChoice} setIncorretAnswers={setIncorretAnswers} incorretAnswers={incorretAnswers} /> :
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


function CardButtons({ setChoice, setIncorretAnswers, incorretAnswers }) {
    return (
        <div className="card-buttons">
            <div className="button aprendi" onClick={() => setChoice('aprendi')}>
                Aprendi agora
            </div>
            <div className="button nao-lembrei" onClick={() => { setChoice('nao-lembrei'); setIncorretAnswers(incorretAnswers + 1) }}>
                Não lembrei
            </div>
            <div className="button lembrei-com-esforco" onClick={() => setChoice('lembrei-com-esforco')}>
                Lembrei com esforço
            </div>
            <div className="button zap" onClick={() => setChoice('zap')}>
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
            {`${deckPosition + 1}/${deck.length}`}
            <div className="question">
                <strong>{deck[deckPosition].question}</strong>
            </div>
            <TurnCard setCard={setCard} />
        </div>
    )
}

function TurnCard({ setCard }) {
    return (
        <div className="turn-card">
            <img src={turn} alt="" onClick={() => setCard('BackFace')} />
        </div>
    )
}
