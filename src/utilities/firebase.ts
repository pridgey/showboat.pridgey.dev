import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey?.toString(),
  authDomain: import.meta.env.VITE_authDomain?.toString(),
  projectId: import.meta.env.VITE_projectId?.toString(),
  storageBucket: import.meta.env.VITE_storageBucket?.toString(),
  messagingSenderId: import.meta.env.VITE_messagingSenderId?.toString(),
  appId: import.meta.env.VITE_appId?.toString(),
};

console.log({ firebaseConfig });

initializeApp(firebaseConfig);
