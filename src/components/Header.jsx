import {ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


export function Header () {
  return <>
    <header className="bg-purple-700 text-white">
      <div className="container p-4 mx-auto flex items-center justify-between gap-4">
        <h1 className="font-semibold text-2xl">
          <a href="/">Example</a>
        </h1>
        <nav>
          <button className="hidden p-4 px-6 rounded-md bg-white bg-opacity-20 hover:bg-opacity-30 font-medium transition-all">
            Login
          </button>
        </nav>
      </div>
    </header>
    <ToastContainer 
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  </>
}