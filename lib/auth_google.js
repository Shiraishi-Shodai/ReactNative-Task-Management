import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { app } from "@/lib/firebase";

const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

const auth = getAuth(app);
auth.languageCode = "ja";

export { auth, provider };
