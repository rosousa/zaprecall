function Card(){
  return(
    <div class="cards-card">
      <p class="cards-card-p">Pergunta X</p>
      <img src="./assets/img/arrow-right.svg" />
    </div>
  )
}

function CardScreen(){
  const arr = [{}, {}, {}, {}].sort(() => Math.random() - 0.5);
  return(
    <div class="cards-content">
      <div class="cards-tittle">
        <img class="cards-img" src="./assets/img/logo-pequeno.png" />
        <p class="cards-p">ZapRecall</p>
      </div>
      { arr.map(() => <Card />) }
      <div class="cards-footer">
        <p>0/4 CONCLUÍDOS</p>
      </div>
    </div>
  )
}

export default CardScreen;