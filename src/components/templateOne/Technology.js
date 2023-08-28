import React from "react";
import { FiUsers } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { RiMapPinLine } from "react-icons/ri";
import { BsTelephone } from "react-icons/bs";
import { Title } from "./Title";

export const Technology = ({
  isLogo,
  contactUs,
  skills,
  tools,
  langaugeSkills,
}) => {
  return (
    <div className="right-part flex-35">
      {isLogo && (
        <div className="logo-img">
          <img width={126} height={53} src="logoTG.png" alt="logo" />
        </div>
      )}
      {/* skills */}
      <div>
        <Title title={"Skills"} />
        <ul>
          {skills &&
            skills
              .split(",")
              .filter((x) => x.length >= 2)
              .map((s, i) => (
                <li key={i} className="textDark">
                  {s}
                </li>
              ))}
        </ul>
      </div>
      {/* Tools */}
      <div>
        <Title title={"Tools"} />
        <ul>
          {tools &&
            tools
              .split(",")
              .filter((x) => x.length >= 2)
              .map((s, i) => (
                <li key={i} className="textDark">
                  {s}
                </li>
              ))}
        </ul>
      </div>
      {/* language */}
      <div className="language-sec">
        <Title title={"Language Skills"} />
        <div className="language-list">
          {langaugeSkills &&
            langaugeSkills
              .split(",")
              .filter((x) => x.length >= 2)
              .map((s, i) => (
                <strong key={i} className="language">
                  - {s}
                </strong>
              ))}
        </div>
      </div>
      {/* contact  */}
      {contactUs && (
        <div className="contact-sec">
          {contactUs[0].companyName && <Title title={"Contact Us"} />}
          <div className="contact-details">
            {contactUs[0].companyName && (
              <p>
                <strong>
                  <FiUsers />
                </strong>
                {contactUs[0].companyName}
              </p>
            )}
            {contactUs[0].email && (
              <p>
                <strong>
                  <HiOutlineMail />
                </strong>
                {contactUs[0].email}
              </p>
            )}
            {contactUs[0].mobilenumber && (
              <p>
                <strong>
                  <BsTelephone />
                </strong>
                {contactUs[0].mobilenumber}
              </p>
            )}
            {contactUs[0].location && (
              <p>
                <strong>
                  <RiMapPinLine />
                </strong>
                {contactUs[0].location}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
