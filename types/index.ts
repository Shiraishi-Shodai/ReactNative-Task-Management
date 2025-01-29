import { taskSchema } from "@/lib/form_yup";
import { InferType } from "yup";

export type taskFormValues = InferType<typeof taskSchema>;

export type FormikActions = {
  setSubmitting: (isSubmitting: boolean) => void;
  resetForm: () => void;
};
