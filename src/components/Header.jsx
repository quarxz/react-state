import styles from "./Header.module.css";
import { useState } from "react";

export function Header({ name, loggedIn }) {
  return (
    <>
      <header>
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
