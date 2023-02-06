import * as yup from "yup";

export const schema = yup
  .object({
    title: yup.string().required("Title is required"),
    status: yup.object().required("Status is required"),
  })
  .required();
