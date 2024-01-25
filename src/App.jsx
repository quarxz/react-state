import { useState } from "react";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import "./App.css";

function App() {
  const sysLanguage = "DE";
  const userName = "Falk";
  const [loggedIn, setLoggedIn] = useState(false);
  const [language, setLanguage] = useState(sysLanguage);

  const handleLanguage = () => {
    setLanguage(language === "DE" ? "EN" : "DE");
  };

  const handleLogin = () => {
    setLoggedIn(
      !loggedIn && userName === "Falk"
        ? (prevLoggedIn) => (prevLoggedIn = true)
        : (prevLoggedIn) => (prevLoggedIn = false)
    );
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
