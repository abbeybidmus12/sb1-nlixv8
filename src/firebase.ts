import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC8VpSrjq_hIidzOo1vqwoz3s_A0HY2g-o",
  authDomain: "uk-immigrant-community-web-app.firebaseapp.com",
  projectId: "uk-immigrant-community-web-app",
  storageBucket: "uk-immigrant-community-web-app.appspot.com",
  messagingSenderId: "534032428858",
  appId: "1:534032428858:web:9774bba839b7bd73bf2a03"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);