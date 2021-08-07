import * as yup from "yup";
import { SignUpForm } from "../types/signup-form";

export const validationSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length"),
  dateOfBirth: yup.date().max("8/7/2003"),
});

export const initialValues: SignUpForm = {
  username: "",
  password: "",
  dateOfBirth: null,
};
