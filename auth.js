import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC4X9HvKxKIoTNxcLm3BuQf9NkjnqhcL-o",
  authDomain: "cvbuilder-65b7e.firebaseapp.com",
  projectId: "cvbuilder-65b7e",
  storageBucket: "cvbuilder-65b7e.appspot.com",
  messagingSenderId: "457785442342",
  appId: "1:457785442342:web:e74d77594fe3ba6da2a6e7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function register() {
  const name = document.getElementById("nameField").value;
  const registerEmail = document.getElementById("registerEmailField").value;
  const registerPassword = document.getElementById("registerPasswordField").value;

  createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
    .then((user) => {
      user.displayName = name;
      alert("User registration successful");
      window.location.href = "/resume.html";
    })
    .catch((error) => {
      alert(error.message);
    });
}

function login() {
  const loginEmail = document.getElementById("loginEmailField").value;
  const loginPassword = document.getElementById("loginPasswordField").value;

  signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((user) => {
    window.location.href = "/resume.html";
  })
  .catch((error) => {
    alert(error.message);
  });
}

document.getElementById("registerBtn").addEventListener("click", register);
document.getElementById("loginBtn").addEventListener("click", login);
