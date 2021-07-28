
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDM9qkKrc-S-5YdmfKj_il6c1q0pbxlJBM",
    authDomain: "test-1e64e.firebaseapp.com",
    databaseURL: "https://test-1e64e-default-rtdb.firebaseio.com",
    projectId: "test-1e64e",
    storageBucket: "test-1e64e.appspot.com",
    messagingSenderId: "914497802305",
    appId: "1:914497802305:web:1c269518b0a018452676c0",
    measurementId: "G-NZ1C1EDKJP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome"+user_name+"!";
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) 
{document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log("room_name"+Room_names);
        row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log("name");
  localStorage.setItem("room_name", name);
  window.location("kwitter_page.html");
}

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update(
    {
      purpose : "adding room name"
    }
  );
  localStorage.setItem("room_name", room_name);
  window.location("kwitter_page.html");
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location("kwitter.html");
}