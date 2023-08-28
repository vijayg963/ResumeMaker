import React from "react";
import { Title } from "./Title";
import { FiUsers } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { RiMapPinLine } from "react-icons/ri";
import { BsTelephone } from "react-icons/bs";

export const Technology = ({ contactUs, skills, tools, langaugeSkills }) => {
  let data = [contactUs, skills, tools, langaugeSkills].map((e) =>
    e.split(",")
  );
  // console.log(data);
  return (
    <div className="right-part flex-35">
      <div className="logo-img">
        <img width={126} height={53} src="logoTG.png" alt="logo" />
      </div>
      {/* skills */}
      <div>
        <Title title={"Skills"} />
        <ul>
          {data[1].filter((x)=>x.length>=2).map((s,i) => (
            <li key={i} className="textDark">{s}</li>
          ))}
        </ul>
      </div>
      {/* Tools */}
      <div>
        <Title title={"Tools"} />
        <ul>
          {data[2].filter((x)=>x.length>=2).map((s,i) => (
            <li key={i} className="textDark">{s}</li>
          ))}
        </ul>
      </div>
      {/* language */}
      <div className="language-sec">
        <Title title={"Language Skills"} />
        <div className="language-list">
          {data[3].filter((x)=>x.length>=2).map((s,i) => (
            <strong key={i} className="language"> - {s}</strong>
          ))}
        </div>
      </div>
      {/* contact  */}
    {contactUs &&   <div className="contact-sec">
        <Title title={"Contact Us"} />
        <div className="contact-details">
        <p>
          <strong>
            <FiUsers />
          </strong>
          {data[0][0]}
        </p>
        <p>
          <strong>
            <HiOutlineMail />
          </strong>
          {data[0][1]}
        </p>
        <p>
          <strong>
            <BsTelephone />
          </strong>
          {data[0][2]}
        </p>
        <p>
          <strong>
            <RiMapPinLine />
          </strong>
          {data[0].slice(3, 6)}
        </p>
        </div>
      </div>}
    </div>
  );
};
