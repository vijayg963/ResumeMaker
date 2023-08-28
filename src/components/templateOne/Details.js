import React from "react";
import { Header } from "./Header";
import { GoPrimitiveDot } from "react-icons/go";
import { Title } from "./Title";

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
              <div className="circle">
                <GoPrimitiveDot
                  style={{ fontSize: "2rem", color: "lightgrey" }}
                />
              </div>
              <Title title={"Summary"} />
              <p
                contentEditable="true"
                suppressContentEditableWarning={true}
                className="textDark "
              >
                {summary}
              </p>
              <br />
            </div>
            {education && (
              <div className="details-sec">
                {education[0].qualification && (
                  <div className="circle">
                    <GoPrimitiveDot
                      style={{ fontSize: "2rem", color: "lightgrey" }}
                    />
                  </div>
                )}
                {education[0].qualification && <Title title={"Education"} />}
                {education?.map((e, i) => (
                  <div key={i} className="education-Section">
                    {e.qualification && (
                      <p
                        contentEditable="true"
                        suppressContentEditableWarning={true}
                        className="textDark"
                      >
                        {e.qualification}
                      </p>
                    )}
                    {e.fromWhere && (
                      <p
                        contentEditable="true"
                        suppressContentEditableWarning={true}
                        className="textDark"
                      >
                        {e.fromWhere}
                      </p>
                    )}
                    {e.when && (
                      <p
                        contentEditable="true"
                        suppressContentEditableWarning={true}
                        className="textDark"
                      >
                        {e.when}
                      </p>
                    )}
                  </div>
                ))}
                <br />
              </div>
            )}
            <div className="details-sec">
              <div className="circle">
                <GoPrimitiveDot
                  style={{ fontSize: "2rem", color: "lightgrey" }}
                />
              </div>
              <Title title={"Projects"} />
              {projects?.map((e, i) => (
                <div key={i} className="project-Section">
                  {e.projectName && (
                    <p
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                      className="textDark projectTitle"
                    >
                      <span>Project Name :</span>
                      {e.projectName}
                    </p>
                  )}
                  {e.description && (
                    <p
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                      className="textDark"
                    >
                      <strong>Description </strong>
                      {e.description}
                    </p>
                  )}
                  {e.role && (
                    <p
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                      className="textDark"
                    >
                      <strong>Role </strong>
                      {e.role}
                    </p>
                  )}
                  {e.techTools && (
                    <p
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                      className="textDark"
                    >
                      <strong>Tech Tools </strong>
                      {e.techTools}
                    </p>
                  )}
                  {e.teamSize && (
                    <p
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                      className="textDark"
                    >
                      <strong>Team Size </strong>
                      {e.teamSize}
                    </p>
                  )}
                  {e.url && (
                    <p
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                      className="textDark"
                    >
                      <strong>Url </strong>
                      {e.url}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
