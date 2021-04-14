

import firebase from 'firebase';

const firebaseapp = firebase.initializeApp(
    {
        apiKey: "AIzaSyCZlccYaIl71oQrc_Qvc8fhr6QIoJO9yXo",
        authDomain: "messanger-clone-ebf8b.firebaseapp.com",
        projectId: "messanger-clone-ebf8b",
        storageBucket: "messanger-clone-ebf8b.appspot.com",
        messagingSenderId: "942394049925",
        appId: "1:942394049925:web:34035756810e2198b9b0ec",
        measurementId: "G-L8YS2VWWFX"
    }
);

const db = firebaseapp.firestore();
export default db;