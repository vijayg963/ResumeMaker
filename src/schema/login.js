import * as Yup from "yup";

export const SignInSchema = Yup.object().shape({
    email: Yup.string().email("User Email").required("Email Required !"),
    password: Yup.string().required("Password Required !"),
  });