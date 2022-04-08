
//ADD YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyClOtR7JWPjBJp0QrG-T07uEYfJSQuGQFM",
    authDomain: "praticeclass-8d16d.firebaseapp.com",
    databaseURL: "https://praticeclass-8d16d-default-rtdb.firebaseio.com",
    projectId: "praticeclass-8d16d",
    storageBucket: "praticeclass-8d16d.appspot.com",
    messagingSenderId: "466192706962",
    appId: "1:466192706962:web:21a464f5f7b7067b9a654b",
    measurementId: "G-2EV5E0ZDSG"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
     purpose : "adding user"
    });
}