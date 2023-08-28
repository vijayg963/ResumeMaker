import React from "react";
import { Link } from "react-router-dom";
import styles from "../stylesheet/Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <img src="logoTG.png" alt="logo" />
      <Link to="#">www.technogetic.com</Link>
    </div>
  );
};
