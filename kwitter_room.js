var firebaseConfig = {
  apiKey: "AIzaSyA-XP-s2-6ZGEFSE89-Qlp4wjHP6StsLLc",
  authDomain: "kwitter-page-406b1.firebaseapp.com",
  databaseURL: "https://kwitter-page-406b1-default-rtdb.firebaseio.com",
  projectId: "kwitter-page-406b1",
  storageBucket: "kwitter-page-406b1.appspot.com",
  messagingSenderId: "921597410479",
  appId: "1:921597410479:web:e665233c31450c02fea85a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";
function addRoom() {
room_name = document.getElementById('room_name').value;
firebase.database().ref("/").child(room_name).update({
purpose : "To Kweet"
});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html"; 
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
Room_names = childKey;
console.log("roomname = " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row; 
});});}
getData();
function redirectToRoomName(name) {
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html"
}
function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html"
}