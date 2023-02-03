importScripts('https://www.gstatic.com/firebasejs/9.17.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/9.17.0/firebase-messaging-compat.js')

const firebaseConfig = {
  apiKey: "AIzaSyBlf-dnfksL56dIj7YvcOYTMIlqVBoIxD0",
  authDomain: "push-notification-test-bb30c.firebaseapp.com",
  projectId: "push-notification-test-bb30c",
  storageBucket: "push-notification-test-bb30c.appspot.com",
  messagingSenderId: "377029785759",
  appId: "1:377029785759:web:56018442b107d8f5144aaa",
  measurementId: "G-L63030Z6L1"
};

const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app);

messaging.onBackgroundMessage(payload => {
  console.log("Recibiste un mensaje mientras estabas ausente")
  console.log(payload)

  const notificationTitle = payload.notification.title
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/logo.svg'
  }

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  )
})