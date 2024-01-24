import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import "./App.css";

function App() {
  const name = "Falk";
  const [loggedIn, setLoggedIn] = useState(true);
  const [language, setLanguage] = useState("D");

  let handleLanguage = () => {
    if (language === "D") {
      setLanguage("E");
    }
    if (language === "E") {
      setLanguage("D");
    }
  };

  return (
    <>
      <Header name={name} loggedIn={loggedIn} />
      <Content name={name} loggedIn={loggedIn} language={language} />
      <button onClick={handleLanguage}>
        {language === "D" ? "Umschalten auf English" : "Switch to German"}
      </button>
      <button onClick={() => setLoggedIn(!loggedIn)}>
        {loggedIn ? "Logout" : "Login"}
      </button>
    </>
  );
}

export default App;
