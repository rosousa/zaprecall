import React from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import CardScreen from "./components/CardScreen";
import "./assets/styles/reset.css";
import "./assets/styles/styles.css";

function App() {
  const [screen, setScreen] = React.useState(false);
  const [res, setRes] = React.useState([]);

  return (
    <>
      {screen ? (
        <CardScreen res={res} setRes={setRes} />
      ) : (
        <WelcomeScreen setScreen={setScreen} />
      )}
    </>
  );
}

export default App;
