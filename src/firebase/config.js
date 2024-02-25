import {getApp, getApps, initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import {getDatabase} from "firebase/database";
import {browserSessionPersistence, setPersistence, browserLocalPersistence} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// const app = initializeApp(firebaseConfig);
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(); // firestore database
const database = getDatabase(); // realtime database
const storage = getStorage();
const auth = getAuth(app);

// adds session persistence and not local storage persistence of user
// refer to https://stackoverflow.com/questions/64353357/clear-the-current-session-after-closing-the-tab-or-browser-in-the-firebase-real
// refer to https://firebase.google.com/docs/auth/web/auth-state-persistence#web-modular-api
// refer to https://blog.guya.net/2015/06/12/sharing-sessionstorage-between-tabs-for-secure-multi-tab-authentication/
// refer to view-source:https://blog.guya.net/security/browser_session/sessionStorage.html
// setPersistence(auth, browserSessionPersistence)
setPersistence(auth, browserLocalPersistence)

export {app, db, database, storage, auth};
