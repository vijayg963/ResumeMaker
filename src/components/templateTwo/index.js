import React, { useContext, useState } from "react";
import { dataContext } from "../../context/dataContext";
import { Header } from "./Header";
import { Subtitle } from "./Subtitle";
import { Title } from "./Title";
import styles from "./styles.module.css";

export const Temptwo = () => {
  const { data } = useContext(dataContext);
const [navBar, setNavBar] = useState(false);

  return (
    <div className={styles.conatiner}>
      <Header {...data} />
      <Title title={"Summary"} />
      <Subtitle subTitle={data.summary} />

      <Title title={"Skills"} />
      <div>{data.skills.split(",").map((skill,i) => (
          <li key={i} contentEditable={true} suppressContentEditableWarning={true} className={styles.subtitle}>{skill}</li>
      ))}</div>
      <Title title={"Tools"} />
      <div>{data.tools.split(",").map((tool,i) => (
          <li key={i} contentEditable={true} suppressContentEditableWarning={true} className={styles.subtitle}>{tool}</li>
      ))}</div>

      <Title title={"Education"} />
      <div>
        {data?.education?.map((elm, i) => (
          <div key={i} className={styles.edu}>
            <p> {elm.qualification}</p>
            <p>{elm.fromWhere}</p>
            <p>{elm.when}</p>
          </div>
        ))}
      </div>

      <Title title={"Projects"} />
      <div>
        {data?.projects?.map((elm, i) => (
          <div key={i} className={styles.project}>
            <h3>
              <strong>PROJECT {i + 1}</strong> ({elm.projectName})
            </h3>
            <li>
              <strong>Project Role : </strong> {elm.role}
            </li>
            <li>
              <strong>Team Size : </strong> {elm.teamSize}
            </li>
            <li>
              <strong>Tech Tools : </strong> {elm.techTools}
            </li>
            <li contentEditable={true} suppressContentEditableWarning={true}>
              <strong> Description : </strong> {elm.description}
            </li>
            <li>
              <strong>Url : </strong> {elm.url}
            </li>
          </div>
        ))}
      </div>
    </div>
  );
};
