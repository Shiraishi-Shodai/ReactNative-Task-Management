import { Task } from "@/classies/Task";
import "@/customMatchers/8";

describe("Test8:", () => {
  const currentTasks = [
    new Task(
      "1bc5ec9c-db3a-4e41-a3a5-fd78c41a3860",
      "d0C3QscFO9PNrO3jneMaRyafY0Z2",
      "task1",
      "",
      "",
      1731378054000
    ),
    new Task(
      "3f2f3ff7-4294-4a41-a4ed-ce65e94b47b6",
      "d0C3QscFO9PNrO3jneMaRyafY0Z2",
      "task2",
      "",
      "",
      1731378006000
    ),
    new Task(
      "cf132ff9-b865-4bba-be0c-75642343a769",
      "d0C3QscFO9PNrO3jneMaRyafY0Z2",
      "task3",
      "",
      "",
      1731378104000
    ),
  ];
  test("タスク一覧を取得する", async () => {
    const getTodayTaskId = jest.fn().mockResolvedValue({
      "1bc5ec9c-db3a-4e41-a3a5-fd78c41a3860": true,
      "3f2f3ff7-4294-4a41-a4ed-ce65e94b47b6": true,
      "cf132ff9-b865-4bba-be0c-75642343a769": true,
    });

    const todayTasksNum = await getTodayTaskId();
    const todayTaskIds = Object.keys(todayTasksNum);

    const todayTasks: Task[] = [];

    const getSnapshots = jest.fn().mockResolvedValue([
      {
        detail: "",
        location: "",
        name: "task1",
        start_date: 1731378054000,
        state: false,
        user_id: "d0C3QscFO9PNrO3jneMaRyafY0Z2",
      },
      {
        detail: "",
        location: "",
        name: "task2",
        start_date: 1731378006000,
        state: false,
        user_id: "d0C3QscFO9PNrO3jneMaRyafY0Z2",
      },
      {
        detail: "",
        location: "",
        name: "task3",
        start_date: 1731378104000,
        state: false,
        user_id: "d0C3QscFO9PNrO3jneMaRyafY0Z2",
      },
    ]);

    const snapshots = await getSnapshots();

    for (let i = 0; i < todayTaskIds.length; i++) {
      const id = todayTaskIds[i];
      const { user_id, name, location, detail, start_date, state } =
        snapshots[i];
      const task: Task = new Task(
        id,
        user_id,
        name,
        location,
        detail,
        start_date,
        state
      );
      todayTasks.push(task);
    }

    expect(getTodayTaskId).toHaveBeenCalled();
    expect(getSnapshots).toHaveBeenCalled();
    expect(todayTasks).toBeTaskArrayEqual(currentTasks);
  });

  test("タスク一覧を表示する", () => {});
});
