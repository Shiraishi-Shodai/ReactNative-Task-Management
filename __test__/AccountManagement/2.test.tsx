import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import React, { useContext, useState } from "react";
import {
  fireEvent,
  render,
  renderHook,
  waitFor,
} from "@testing-library/react-native";
import { Redirect, Stack } from "expo-router";
import { AuthContext } from "@/components/AuthProvider";
import { User } from "@/classies/User";
import LogOutButton from "@/components/LogoutButton";

const TestProvider = () => {
  const [user, setUser] = useState<User | null>(null);
  React.useEffect(() => {
    const u: User = new User(
      "d0C3QscFO9PNrO3jneMaRyafY0Z2",
      "shota",
      "url",
      "aaaaa@gmail.com"
    );
    setUser(u);
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <LogOutButton setIsVisible={jest.fn()} />
    </AuthContext.Provider>
  );
};

// ログインしているユーザーがいる状態で、ログアウトボタンを押す
// GoogleSignin.getCurrentUser.mockReturnValue({
//   idToken: "d0C3QscFO9PNrO3jneMaRyafY0Z2",
// });

describe("#Test2:", () => {
  test("ログアウトボタンを押すと、Context APIで管理しているuserがnullになる", async () => {
    const { getByText } = render(<TestProvider />);

    fireEvent.press(getByText("Log Out"));
    await waitFor(() => {
      const { result } = renderHook(() => useContext(AuthContext));
      expect(result.current.user).toBeNull();
    });
    // FirebaseとGoogle Signinのモック関数が呼ばれたか確認
    // expect(auth().signOut).toHaveBeenCalled();
    // expect(GoogleSignin.signOut).toHaveBeenCalled();
  });
});
