import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup.string().email().required("This field is required"),
  password: yup.string().required("This field is required").min(8).max(32),
});

export default loginSchema;
