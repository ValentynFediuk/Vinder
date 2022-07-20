import MainLayout from "./layouts/MainLayout";

import firebase from 'firebase/compat/app';

const App = () => {
    firebase.initializeApp({
        apiKey: "AIzaSyAx_fzJvBBO21xuXIc73Up3Y_JHat70Jnw",
        authDomain: "vinder-c2b5e.firebaseapp.com",
        projectId: "vinder-c2b5e",
        storageBucket: "vinder-c2b5e.appspot.com",
        messagingSenderId: "1072137088222",
        appId: "1:1072137088222:web:de735061e20d8da4a5664f"
    });
    return (
        <MainLayout/>
    );
};

export default App;