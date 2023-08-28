import React, { useContext } from "react";
import { Details } from "./Details";
import { Technology } from "./Technology";
import styles from "./styles.module.css";
import { dataContext } from "../../context/dataContext";

export const Tempthree = () => {
  const { data } = useContext(dataContext);
  return (
    <div className={styles.conatiner}>
      <Technology {...data} />
      <Details {...data} />
    </div>
  );
};
