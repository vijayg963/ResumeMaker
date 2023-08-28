import React, { useState } from "react";
import {Formik} from "formik";
import styles from "../styles/auth.module.css";
import {SignUpSchema}  from "../schema/registerSchema";
import Link from "next/link";
import CustomizedSnackbars from "./Alert";

const Signup = () => {
  const [submitStatus, setsubmitStatus] = useState(false);

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Register form</h1>
      <Formik
        initialValues={{
          userName: "user1",
          email: "user1@demo.com",
          password: "123456",
        }}
        onSubmit={async (values) => {
          //  console.log(values);
          let formData = new FormData();
          formData.append("userName", values.userName);
          formData.append("email", values.email);
          formData.append("password", values.password);
          // you would submit with fetch for example
          // const res = await fetch("posturl", { method: "POST", body: formData });
          // Do whatever on the sever

          // axios
          //   .post(`${BASE_URL}`, values)
          //   .then((res) =>console.log(res)
          //   || setsubmitStatus(true)
          //   )
          //   .catch((err) => console.error(err));

          alert("Form submitted!", JSON.stringify(values));
            console.log(formData.get("userName", "email", "password"));
        }}
        validationSchema={SignUpSchema}
        render={({ values, errors, touched, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.formgroup}>
              <label htmlFor="userName">User Name</label>
              <input
                placeholder="username"
                id="userName"
                name="userName"
                type="text"
                className="form-control"
                value={values.userName}
                onChange={handleChange}
              />
              {errors.userName && touched.userName && <p>{errors.userName}</p>}
            </div>

            <div className={styles.formgroup}>
              <label htmlFor="email">Email</label>
              <input
                placeholder="Email"
                id="email"
                name="email"
                type="email"
                className="form-control"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && touched.email && <p>{errors.email}</p>}
            </div>

            <div className={styles.formgroup}>
              <label htmlFor="password">Password</label>
              <input
                placeholder="password"
                id="password"
                name="password"
                type="password"
                classpassword="form-control"
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && touched.password && <p>{errors.password}</p>}
            </div>

            <div className={styles.formBtn}>
              <button type="submit">
                <CustomizedSnackbars submitStatus={submitStatus} />
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
};

export default Signup;
