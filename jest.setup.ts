jest.mock("expo-router", () => ({
  Redirect: jest.fn((args) => {
    console.log(`与えられた引数`);
    console.table(args);
    return null;
  }),
  // Stack: {
  //   Navigator: jest
  //     .fn()
  //     .mockImplementation(({ children }: { children: React.ReactNode }) => (
  //       <>{children}</>
  //     )),
  //   Screen: jest.fn(),
  // },
}));

jest.mock("@react-native-firebase/database", () => {
  return {
    __esModule: true,
    default: {
      ref: jest.fn(() => ({
        set: jest.fn(),
        once: jest.fn(),
        on: jest.fn(),
        off: jest.fn(),
        update: jest.fn(),
        remove: jest.fn(),
      })),
    },
  };
});

jest.mock("@react-native-firebase/auth", () => {
  return () => ({
    signInWithCredential: jest.fn(),
    onAuthStateChanged: jest.fn(),
    currentUser: null,
    signOut: jest.fn(),
  });
});

// NativeEventEmitterをモック化
jest.mock("react-native/Libraries/EventEmitter/NativeEventEmitter", () => {
  return jest.fn().mockImplementation(() => ({
    addListener: jest.fn(),
    removeAllListeners: jest.fn(),
  }));
});

jest.mock("@react-native-google-signin/google-signin", () => ({
  GoogleSignin: {
    configure: jest.fn(),
    signIn: jest.fn(() =>
      Promise.resolve({ idToken: "d0C3QscFO9PNrO3jneMaRyafY0Z2" })
    ),
    signOut: jest.fn(),
    isSignedIn: jest.fn(() => Promise.resolve(false)),
    getCurrentUser: jest.fn().mockReturnValue({
      idToken: "d0C3QscFO9PNrO3jneMaRyafY0Z2",
    }),
    revokeAccess: jest.fn(), // revokeAccessをモック関数として追加
    clearCachedAccessToken: jest.fn(),
  },
}));
