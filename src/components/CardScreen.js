import Card from "./Card";
import "./CardScreen.css";
import smallLogo from "../assets/img/logo-pequeno.png";
import sad from "../assets/img/sad.png";
import party from "../assets/img/party.png";

function CardScreen({ res, setRes }) {
  const arr = [
    {
      question: "O que é JSX?",
      answer: "Uma extensão de linguagem do JavaScript",
    },
    {
      question: "O React é __",
      answer: "uma biblioteca JavaScript para construção de interfaces",
    },
    { question: "Componentes devem iniciar com __", answer: "letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    {
      question: "O ReactDOM nos ajuda __",
      answer: "interagindo com a DOM para colocar componentes React na mesma",
    },
    {
      question: "Usamos o npm para __",
      answer: "gerenciar os pacotes necessários e suas dependências",
    },
    {
      question: "Usamos props para __",
      answer: "passar diferentes informações para componentes",
    },
    {
      question: "Usamos estado (state) para __",
      answer:
        "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ].sort(() => Math.random() - 0.5);

  function Result() {
    let hasWrong = false;
    for (let i = 0; i < res.length; i++) {
      if (res[i].props.name === "close-circle-sharp") {
        hasWrong = true;
      }
    }

    if (hasWrong) {
      return (
        <p className="result">
          <span>
            <img src={sad} alt="" />
          </span>
          <strong> Putz...</strong>
          <br /> Ainda faltam alguns... Mas não desanime!
        </p>
      );
    } else {
      return (
        <p className="result">
          <span>
            <img src={party} alt="" />
          </span>
          <strong> Parabéns!</strong>
          <br /> Você não esqueceu de nenhum flashcard!
        </p>
      );
    }
  }

  return (
    <div className="cards-content">
      <div className="cards-tittle">
        <img className="cards-img" src={smallLogo} alt="logo" />
        <p className="cards-p">ZapRecall</p>
      </div>
      {arr.map((value, index) => (
        <Card
          res={res}
          setRes={setRes}
          questionNumber={index + 1}
          cardQuestion={value.question}
          cardAnswer={value.answer}
          key={index}
        />
      ))}
      <div className="cards-footer">
        {res.length === arr.length ? <Result /> : ""}
        <ul className="chooses">
          {res.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
        <p>
          {res.length}/{arr.length} CONCLUÍDOS
        </p>
      </div>
    </div>
  );
}

export default CardScreen;
