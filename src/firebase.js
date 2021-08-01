import firebase from "firebase";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_API_KEY,
  authDomain: "disney-plus-clone-a27d4.firebaseapp.com",
  projectId: "disney-plus-clone-a27d4",
  storageBucket: "disney-plus-clone-a27d4.appspot.com",
  messagingSenderId: "81740890782",
  appId: "1:81740890782:web:9970b4c7f72f2cbdd1b18f",
  measurementId: "G-39PSSHGLJ9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
