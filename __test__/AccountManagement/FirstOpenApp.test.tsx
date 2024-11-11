// import { GoogleSigninButton } from "@react-native-google-signin/google-signin";
// import { GoogleSignin } from "@react-native-google-signin/google-signin";
// import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import React, { useState } from "react";
import { render } from "@testing-library/react-native";
import { Redirect } from "expo-router";
import Layout from "@/app/(tabs)/_layout"; // テストするコンポーネントのパスに合わせて変更
import { AuthContext } from "@/components/AuthProvider";
import { User } from "@/classies/User";

jest.mock("expo-router", () => ({
  Redirect: jest.fn((args) => {
    console.log(`与えられた引数`);
    console.table(args);
    return null;
  }),
}));

const TestProvider = () => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Layout />
    </AuthContext.Provider>
  );
};

describe("Users who have never logged in before launch the application.", () => {
  test("Should redirect to login screen", () => {
    render(<TestProvider />);

    //   expect(Redirect).toHaveBeenCalled();
    expect(Redirect).toHaveBeenCalledTimes(1);
    expect(Redirect.mock.calls[0][0]).toStrictEqual({ href: "/login" });
  });
});
