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

    return (
        <div className="game">
            <div className="header">
                <img src="./assets/logo-mini.png" alt="" />
            </div>
            <div className="card-container">
                <div className="card">
                    <div className="wich-card">
                        {`1/${deck.length}`}
                    </div>
                    <div className="question">
                        <strong>{deck[0].question}</strong>
                    </div>
                    <div className="card-buttons">
                        <div className="button aprendi">
                            Aprendi <br /> agora
                        </div>
                        <div className="button nao-lembrei">
                            Não <br /> lembrei
                        </div>
                        <div className="button lembrei-com-esforco">
                            Lembrei <br /> com <br /> esforço
                        </div>
                        <div className="button zap">
                            <strong>Zap!</strong>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    )
    // <div className="turn-card">
    // <img src="./assets/turn.png" alt="" />
    //</div>

}