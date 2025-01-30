import { taskSchema } from "@/lib/form_yup";
import { InferType } from "yup";

export type taskFormValues = InferType<typeof taskSchema>;

export type FormikActions = {
  setSubmitting: (isSubmitting: boolean) => void;
  resetForm: () => void;
};

export type Theme = {
  dark: boolean;
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
    secondary: string;
    success: string;
    buttonColor: string;
    rippleColor: string;
    renderItemColor: string;
  };
};
