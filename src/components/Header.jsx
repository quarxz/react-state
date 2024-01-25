import styles from "./Header.module.css";
import { useState } from "react";

export function Header({ name, loggedIn, language }) {
  return (
    <>
      <header className={loggedIn ? styles["header-loggedin"] : undefined}>
        <h1>React - State</h1>
        <div className={styles.syslanguage}>({language})</div>
        {loggedIn ? (
          <div className={styles.avatar}>
            <span>{name.charAt(0)}</span>
          </div>
        ) : (
          <div className={styles.avatarloggedout}>
            <span>&#x25CF;</span>
          </div>
        )}
      </header>
    </>
  );
}
