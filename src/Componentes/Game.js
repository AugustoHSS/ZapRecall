import { useState } from 'react';

import Header from './Header'
import EndGame from './EndGame'
import Card from './Card'



export default function Game({ deck, inputValue }) {
    const [deckPosition, setDeckPosition] = useState(0);
    const [incorretAnswers, setIncorretAnswers] = useState(0);
    const [numberOfZaps, setNumberOfZaps] = useState(0);

    return (
        <div className="game">
            <Header />
            {deckPosition === deck.length ? < EndGame incorretAnswers={incorretAnswers} numberOfZaps={numberOfZaps} inputValue={inputValue} /> :
                <Card deck={deck} deckPosition={deckPosition} setDeckPosition={setDeckPosition} setIncorretAnswers={setIncorretAnswers}
                    incorretAnswers={incorretAnswers} numberOfZaps={numberOfZaps} setNumberOfZaps={setNumberOfZaps} />}
        </div>
    )

}