import { object, string } from "yup";

export const taskSchema = object().shape({
  name: string()
    .required("Please enter a task name")
    .min(1, "Please enter at least 1 character")
    .max(50, "Please enter 50 characters or less"),
  location: string()
    .min(1, "Please enter at least 1 character")
    .max(50, "Please enter 50 characters or less"),
  detail: string()
    .min(1, "Please enter at least 1 character")
    .max(500, "Please enter 500 characters or less"),
});
