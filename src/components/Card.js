import React from "react";
import arrowRight from "../assets/img/arrow-right.svg";
import arrow from "../assets/img/setinha.png";

function Card({ questionNumber, cardQuestion, cardAnswer, res, setRes }) {
  const [hidden, setHidden] = React.useState("");
  const [question, setQuestion] = React.useState("hide");
  const [hideQuestion, setHideQuestion] = React.useState("");
  const [hideAnswer, setHideAnswer] = React.useState("hideAnswer");
  const [button, setButton] = React.useState("");
  const [click, setClick] = React.useState(false);

  function Btn() {
    if (button === "green-answer") {
      return <ion-icon name="checkmark-circle-sharp"></ion-icon>;
    }
    if (button === "orange-answer") {
      return <ion-icon name="help-circle-sharp"></ion-icon>;
    }
    if (button === "red-answer") {
      return <ion-icon name="close-circle-sharp"></ion-icon>;
    }
    return <img src={arrowRight} alt="" />;
  }

  return (
    <>
      <div
        className={"cards-card " + hidden}
        onClick={() => {
          if (!click) {
            setHidden("hide");
            setQuestion("");
          }
        }}
      >
        <p className={"cards-card-p " + button}>Pergunta {questionNumber}</p>
        <Btn />
      </div>
      <div className={"cards-card-question " + question}>
        <p className={"cards-card-question-text " + hideQuestion}>
          {cardQuestion}
        </p>
        <img
          className={"cards-card-setinha " + hideQuestion}
          src={arrow}
          alt=""
          onClick={() => {
            setHideQuestion("hide");
            setHideAnswer("");
          }}
        />
        <p className={"cards-card-answer-text " + hideAnswer}>{cardAnswer}</p>
        <div className={"cards-card-zap " + hideAnswer}>
          <div
            className="cards-red-answer"
            onClick={() => {
              setHidden("");
              setQuestion("hide");
              setButton("red-answer");
              setClick(true);
              setRes([...res, <ion-icon name="close-circle-sharp"></ion-icon>]);
            }}
          >
            <p>Não lembrei</p>
          </div>
          <div
            className="cards-orange-answer"
            onClick={() => {
              setHidden("");
              setQuestion("hide");
              setButton("orange-answer");
              setClick(true);
              setRes([...res, <ion-icon name="help-circle-sharp"></ion-icon>]);
            }}
          >
            <p>Quase não lembrei</p>
          </div>
          <div
            className="cards-green-answer"
            onClick={() => {
              setHidden("");
              setQuestion("hide");
              setButton("green-answer");
              setClick(true);
              setRes([
                ...res,
                <ion-icon name="checkmark-circle-sharp"></ion-icon>,
              ]);
            }}
          >
            <p>Zap!</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
