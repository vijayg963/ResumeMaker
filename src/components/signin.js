import React, { useState } from "react";
import styles from "../styles/auth.module.css";
import { FcGoogle } from "react-icons/fc";
import { BASE_URL } from "../constant";
import { Link } from "react-router-dom";
// import {Formik} from "formik";
// import { SignInSchema } from "../schema/login";
// import CustomizedSnackbars from "./Alert";

const Signin = () => {
  const [submitStatus, setsubmitStatus] = useState(false);

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Login</h1>
      <div>
        <Link to={`${BASE_URL}auth/google`}>
          <button className={styles.googleBtn}>
            <span>Sign in Using Google</span>{" "}
            <FcGoogle style={{ fontSize: "2rem" }} />
          </button>
        </Link>
      </div>
      <div>
        {/* <Formik
        initialValues={{
          email: "user1@demo.com",
          password: "123456",
        }}
        onSubmit={async (values) => {
          //  console.log(values);
          let formData = new FormData();
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
            console.log(formData.get("email", "password"));
        }}
        validationSchema={SignInSchema}
        render={({ values, errors, touched, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>

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
              <Link href={"/users"}>
              <button type="submit">
                <CustomizedSnackbars submitStatus={submitStatus} />
              </button>
              </Link>
              <Link href={"/"}>
                <button>Home</button>
              </Link>
            </div>
          </form>
        )}
      /> */}
      </div>
    </div>
  );
};

export default Signin;
