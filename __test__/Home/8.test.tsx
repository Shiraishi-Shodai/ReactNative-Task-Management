import { Task } from "@/classies/Task";
import { User } from "@/classies/User";
import { AuthContext } from "@/components/AuthProvider";
import TaskList from "@/components/TaskList";
import "@/customMatchers/8";
import { render, waitFor } from "@testing-library/react-native";
import React, { useState } from "react";

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

const TestProvider = () => {
  const [user, setUser] = useState<User | null>(null);
  React.useEffect(() => {
    const u: User = new User(
      "d0C3QscFO9PNrO3jneMaRyafY0Z2",
      "はくまいしょうだい",
      "https://lh3.googleusercontent.com/a/ACg8ocIpl79Y5vXpyglbUXQdG3IiS8c_89_UigrAp--_As4znOF0gw=s96-c",
      "hakumaishoudai@gmail.com"
    );
    const mockMethod = jest.spyOn(u, "getTodaysTasks");
    mockMethod.mockResolvedValue(currentTasks);
    setUser(u);
  }, []);

  const now = new Date();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <TaskList pickDate={now} />
    </AuthContext.Provider>
  );
};

describe("Test8:", () => {
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

  test("タスク一覧を表示する", async () => {
    const { getByText } = render(<TestProvider />);

    await waitFor(() => {
      console.log(getByText("task1"));
    });
  });
});
