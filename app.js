firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    document.getElementById("user").style.display = "block";
    document.getElementById("login").style.display = "none";

    let user = firebase.auth().currentUser;

    if(user != null){
      let idEmail = user.email;
      document.getElementById("usertext").innerHTML = "welcome user : " + idEmail;
    }

  } else {
    document.getElementById("user").style.display = "none";
    document.getElementById("login").style.display = "block";
  }
});

window.login = () => {
  let login = document.getElementById("staticEmail").value;
  let password = document.getElementById("inputPassword").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch((error) => {

    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;

  window.alert("error : " + errorMessage);
  // ...
});
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;

};
const logOut = () => {
  firebase.auth().signOut();
};
