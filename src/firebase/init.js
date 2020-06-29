import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyBuhKgEjvQqJ3H1rgxoCkeDU5406meQcxU",
authDomain: "falconaro-login.firebaseapp.com",
databaseURL: "https://falconaro-login.firebaseio.com",
projectId: "falconaro-login",
storageBucket: "falconaro-login.appspot.com",
messagingSenderId: "61208069810",
appId: "1:61208069810:web:64d9ffd2fdd0b36ead2bab"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();