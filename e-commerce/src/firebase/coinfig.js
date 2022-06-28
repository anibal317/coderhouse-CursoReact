import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDvCDVO_DVjBX5uATXLlAlvM3xqg8sJlpQ",
  authDomain: "e-commerce-f3d76.firebaseapp.com",
  projectId: "e-commerce-f3d76",
  storageBucket: "e-commerce-f3d76.appspot.com",
  messagingSenderId: "152545302669",
  appId: "1:152545302669:web:fa8a5c53be7a6021db6ac4"
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp = ()=>{
    return app
}

