import {initializeApp} from 'firebase/app'
import {getStorage} from 'firebase/storage'
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};
// export const app = firebase.initializeApp(firebaseConfig);
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth=getAuth(app);
export const db = getDatabase(app);