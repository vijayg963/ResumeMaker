import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Loader } from "../../components/Loader";
import { dataContext } from "../../context/dataContext";
import styles from "./styles.module.css";

export const Template = () => {
  const { user, data, setActiveTemplate } = useContext(dataContext);

  const handleTemplate = (i) => {
    setActiveTemplate(i);
  };

  if(!user){
    return <Loader/>
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
      <Link to={"/app"}>
        <button>Home</button>
      </Link>
      <h2>All Template For Resume...</h2>
      </div>
      <section className={styles.cardSection}>
        {[1, 2,3,4].map((elm) => (
          <Link key={elm} to={"/cv"}>
            <div
              onClick={() => handleTemplate(elm)}
              className={`${styles.card1} ${styles.card}`}
            >
              <p>Template {elm}</p>
              <h2><strong>{"Name: "}</strong> {data.name}</h2>
              <h3><strong>{"Post: "}</strong>{data.post}</h3>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};
