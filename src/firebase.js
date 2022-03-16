
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCPDlbpu1aCKEQO5G7D21DDX9AQNSww6HI",
  authDomain: "coral-antonym-291421.firebaseapp.com",
  projectId: "coral-antonym-291421",
  storageBucket: "coral-antonym-291421.appspot.com",
  messagingSenderId: "744249142886",
  appId: "1:744249142886:web:df6179720f74d3649e47a7",
  measurementId: "G-K28BWFTX98"
};
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);