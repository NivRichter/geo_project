import Firebase from "firebase";

const config = {

    apiKey: "AIzaSyBHf0Ov6I_tkRSZUFnfvw01i2KhRFDmEQ8",
    authDomain: "bgu-project.firebaseapp.com",
    databaseURL: "https://bgu-project-default-rtdb.firebaseio.com",
    projectId: "bgu-project",
    storageBucket: "bgu-project.appspot.com",
    messagingSenderId: "611454908155",
    appId: "1:611454908155:web:7ba6cc379c1c1e82e0a25e",
    measurementId: "G-9P4GYD0677"
      
 }

//!firebase.apps.length ? firebase.initializeApp(config) : null;
const app = Firebase.initializeApp(config);
export const db = app.database();
