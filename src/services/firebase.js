// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBlf-dnfksL56dIj7YvcOYTMIlqVBoIxD0",
  authDomain: "push-notification-test-bb30c.firebaseapp.com",
  projectId: "push-notification-test-bb30c",
  storageBucket: "push-notification-test-bb30c.appspot.com",
  messagingSenderId: "377029785759",
  appId: "1:377029785759:web:56018442b107d8f5144aaa",
  measurementId: "G-L63030Z6L1"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const messaging = getMessaging(app);