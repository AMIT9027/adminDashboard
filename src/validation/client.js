import * as yup from "yup";

const clientSchema = yup.object().shape({
  image: yup.mixed().required("This field is required"),
  url: yup.mixed().required("This field is required"),
});

export default clientSchema;
