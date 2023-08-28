import CustomizedSnackbars from "../../components/Alert";
import styles from "./styles.module.css";
import React, { useContext, useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constant";
import { allField, contactField, eduField, projects } from "../../mock";
import { CvSchema } from "../../schema/cvSchema";
import { dataContext } from "../../context/dataContext";
import { Loader } from "../../components/Loader";

export default function Updatecv() {
  const navigate = useNavigate();
  const { user,data, setData } = useContext(dataContext);
  console.log(data)
  const [submitStatus, setsubmitStatus] = useState(false);
  let url = `${BASE_URL}api/updatePdf/${data._id}`;
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  if(!user){
    return <Loader/>
  }
  return (
    <div className={styles.container}>
      <Formik
        initialValues={data}
        validationSchema={CvSchema}
        onSubmit={(values) => {
          axios
            .put(url, values, config)
            .then((res) => setData(res.data) || setsubmitStatus(true))
            .catch((err) => console.error(err));
          // alert("Form Submited Succesfully !");
          navigate("/app");
        }}
      >
        {({ values }) => (
          <Form>
            <div>
              {allField.map((text, i) => (
                <div key={i} className={styles.col}>
                  <label htmlFor={text}>{text}</label>
                  <Field
                    as={text === "summary" ? "textarea" : ""}
                    name={text}
                    placeholder={text}
                    type="text"
                  />
                  <ErrorMessage
                    name={text}
                    component="div"
                    className="field-error"
                  />
                </div>
              ))}

              <div>
                <div className={styles.col}>
                  <label>Contact Us</label>
                </div>
                <FieldArray name="contactUs">
                  {() => (
                    <div>
                      <div className={styles.row}>
                        {contactField.map((title, index) => (
                          <div className={styles.colsm} key={index}>
                            <label htmlFor={`contactUs[0].${title}`}>
                              {title}
                            </label>
                            <Field
                              name={`contactUs[0].${title}`}
                              placeholder={`${title}`}
                              type="text"
                            />
                            <ErrorMessage
                              name={`contactUs[0].${title}`}
                              component="div"
                              className="field-error"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </FieldArray>
              </div>

              <div>
                <div className={styles.col}>
                  <label>Education</label>
                </div>
                <FieldArray name="education">
                  {({ remove, push }) => (
                    <div>
                      {values.education.length > 0 &&
                        values.education.map((obj, i) => (
                          <div className={styles.row} key={i}>
                            <div className={styles.deleteEdu}>
                              {i > 0 && (
                                <button
                                  type="button"
                                  className="secondary"
                                  onClick={() => remove(i)}
                                >
                                  X
                                </button>
                              )}
                            </div>

                            {eduField.map((title, index) => (
                              <div className={styles.colsm} key={index}>
                                <label htmlFor={`education.${i}.${title}`}>
                                  {title}
                                </label>
                                <Field
                                  name={`education.${i}.${title}`}
                                  placeholder={`${title}`}
                                  type="text"
                                />
                                <ErrorMessage
                                  name={`education.${i}.${title}`}
                                  component="div"
                                  className="field-error"
                                />
                              </div>
                            ))}
                          </div>
                        ))}

                      <div className={styles.addButton}>
                        <button
                          type="button"
                          className="secondary"
                          onClick={() =>
                            push({
                              qualification: "",
                              fromWhere: "",
                              when: "",
                            })
                          }
                        >
                          Add Education
                        </button>
                      </div>
                    </div>
                  )}
                </FieldArray>
              </div>

              <div>
                <div className={styles.col}>
                  <label>Projects</label>
                </div>
                <FieldArray name="projects">
                  {({ remove, push }) => (
                    <div>
                      {values.projects.length > 0 &&
                        values.projects.map((obj, i) => (
                          <div className={styles.row} key={i}>
                            <div className={styles.deleteEdu}>
                              {i > 0 && (
                                <button
                                  type="button"
                                  className="secondary"
                                  onClick={() => remove(i)}
                                >
                                  X
                                </button>
                              )}
                            </div>

                            {projects.map((title, index) => (
                              <div className={styles.colsm} key={index}>
                                <label htmlFor={`projects.${i}.${title}`}>
                                  {title}
                                </label>
                                <Field
                                  as={title === "description" && "textarea"}
                                  name={`projects.${i}.${title}`}
                                  placeholder={`${title}`}
                                  type="text"
                                />
                                <ErrorMessage
                                  name={`projects.${i}.${title}`}
                                  component="div"
                                  className="field-error"
                                />
                              </div>
                            ))}
                          </div>
                        ))}
                      <div className={styles.addButton}>
                        <button
                          type="button"
                          className="secondary"
                          onClick={() =>
                            push({
                              projectName: "",
                              role: "",
                              techTools: "",
                              teamSize: "",
                              url: "",
                              description: "",
                            })
                          }
                        >
                          Add Projects
                        </button>
                      </div>
                    </div>
                  )}
                </FieldArray>
              </div>

              <div className={styles.col}>
                <label>
                  <Field type="checkbox" name="isLogo" />
                  {`Show Logo and Footer`}
                </label>
              </div>
            </div>

            <div className={styles.submit}>
              <button type="submit">
              Update CV
                {/* <CustomizedSnackbars submitStatus={submitStatus}/> */}
              </button>
              <Link to={"/app"}>
                <button>Home</button>
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
