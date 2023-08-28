import React, { useContext } from "react";
import { Loader } from "../../../components/Loader";
import { Tempfour } from "../../../components/templateFour";
import { dataContext } from "../../../context/dataContext";
import styles from "./styles.module.css";

export default function Cvfour() {
  const { data } = useContext(dataContext);

  if (!data) {
    return <Loader />;
  }
  return (
    <div className={styles.app}>
      <Tempfour />
    </div>
  );
}
