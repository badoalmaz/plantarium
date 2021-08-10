import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyAmn0zdpaCWtJP73RBLjvQs2wjhhZRTqzY",
  authDomain: "comments-2f076.firebaseapp.com",
  projectId: "comments-2f076",
  storageBucket: "comments-2f076.appspot.com",
  messagingSenderId: "42193922436",
  appId: "1:42193922436:web:efd18556eadc915268d5d1",
};

const fireComments = firebase.initializeApp(firebaseConfig);

export default fireComments;
