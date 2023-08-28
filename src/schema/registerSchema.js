import * as Yup from "yup";

export const SignUpSchema = Yup.object().shape({
    userName:Yup.string().min(3,"Too Short !").max(50,"Too Long").required("Username Required!"),
    email: Yup.string().email("User Email").required("Email Required !"),
    password: Yup.string().min(6,"Too Short!").required("Password Required !"),
  });