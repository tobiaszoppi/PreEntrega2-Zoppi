// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyCKasE7LKdRkscRifOpQL9htjQDi6YxY",
  authDomain: "coderhouse-c68c3.firebaseapp.com",
  projectId: "coderhouse-c68c3",
  storageBucket: "coderhouse-c68c3.appspot.com",
  messagingSenderId: "941098261592",
  appId: "1:941098261592:web:12c85291e7fd5543d8fe2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

