import React, { createContext, useState, ReactNode, useEffect } from "react";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { User } from "@/classies/User";

// ユーザーとセット関数を管理するための型を定義
export interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

// デフォルトコンテキスト
const defaultState = {
  user: null,
  setUser: (user: User | null) => {},
} as AuthContextType;

// Contextを作成
export const AuthContext = createContext(defaultState);

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  // 初期値はnullを明示的に設定
  const [user, setUser] = useState<User | null>(null);

  // アプリ起動時にGoogleSigninに必要な設定を読み込む
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "332801672964-vij8mve9ig5b487b097duvu5vhe3glme.apps.googleusercontent.com",
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });

    // onAuthStateChanged というメソッドがあり、 ユーザの現在の認証状態をサブスクライブして、その状態が変化したときにイベントを受け取ることができる
    // サインアウトに成功すると、onAuthStateChangedリスナーはuserパラメータをNULL値としてイベントをトリガーする。
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    // auth().onAuthStateChangedは監視し続けるリスナーを返す。ここではコンポーネントが表示されなくなったときにリスナーを解除している
    return () => subscriber(); // リスナーをクリーンアップ
  }, []);

  // ユーザの状態が変わったときに呼び出される関数：引数がnullの時はnullそうでない時は、UserクラスをsetUserでセットする
  const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
    if (user == null) {
      setUser(user);
    } else {
      const { uid, displayName, photoURL, email } = user;
      const appUser = new User(uid, displayName, photoURL, email);
      setUser(appUser);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
