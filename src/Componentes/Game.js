import { useState } from 'react';
export default function Game() {
    const deck = [
        { question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript" },
        { question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces" },
        { question: "Componentes devem iniciar com __", answer: "letra maiúscula" },
        { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
        { question: "O ReactDOM nos ajuda __", answer: "interagindo com a DOM para colocar componentes React na mesma" },
        { question: "Usamos o npm para __", answer: "gerenciar os pacotes necessários e suas dependências" },
        { question: "Usamos props para __", answer: "passar diferentes informações para componentes " },
        { question: "Usamos estado (state) para __", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" },
    ]
    const [deckPosition, setDeckPosition] = useState(0);
    const [incorretAnswers, setIncorretAnswers] = useState(0);
    return (
        <div className="game">
            <div className="header">
                <img src="./assets/logo-mini.png" alt="" />
            </div>
            {deckPosition === deck.length ? < EndGame incorretAnswers={incorretAnswers} /> :
                <Card deck={deck} deckPosition={deckPosition} setDeckPosition={setDeckPosition} setIncorretAnswers={setIncorretAnswers} incorretAnswers={incorretAnswers} />}
        </div>
    )

}

function EndGame({ incorretAnswers }) {
    return (
        <div className="end-game">
            <div className="title">
                <strong>{incorretAnswers === 0 ? "PARABÉNS!" : "Putz.."}</strong>
                <p className="emote">{incorretAnswers === 0 ? "🥳" : "😥"}</p>
            </div>
            <p className="message">{incorretAnswers === 0 ? "Você não esqueceu de nenhum flashcard!" : `Você esqueceu ${incorretAnswers} flashcards.. Não desanime! Na próxima você consegue!`}</p>
        </div>
    )
}

function Card({ deck, deckPosition, setDeckPosition, setIncorretAnswers, incorretAnswers }) {

    const [card, setCard] = useState('FrontFace');


    return (
        <div className="card-container">
            {card === "FrontFace" ? <CardFrontFace setCard={setCard} deck={deck} deckPosition={deckPosition} /> :
                <CardBackFace deck={deck} setDeckPosition={setDeckPosition} deckPosition={deckPosition} setCard={setCard} setIncorretAnswers={setIncorretAnswers} incorretAnswers={incorretAnswers} />}
        </div>
    )
}


function CardBackFace({ deck, setDeckPosition, deckPosition, setCard, setIncorretAnswers, incorretAnswers }) {
    const [escolha, setEscolha] = useState("")
    return (
        <div className={"card " + escolha}>
            <HeaderBackFace deck={deck} deckPosition={deckPosition} />
            <Answer deck={deck} deckPosition={deckPosition} />
            {escolha === "" ? <CardButtons setEscolha={setEscolha} setIncorretAnswers={setIncorretAnswers} incorretAnswers={incorretAnswers} /> :
                <NextCard setDeckPosition={setDeckPosition} deckPosition={deckPosition} setEscolha={setEscolha} setCard={setCard} />}
        </div>
    )
}


function CardButtons({ setEscolha, setIncorretAnswers, incorretAnswers }) {
    return (
        <div className="card-buttons">
            <div className="button aprendi" onClick={() => setEscolha('aprendi')}>
                Aprendi agora
            </div>
            <div className="button nao-lembrei" onClick={() => { setEscolha('nao-lembrei'); setIncorretAnswers(incorretAnswers + 1) }}>
                Não lembrei
            </div>
            <div className="button lembrei-com-esforco" onClick={() => setEscolha('lembrei-com-esforco')}>
                Lembrei com esforço
            </div>
            <div className="button zap" onClick={() => setEscolha('zap')}>
                <strong>Zap!</strong>
            </div>
        </div >
    )

}

function NextCard({ setDeckPosition, deckPosition, setEscolha, setCard }) {
    return (
        <div className="turn-card">
            <img src="./assets/turn.png" alt="" onClick={() => { setDeckPosition(deckPosition + 1); setEscolha(""); setCard('FrontFace') }} />
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
            <img src="./assets/turn.png" alt="" onClick={() => setCard('BackFace')} />
        </div>
    )
}
