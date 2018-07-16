firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById("user").style.display = "block";
    document.getElementById("login").style.display = "none";
  } else {
    document.getElementById("user").style.display = "none";
    document.getElementById("login").style.display = "block";
  }
});

indow.login = () => {
  let login = document.getElementById("staticEmail").value;
  let password = document.getElementById("inputPassword").value;
};
