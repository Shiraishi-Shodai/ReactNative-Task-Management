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
  return {
    auth: jest.fn(() => ({
      signInWithCredential: jest.fn(),
      onAuthStateChanged: jest.fn(),
      currentUser: null,
    })),
  };
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
    signIn: jest.fn(() => Promise.resolve({ idToken: "test-id-token" })),
    isSignedIn: jest.fn(() => Promise.resolve(false)),
    getCurrentUser: jest.fn(() => null),
  },
}));
