
//ADD YOUR FIREBASE LINKS HERE
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
document.getElementById("user_name").innerHTML = "Welcome" +
user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
      });
      
      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id"+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName( name )
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
