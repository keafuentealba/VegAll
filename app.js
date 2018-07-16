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
window.facebookLogin = () => {

  let provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithRedirect(provider);
    firebase.auth().getRedirectResult().then(function(result) {
      if (result.credential) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      let token = result.credential.accessToken;
      // ...
    }
    // The signed-in user info.
    let user = result.user;
  }).catch((error) => {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    // The email of the user's account used.
    let email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    let credential = error.credential;
    // ...
  });
};

window.googleLogin = () => {
  let provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider);
  firebase.auth().getRedirectResult().then((result) => {
    
    if (result.credential) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      let token = result.credential.accessToken;
      // ...
    }
    // The signed-in user info.
    let user = result.user;
  }).catch((error) => {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    // The email of the user's account used.
    let email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    let credential = error.credential;
    // ...
  });
};

const logOut = () => {
  firebase.auth().signOut();
};
