//YOUR FIREBASE LINKS

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
    room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      var msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push(
            {
                  name : user_name,
                  message : msg,
                  like : 0
            }
      );
      document.getElementById("msg").value = "";
}