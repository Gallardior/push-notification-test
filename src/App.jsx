import { useEffect } from "react";

import { Header } from "./components/Header"

// Firebase
import { getToken, onMessage } from "firebase/messaging"
import { getAuth, signInAnonymously } from "firebase/auth"

import { messaging } from "./services/firebase";

// React Toastify
import { ToastContainer, toast } from 'react-toastify';

import "./css/index.css"
import 'react-toastify/dist/ReactToastify.css';

const API_KEY = 'BPBLs2BlLIzn3GboCNvo5q3TqKOdOzHS-CLKg53no7T3S0Hmk8aJ6CqQS4UZTq2byzWtsjtp-L2z3XL3uKEwTgM'
function App() {

  const login = () => {
    signInAnonymously(getAuth())
      .then(user => 
        toast("Logueado con exito!!!")  
      )
      .catch(error => console.info(error))
  }

  const activateMessages = async () => {
    const token = await getToken(messaging, {
      vapidKey: API_KEY
    })
      .catch("Error al generar el token")

    if(token) console.log("Token:", token)
    if(!token) console.log("No hay token")
  }

  useEffect( () => {
    onMessage(messaging, (message) => {
      toast(message.notification.title)
    })

    activateMessages()
  }, [])

  return <>
    <Header />
    <div className="p-8 flex items-center justify-center flex-col gap-5">
      <h1 className="font bold text-2xl">Title</h1>
      <div className="flex items-center gap-4">
        <button onClick={login} className="text-lg text-purple-700 p-4 px-6 rounded-md bg-purple-700 bg-opacity-20 hover:bg-opacity-30 font-medium transition-all">
          Login
        </button>
      </div>
    </div>
  </>
}

export default App