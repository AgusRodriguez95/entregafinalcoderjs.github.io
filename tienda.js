
Toastify({
  text: "GRACIAS POR VISITAR MI WEB",
  className: "info",
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
    duration: 6000,
  }}).showToast();


let llamodivNav = document.getElementById("nav");

let creonav = document.createElement("nav");

creonav.classList.add("navbar", "navbar-expand-lg", "navbar-light","bg-mio");

creonav.innerHTML = `
<div class="container-fluid">
  <a class="navbar-brand marcachiquita" href="#"><img src="./imagenes/logo.png"></a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
       
      </li>
     
  
    </ul>
  </div>
</div>`;

llamodivNav.appendChild(creonav);






















const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToCartButton) => { addToCartButton.addEventListener('click', addToCartClicked) });

const shoppingCartItemsContainer = document.querySelector('.shoppingCartItemsContainer');

function addToCartClicked(event) {
  const button = event.target;
  const item = button.closest('.item');

  const itemTitle = item.querySelector('.item-title').textContent;
  const itemPrice = item.querySelector('.item-price').textContent;
  const itemImage = item.querySelector('.item-image').src;

  addItemToShoppingCart(itemTitle, itemPrice, itemImage);
}


function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
  const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
    'shoppingCartItemTitle'
  );
  for (let i = 0; i < elementsTitle.length; i++) {
    if (elementsTitle[i].innerText === itemTitle) {
      let elementQuantity = elementsTitle[i].parentElement.parentElement.parentElement.querySelector('.shoppingCartItemQuantity');
      elementQuantity.value++;
      $('.toast').toast('show');
      updateShoppingCartTotal();
      return;
    }
  }


  const shoppingCartRow = document.createElement('div');
  const shoppingCartContent = `
    <div class="row shoppingCartItem">
          <div class="col-6">
              <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                  <img src=${itemImage} class="shopping-cart-image">
                  <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
              </div>
          </div>
          <div class="col-2">
              <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                  <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
              </div>
          </div>
          <div class="col-4">
              <div
                  class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                  <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                      value="1">
                  <button class="btn btn-danger buttonDelete" type="button">X</button>
              </div>
          </div>
      </div>`;
  shoppingCartRow.innerHTML = shoppingCartContent;
  shoppingCartItemsContainer.append(shoppingCartRow);

  shoppingCartRow.querySelector('.buttonDelete').addEventListener('click', removeShoppingCartItem);
  shoppingCartRow.querySelector('.shoppingCartItemQuantity').addEventListener('change', (quantityChanged))


  updateShoppingCartTotal();
}

function updateShoppingCartTotal() {
  let total = 0;
  const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

  const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');


  shoppingCartItems.forEach((shoppingCartItem) => {
    const shoppingCartItemPriceElement = shoppingCartItem.querySelector('.shoppingCartItemPrice');
    const shoppingCartItemPrice = Number(
      shoppingCartItemPriceElement.textContent.replace('$', '')
    );
    const shoppingCartItemQuantityElement = shoppingCartItem.querySelector('.shoppingCartItemQuantity');
    const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value);
    total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
  });
  shoppingCartTotal.innerHTML = `${total.toFixed(2)}$`;
}

function removeShoppingCartItem(event) {
  const buttonClicked = event.target;

  buttonClicked.closest('.shoppingCartItem').remove();
  updateShoppingCartTotal();
}

function quantityChanged(event) {
  const input = event.target;
  input.value <= 0 ? (input.value = 1) : null
  updateShoppingCartTotal();

}
let trajeboton = document.getElementById("botonpls");


let ejecucion = trajeboton.onclick = () => (queproducto3());





function queproducto3() {
  const preguntaenvio = prompt("Queres recibir el producto en la ciudad autonoma de Buenos Aires?")
  if (preguntaenvio === "si") {
    Swal.fire(
      'El envio es de $500!',
      'este monto lo pagaras cuando retires el producto en la sucursal mas cercana',
      'info');
  } else if (preguntaenvio === "no") {
    Swal.fire(
      'El envio es de $2500, ya que no te encontras en la capital',
      'este monto lo pagaras cuando retires el producto en la sucursal mas cercana',
      'info')
  } else {
    Swal.fire(
      'Respuesta invalida',
      'porfavor, responde con "si" o con "no".',
      'error'
    )

  }




}



function queproducto() {
  let pregunta1 = prompt("escribi la ciudad en la que queres enviar el producto").toLowerCase
  if (pregunta1 == "baires" && "ciudad de buenos aires" && "ciudaddebuenosaires" && "buenos aires" &&
    "buenosaires" && "caba" && "capital federal" && "capitalfederal" && "capital" && "ciudad autonoma de buenos aires"
    && "ciudadautonomadebuenosaires") {
    Swal.fire(
      'El envio es de $500!',
      'este monto lo pagaras cuando retires el producto en la sucursal mas cercana',
      'info'
    )
  }
  else if (pregunta1 == " ") {
    Swal.fire(
      'no agregaste nada',
      'porfavor, escribi una ciudad para saber el costo de envio',
      'error'
    )

  }

  else {
    Swal.fire(
      'El envio es de $2500, ya que no te encontras en la capital',
      'este monto lo pagaras cuando retires el producto en la sucursal mas cercana',
      'info')
  }
}




