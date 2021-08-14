import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyC4KhYzKwyoAnsWPoKfTlFJp5a3Cd3pnPk",
	authDomain: "my-resume-f4339.firebaseapp.com",
	projectId: "my-resume-f4339",
	storageBucket: "my-resume-f4339.appspot.com",
	messagingSenderId: "696880760127",
	appId: "1:696880760127:web:88a4e3b6d78a8e421d7f8a",
});

var db = firebaseApp.firestore();

export { db };
