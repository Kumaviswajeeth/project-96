//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyCccfwafHXnuMPLua2ZW-wfU4_8yI0UyOY",
      authDomain: "classtest-810a8.firebaseapp.com",
      databaseURL: "https://classtest-810a8-default-rtdb.firebaseio.com",
      projectId: "classtest-810a8",
      storageBucket: "classtest-810a8.appspot.com",
      messagingSenderId: "557542276095",
      appId: "1:557542276095:web:a3accb02dc2f73bf9e45ca",
      measurementId: "G-QL5YV80MMZ"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

   function send()
   {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
   }
     
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
 
function logout() 
{ 
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name"); 
      window.location.replace("kwitter.html"); 
}