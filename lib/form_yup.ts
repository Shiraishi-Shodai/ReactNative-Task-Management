import { object, string, number, date, InferType } from "yup";

export const taskSchema = object().shape({
  name: string()
    .required("Please enter a task name")
    .min(1, "Please enter at least 1 character")
    .max(50, "Please enter 50 characters or less"),
  // start_date: string().datetime({ offset: true }), // デフォルトではUTCのみ許容するが、offsetをtrueにすることでJTCなどの他のタイムゾーンも許容させる。
  location: string()
    .required("Enter the location where the task will be performed")
    .min(1, "Please enter at least 1 character")
    .max(500, "Please enter 50 characters or less"),
  detail: string()
    .required("Please enter a task details")
    .min(1, "Please enter at least 1 character")
    .max(500, "Please enter 50 characters or less"),
});
