import React, { useContext } from "react";
import { Loader } from "../../../components/Loader";
import { Tempthree } from "../../../components/templateThree";
import { dataContext } from "../../../context/dataContext";
import styles from "./styles.module.css"

export default function Cvthree() {
  const { data } = useContext(dataContext);

  if (!data) {
    return <Loader />;
  }
  return (
    <div>
      <div className={styles.app}>
        <Tempthree />
      </div>
    </div>
  );
}