let enter = document.getElementById("login")
let formulario = document.createElement("form")
formulario.innerHTML = `<section class="customer" id="customer" class"container>
 <div class"row">
  <h2>Ingrese sus datos</h2>
  <div class="col-md-4">
  
    <div class="form">
      
        <label for="name" class="form-label">Nombre</label>
        <input class="field form-control" type="text" name="name" id="name">
        
        <label for="age " class="form-label"> Edad</label>
        <input class="field form-control" type="text" name="age" id="age">

        <label for="email" class="form-label "> Email</label>
        <input class="field form-control" type="text" name="email" id="email">

        <label for="password" class="form-label"> Contraseña</label>
        <input class="field form-control" type="text" name="password" id="password">
      </div>
      
  
        <button type="button" class="btn btn-outline-primary" id="mandamecha">enviar</button>
        
    
    </div>
  </div>
 </div>

</section>`

enter.appendChild(formulario)

let thisisaButon = document.getElementById("mandamecha");
thisisaButon.addEventListener("click", loadClient);

function loadClient() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let client1 = new Client(name, age, email, password);
  console.log(client1);
  showclient(client1);

}




class Client {
  constructor(name, age, email, password) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.pasword = password;
  }
}



function adult() {
  let age = localStorage.getItem("age");
  if (age == null) {
    age = prompt("ingrese su edad");
  }
  localStorage.setItem("age", age);
  if (age < 18) {
    alert("Sos mayor de edad, podes comprar en la tienda, Bienvenido!!");
    return false;
  }
  else if (age > 18) {
    alert("Necesitas ser mayor de edad para comprar en mi tienda :( ")
    return true

  }
  else { alert("respuesta invalida, ingresa el tu edad") }
}
adult();


function showclient(client) {
  let form = document.getElementById("customer");
  form.innerHTML = "";
  let newContent = document.createElement("div");
  newContent.innerHTML = `gracias ${client.name} ,sus datos seran enviados a ${client.email}`;
  newContent.className = "btn-primary";
  document.body.appendChild(newContent);
  Swal.fire(newContent)
}







function loadClient() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let client1 = new Client(name, age, email, password);
  console.log(client1);
  showclient(client1);

}

//creo un objeto constructor//
const dibujo1 = {
  number: "Votaste ilustración 1",
  price: 400,
  RTCSessionDescription: "chica sentada en parada de tren",
}
const dibujo2 = {
  number2: "vostaste ilustración 2",
  price2: 800,
  RTCSessionDescription: "chica con colores de invierno",
}



const { number, price } = dibujo1

const { number2, price2 } = dibujo2

let dibujoo1 = document.getElementById("dibujo1");
let dibujoo2 = document.getElementById("dibujo2");

dibujoo1.addEventListener("click", dibujoUno)
dibujoo2.addEventListener("click", dibujoDos)


function dibujoUno() {
  Swal.fire({
    icon: 'success',
    title: 'Nice',
    text: (number),
    
  });
}


function dibujoDos() {
  Swal.fire({
    icon: 'success',
    title: 'nice.',
    text: (number2),
    
  })

    ;
}


//spread

const masvistas = ["ilustración 4", "ilustración 1"]

const masvendidas = ["ilustración 6", "ilustración 2"]

const ilusentendencia = [...masvistas]

let tendencia = document.getElementById("tendencia");

tendencia.addEventListener("click", tendencia2)


function tendencia2() {
  for (let index = 0; index < 2; index++) {
    alert(ilusentendencia[index]);
  }
};


const masvendidas2 = [...masvendidas]

let botontendencia = document.getElementById("masvendidas")
botontendencia.addEventListener("click", masvendidas3)

function masvendidas3() {
  for (let index = 0; index < 2; index++) {
    alert(masvendidas2[index]);
  }
};





const lista = document.querySelector('#listado')
fetch('/data.json')
  .then((res) => res.json())
  .then((data) => {
    data.forEach((producto) => {
      const li = document.createElement('li')
      li.innerHTML = `
        <div class="container ">
          <div class= "col-md-6 offset-md-4">
            <div class="offset-md-2">
              <h4 >${producto.nombre}</h4>
              <h4>${producto.precio}</h4>
              <p>Codigo:${producto.id}</p>
            </div>
            <div class= container>
            <div class=column>
              <img class=" col-md-6" src="${producto.imagen}">
            </div >
            </div>
        </div>
        </div>
        
        <div class ="container">
          <div class=" col-md-6 offset-md-4 mt-4">
            <button type="button" id= "botonReservar"class="btn btn-primary" data-bs-toggle="modal" 
            data-bs-target="#exampleModal">reservar</button>
          </div>
        </div>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">WOW!genial que te guste este dibujo🌈</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      Muchas gracias!  
      Contacta con el administrador de la web mia mail para hacer esta reserva!
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        
      </div>
    </div>
  </div>
</div>
                                                  
        <hr/>
        `
      lista.append(li)

    })

  })





  let llamodivfoter = document.getElementById("foter");

  let creofotter = document.createElement("div");
  
 
  
  creofotter.innerHTML = ` <div class="container-fluid fondo">
  </div>
 <p class="d-flex justify-content-center"> Seguime en mis redes</p>
  <div class="row d-flex justify-content-center">
      <div class=" d-flex justify-content-center">
          <a title="Instagram" href="http://www.Instagram.com">
          <img src="./imagenes/instagram.jpg" alt="instagram" height="60px"  width="60px"></a>
          <a title="Instagram" href="http://www.twitter.com">
          <img src="./imagenes/twitter.png" alt="twitter" height="50px"  width="60px"></a>  
                           
      </div>
    

  </div>
</div>

  
`;
  
llamodivfoter.appendChild(creofotter);
  