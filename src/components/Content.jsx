import styles from "./Content.module.css";
import { useState } from "react";

export function Content({ name, loggedIn, language }) {
  const germanTxt01 = "Willkommen auf deiner profile Seite";
  const englishTxt01 = "Welcome to your profile page";

  const fnTxt01 = (language) => {
    if (language === "D") {
      return loggedIn ? germanTxt01 + ", " + name + "." : germanTxt01 + ".";
    }
    if (language === "E") {
      return loggedIn ? englishTxt01 + ", " + name + "." : englishTxt01 + ".";
    }
  };

  const fnTxt02 = (language) => {
    if (language === "D") {
      return loggedIn
        ? "Viel Spaß auf deiner Webseite!"
        : "Logge dich ein und sehe state in aktion";
    }
    if (language === "E") {
      return loggedIn
        ? "Have fun with your Website!"
        : "Log in to see state in action!";
    }
  };

  return (
    <>
      <main>
        <h2>React State Exercise #2</h2>
        <p>{fnTxt01(language)}</p>
        <p>{fnTxt02(language)}</p>
      </main>
    </>
  );
}
