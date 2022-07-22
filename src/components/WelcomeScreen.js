import logo from "../assets/img/logo.png";

function WelcomeScreen({ setScreen }) {
  return (
    <div className={"welcome-content"}>
      <img className="welcome-img" src={logo} alt="logo" />
      <p className="welcome-p">ZapRecall</p>
      <div className="welcome-button" onClick={() => setScreen(true)}>
        Iniciar Recall!
      </div>
    </div>
  );
}

export default WelcomeScreen;
