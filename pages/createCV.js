import React, { useEffect, useState } from "react";
import styles from "../styles/CreateCv.module.css";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Link from "next/link";

const CvSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  post: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  summary: Yup.string()
    .min(40, "Too Short!")
    .max(2000, "Too Long!")
    .required("Required"),
  education: Yup.string(),
  projects: Yup.string().min(10, "Too Short").required("Required"),
  skills: Yup.string().min(10, "Too Short").required("Required"),
  tools: Yup.string().min(5, "Too Short").required("Required"),
  langaugeSkills: Yup.string().min(5, "Too Short").required("Required"),
  contactUs: Yup.string().min(10, "Too Short"),
});

export default function createCV() {
  const [postCV, setPostCV] = useState({});
  return (
    <div className={styles.container}>
      <Formik
        initialValues={{
          name: "",
          post: "",
          summary: "",
          education: "",
          projects: "",
          skills: "",
          tools: "",
          langaugeSkills: "",
          contactUs: "",
        }}
        onSubmit={async (values) => {
          // here All the values in Obj Form
          // console.log(values);
          let formData = new FormData();
          formData.append("name", values.name);
          formData.append("post", values.post);
          formData.append("summary", values.summary);
          {
            values.education && formData.append("education", values.education);
          }
          formData.append("projects", values.projects);
          formData.append("skills", values.skills);
          formData.append("tools", values.tools);
          formData.append("langaugeSkills", values.langaugeSkills);
          {
            values.contactUs && formData.append("contactUs", values.contactUs);
          }
          // you would submit with fetch for example
          // const res = await fetch("posturl", { method: "POST", body: formData });
          // Do whatever on the sever
          axios
            .post("https://pdf-creator-omega.vercel.app/api/createPdf", values)
            .then((res) => localStorage.setItem("id", res.data.id))
            .catch((err) => console.error(err));

          alert("Form submitted!");
          console.log(postCV);
          // {
          //   console.log(formData.get("name"));
          //   console.log(formData.get("summary"));
          //   console.log(formData.get("education"));
          //   console.log(formData.get("projects"));
          //   console.log(formData.get("skills"));
          //   console.log(formData.get("tools"));
          //   console.log(formData.get("langaugeSkills"));
          //   console.log(formData.get("contactUs"));
          // }
        }}
        validationSchema={CvSchema}
        render={({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          setPostCV,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.formgroup}>
              <label htmlFor="name">Name</label>
              <input
                placeholder="Full Name"
                id="name"
                name="name"
                type="text"
                className="form-control"
                value={values.name}
                onChange={handleChange}
              />
              {errors.name && touched.name && <p>{errors.name}</p>}
            </div>

            <div className={styles.formgroup}>
              <label htmlFor="post">Position</label>
              <input
                placeholder="Position"
                id="post"
                post="post"
                type="text"
                classpost="form-control"
                value={values.post}
                onChange={handleChange}
              />
              {errors.post && touched.post && <p>{errors.post}</p>}
            </div>

            <div className={styles.formgroup}>
              <label htmlFor="summary">Summary</label>
              <textarea
                placeholder="Summary"
                rows={5}
                id="summary"
                name="summary"
                type="summary"
                className="form-control"
                value={values.summary}
                onChange={handleChange}
              />
              {errors.summary && touched.summary && <p>{errors.summary}</p>}
            </div>

            <div className={styles.formgroup}>
              <label htmlFor="education">Education</label>
              <input
                placeholder="Education"
                id="education"
                name="education"
                type="education"
                className="form-control"
                value={values.education}
                onChange={handleChange}
              />
              {errors.education && touched.education && (
                <p>{errors.education}</p>
              )}
            </div>

            <div className={styles.formgroup}>
              <label htmlFor="projects">Projects</label>
              <textarea
                rows={5}
                placeholder="Projects"
                id="projects"
                name="projects"
                type="projects"
                className="form-control"
                value={values.projects}
                onChange={handleChange}
              />
              {errors.projects && touched.projects && <p>{errors.projects}</p>}
            </div>

            <div className={styles.formgroup}>
              <label htmlFor="skills">Skills</label>
              <input
                id="skills"
                name="skills"
                type="skills"
                className="form-control"
                value={values.skills}
                onChange={handleChange}
              />
              {errors.skills && touched.skills && <p>{errors.skills}</p>}
            </div>

            <div className={styles.formgroup}>
              <label htmlFor="tools">Tools</label>
              <input
                placeholder="Tools"
                id="tools"
                name="tools"
                type="tools"
                className="form-control"
                value={values.tools}
                onChange={handleChange}
              />
              {errors.tools && touched.tools && <p>{errors.tools}</p>}
            </div>

            <div className={styles.formgroup}>
              <label htmlFor="langaugeSkills">LangaugeSkills</label>
              <input
                placeholder="Langauges"
                id="langaugeSkills"
                name="langaugeSkills"
                type="langaugeSkills"
                className="form-control"
                value={values.langaugeSkills}
                onChange={handleChange}
              />
              {errors.langaugeSkills && touched.langaugeSkills && (
                <p>{errors.langaugeSkills}</p>
              )}
            </div>

            <div className={styles.formgroup}>
              <label htmlFor="contactUs">contactUs</label>
              <input
                placeholder="Current, Email, Contact No., Full address"
                id="contactUs"
                name="contactUs"
                type="contactUs"
                className="form-control"
                value={values.contactUs}
                onChange={handleChange}
              />
              {errors.contactUs && touched.contactUs && (
                <p>{errors.contactUs}</p>
              )}
            </div>

            <div className={styles.formBtn}>
              <button type="submit" className={styles.submitBtn}>
                Submit
              </button>
              <Link href={"/"}>
                <button>Home</button>
              </Link>
            </div>
          </form>
        )}
      />
    </div>
  );
}
