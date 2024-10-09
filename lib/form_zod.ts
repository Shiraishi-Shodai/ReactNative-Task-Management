import { z } from "zod";

const taskSchema = z.object({
  text: z
    .string({ message: "タスク名を入力してください" })
    .min(1, { message: "1文字以上の文字を入力してください" })
    .max(50, { message: "50文字以下で入力してください" }),
  start_date: z.string().datetime({ offset: true }), // デフォルトではUTCのみ許容するが、offsetをtrueにすることでJTCなどの他のタイムゾーンも許容させる。
  location: z
    .string({ message: "タスクの実行場所を入力してください" })
    .min(1, { message: "1文字以上の文字を入力してください" })
    .max(500, { message: "500文字以下で入力してください" })
    .optional(),
  detail: z
    .string({ message: "タスクの詳細を入力してください" })
    .min(1, { message: "1文字以上の文字を入力してください" })
    .max(500, { message: "500文字以下で入力してください" })
    .optional(),
});
