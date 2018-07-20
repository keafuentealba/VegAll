firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    document.getElementById("profile").classList.remove("hide");
    document.getElementById("login").classList.add("hide");

    let user = firebase.auth().currentUser;

    if(user != null){
      let idEmail = user.email;
      document.getElementById("usertext").innerHTML = "Bienvenid@ : " + idEmail;
    }

  } else {
    document.getElementById("profile").classList.add("hide");
    document.getElementById("login").classList.remove("hide");
  }
});

window.login = () => {
  let login = document.getElementById("staticEmail").value;
  let password = document.getElementById("inputPassword").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch((error) => {

    
    let errorCode = error.code;
    let errorMessage = error.message;

  window.alert("error : " + errorMessage);

});

    let errorCode = error.code;
    let errorMessage = error.message;

};
window.facebookLogin = () => {

  let provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithRedirect(provider);
    firebase.auth().getRedirectResult().then(function(result) {
      if (result.credential) {

      let token = result.credential.accessToken;

      }

      let user = result.user;
    }).catch((error) => {

      let errorCode = error.code;
      let errorMessage = error.message;

      let email = error.email;

      let credential = error.credential;

    });
};

window.googleLogin = () => {
  let provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider);
  firebase.auth().getRedirectResult().then((result) => {

    if (result.credential) {

      let token = result.credential.accessToken;

    }

    let user = result.user;
  }).catch((error) => {

    let errorCode = error.code;
    let errorMessage = error.message;

    let email = error.email;

    let credential = error.credential;

  });
};

const logOut = () => {
  firebase.auth().signOut();
};

var map = L.map('map').fitWorld();

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
		'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	id: 'mapbox.streets'
}).addTo(map);

function onLocationFound(e) {
	var radius = e.accuracy / 2;

	L.marker(e.latlng).addTo(map)
}

function onLocationError(e) {
	alert(e.message);
}

map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);

map.locate({setView: true, maxZoom: 16});

window.drawPlaces = () => {
	lat = -33.4883118;
	long = -70.5100325;
		var greenIcon = L.icon({
	    iconUrl: 'img/leaf-green.png',
      shadowUrl: 'img/leaf-shadow.png',
      iconSize:     [38, 95],
	    shadowSize:   [50, 64],
	    iconAnchor:   [22, 94],
	    shadowAnchor: [4, 62],
	    popupAnchor:  [-3, -76]
});

	L.marker({lat: -33.4227084, lng: -70.6126471}, {icon: greenIcon}).addTo(map)
		.bindPopup('<b>El Huerto</b><br>Restaurant de comida vegetariana');

  L.marker({lat: -33.4293881, lng: -70.5876901}, {icon: greenIcon}).addTo(map)
		.bindPopup('<b>Aldea Nativa</b><br>Restaurant organico');

  L.marker({lat: -33.4376327, lng: -70.648433}, {icon: greenIcon}).addTo(map)
		.bindPopup('<b>Granero del Goloso</b><br>Restaurant de comida vegetariana');

  L.marker({lat: -33.426641, lng: -70.620451}, {icon: greenIcon}).addTo(map)
		.bindPopup('<b>Adhana</b><br>Restaurant de comida vegetariana');

  L.marker({lat: -33.4374173, lng: -70.6685452,}, {icon: greenIcon}).addTo(map)
		.bindPopup('<b>Govindas Restaurant Vegetariano</b><br>Restaurant de comida vegetariana');

  L.marker({lat: -33.4428964, lng: -70.6682877}, {icon: greenIcon}).addTo(map)
    .bindPopup('<b>Emporio vegetal</b><br>Tienda naturista');

  L.marker({lat: -33.4274609,lng: -70.6334404}, {icon: greenIcon}).addTo(map)
		.bindPopup('<b>La Bodeguita Verde</b><br>Tienda de alimentos naturales');

  L.marker({lat: -33.4322166, lng: -70.6552301}, {icon: greenIcon}).addTo(map)
    .bindPopup('<b>Restaurant Soju Vegano Vegetariano</b><br>Restaurant de comida vegetariana');

  L.marker({lat: -33.4233575, lng: -70.6109175}, {icon: greenIcon}).addTo(map)
    .bindPopup('<b>DellNatura</b><br>Tieneda de articulos naturales');

  L.marker({lat: -33430416, lng: -70630575}, {icon: greenIcon}).addTo(map)
    .bindPopup('<b>Gopal</b><br>Platos vegetarianos');

  L.marker({lat: -33.4428964, lng: -70.6682877}, {icon: greenIcon}).addTo(map)
    .bindPopup('<b>Emporio vegetal</b><br>Tienda naturista');

};

window.changePage = (actual, next) => {
 actual = document.getElementById(actual);
 next = document.getElementById(next);

 actual.classList.add("hide");
 next.classList.remove("hide");

 if(next.id === 'placesOfInterest'){
   map.invalidateSize();
   map.locate({'setView': true});
   drawPlaces();
 }

};
