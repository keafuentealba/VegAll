window.localStorage

function saveComment() {
  if ((document.getElementById("comment").value === ""));
  else {
    let name = document.getElementById("name").value;
    let comment = document.getElementById("comment").value;
    localStorage.setItem(name, comment);

    //En este punto guardo nombre y comentario en mi local storage
  }
}
///////////////////////////////////////
//creo constante para llamar al boton "btn"
const boton = document.getElementById("btn");
//pongo algo para que cuando hagan click haga lo siguiente...
boton.addEventListener("click", () => {
  //creo una variable para dejar lo que se introdujo en el textarea
  let comments = document.getElementById("comment").value;
  //limpio lo que habia en la caja de texto
  document.getElementById("comment").value = "";
  //llamo a un  elemnto que vive en html para que sea padre de lo siguente que hare en JS

  if (comments.length === 0 || comments === null) {
    alert("Debes ingresar un mensaje");
    return false;
  }

  const cont = document.getElementById("cont");
  //creo un elemento en JS

  localStorage.setItem('name', 'comment');
  const newComment = document.createElement("div");




  //creo un checkbox: un elemtno y le doy un atributo
  const chck = document.createElement("input");
  //le indico el tipo de elemento que es
  chck.type = "checkbox";
  // creo el corazon con fontawesome
  const heart = document.createElement("i");
  //le paso clase al elemento desde el DOM via classslists(ahi puedo hacer miuchas clases)
  heart.classList.add("fa", "fa-heart", "heart");
  // hago lo mismo para el basurero
  const trash = document.createElement("i");

  trash.classList.add("fa", "fa-trash", "trash");
  //creo un elemetno
  const contenedorElemento = document.createElement("p");
  //le digo que es un texto
  let textNewComment = document.createTextNode(comments);
  //llamo al parrafo que es la familia directa de ese elemento
  contenedorElemento.appendChild(textNewComment);
  //entrego los hijos a sus papas que estan en html
  newComment.appendChild(chck);
  newComment.appendChild(heart);
  newComment.appendChild(trash);
  newComment.appendChild(contenedorElemento);
  cont.appendChild(newComment);

  //para poner el corazon rojo
  heart.addEventListener("click", () => {
    heart.classList.toggle("red")//se llama red por el nombre de la clase no por el color que yo quiero que se ponga
  }),

    trash.addEventListener("click", () => {
      alertify.confirm("¿Está seguro que quiere eliminar el comentario?",

        function () {
          alertify.success('Ok');
          cont.removeChild(newComment);//borro el mensaje nuevo
        },
        function () {
          alertify.error('Cancel');
        }
      );
    })

  chck.addEventListener("click", () => {
    contenedorElemento.classList.toggle("strike-out");
  })
})