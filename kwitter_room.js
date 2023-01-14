// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyDm6Fc2I2IeR5eRhoql9-67FpZTXjxJBIs",
      authDomain: "letschat--web-app-1.firebaseapp.com",
      databaseURL: "https://letschat--web-app-1-default-rtdb.firebaseio.com",
      projectId: "letschat--web-app-1",
      storageBucket: "letschat--web-app-1.appspot.com",
      messagingSenderId: "721615844380",
      appId: "1:721615844380:web:ef77b2e6491b8bad285bd9",
      
    };
    
    // Initialize Firebase

user_name = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";

function add_room() {
room_name = document.getElementById("room_name").value;
localStorage.setItem("roomname",room_name);
window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       
      });});}
getData();
