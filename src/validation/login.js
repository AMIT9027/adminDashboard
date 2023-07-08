import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup.string().email().required("This field is required"),
  password: yup.string().min(8).max(32).required("This field is required"),
});

export default loginSchema;
