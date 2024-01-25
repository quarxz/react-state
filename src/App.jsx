import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import "./App.css";

function App() {
  const userName = "Falk";
  const sysLanguage = "DE";
  const [loggedIn, setLoggedIn] = useState(false);
  const [language, setLanguage] = useState(sysLanguage);

  const handleLanguage = () => {
    if (language === "DE") {
      setLanguage("EN");
    }
    if (language === "EN") {
      setLanguage("DE");
    }
  };

  const handleLogin = () => {
    if (userName === "Falk") {
      setLoggedIn(true);
    }
    if (loggedIn) {
      setLoggedIn(false);
    }
  };

  return (
    <>
      <Header name={userName} loggedIn={loggedIn} language={language} />
      <Content name={userName} loggedIn={loggedIn} language={language} />
      <button onClick={handleLanguage}>
        {language === "DE" ? "Umschalten auf Englisch" : "Switch to German"}
      </button>
      <button
        style={{
          backgroundColor: loggedIn ? "red" : "green",
        }}
        onClick={handleLogin}
      >
        {loggedIn ? "Logout" : "Login"}
      </button>
    </>
  );
}

export default App;
