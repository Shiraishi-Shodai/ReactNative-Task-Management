// jest.d.ts
import { Task } from "@/classies/Task";

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeTaskArrayEqual(expected: Task[]): R;
    }
  }
}
