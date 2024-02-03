import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBOmrrrRJZOSI1rhstaE0qwQU3XwUwWJwE",
  authDomain: "bld-images.firebaseapp.com",
  projectId: "bld-images",
  storageBucket: "bld-images.appspot.com",
  messagingSenderId: "894047665160",
  appId: "1:894047665160:web:bb101e81f428087ecc65bd",
  measurementId: "G-67VG6RK23G"
  };

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
