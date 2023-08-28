import React from "react";
import { Header } from "../components/Header";
import { Title } from "./Title";
import {GoPrimitiveDot} from "react-icons/go"

export const Details = ({ name, post, summary, education, projects }) => {
  // console.log(name,post, summary, education, projects);
  return (
    <>
    <div className="left-part flex-65">
      <Header name={name} post={post} />
      <div className="flex">
        <div className="sideborder"></div>
        <div>
          <div className="details-sec">
            <div className="circle"><GoPrimitiveDot style={{fontSize:"2rem", color:"lightgrey"}}/></div> <Title title={"Summary"} />
            <p contentEditable="true" suppressContentEditableWarning={true} className="textDark textContainer ">{summary}</p>
            <br/><br/><br/>
          </div>
         {education &&  <div className="details-sec">
            <div className="circle"><GoPrimitiveDot style={{fontSize:"2rem", color:"lightgrey"}}/></div> <Title title={"Education"} />
            <p contentEditable="true" suppressContentEditableWarning={true} className="textDark textContainer">- {education}</p>
            <br/><br/>
          </div>}
          <div className="details-sec">
            <div className="circle"><GoPrimitiveDot style={{fontSize:"2rem", color:"lightgrey"}}/></div>
            <Title title={"Projects"} />
            <p contentEditable="true" suppressContentEditableWarning={true} className="textDark textContainer">-{projects}</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
