import { Task } from "@/classies/Task";

expect.extend({
  toBeTaskArrayEqual(received, expected) {
    const pass =
      received.length === expected.length &&
      received.every(
        (task: Task, index: number) =>
          task.id === expected[index].id &&
          task.user_id === expected[index].user_id &&
          task.name === expected[index].name &&
          task.location === expected[index].location &&
          task.detail === expected[index].detail &&
          task.start_date === expected[index].start_date &&
          task.state === expected[index].state
      );

    if (pass) {
      return {
        message: () => `expected ${received} to be equal to ${expected}`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${received} to be equal to ${expected}`,
        pass: false,
      };
    }
  },
});
