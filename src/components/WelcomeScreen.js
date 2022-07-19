import React from 'react';

function WelcomeScreen(){
  
  const [hidden, setHidden] = React.useState('hide');

  return(
    <div class={"welcome-content " + hidden}>
      <img class="welcome-img" src="./assets/img/logo.png" />
      <p class="welcome-p">ZapRecall</p>
      <div class="welcome-button" onClick={() => setHidden('hide')}>Iniciar Recall!</div>
    </div>
  )
}

export default WelcomeScreen;