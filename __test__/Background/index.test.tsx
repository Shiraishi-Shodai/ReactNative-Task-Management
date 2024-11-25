import BackgroundFetch from "react-native-background-fetch";

jest.mock("react-native-background-fetch", () => ({
  configure: jest.fn(),
  scheduleTask: jest.fn(),
  forceTask: jest.fn(),
}));

test("background fetch task triggers", () => {
  const mockCallback = jest.fn(() => console.log("バックグラウンド実行"));

  BackgroundFetch.configure(
    {
      minimumFetchInterval: 1, // デバッグ用に短縮
      stopOnTerminate: false,
      startOnBoot: true,
    },
    mockCallback,
    (error) => {
      console.error("Failed to configure:", error);
    }
  );

  // Check that the callback is called
  expect(mockCallback).toHaveBeenCalled();
});
