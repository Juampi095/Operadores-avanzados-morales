//Entrega Final Morales
let carrito = [];//[] significa array vacio
if (localStorage.getItem("carrito") != null) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
}
let lista = document.getElementById("milista");

//llamada a renderizar
renderizarProductos();

function renderizarProductos() {
    for (const producto of productos) {
        lista.innerHTML += `<li class="col-sm-3 list-group-item">
            
            <img src=${producto.foto} width="260" height="200">
            <p> Marca: ${producto.marca}</p>
            <p> Modelo: ${producto.modelo}</p>
            <p><strong> $ ${producto.precio} </strong></p>
            <button class='btn btn-danger' id='btn${producto.id}'>Comprar</button>
        </li>`;
    }

    //eventos boton
    productos.forEach(producto => {
        //evento para cada boton
        document.getElementById(`btn${producto.id}`).addEventListener('click', function () {
            agregarAlCarrito(producto);
        });
    });

}
//funcion agregar al carrito
function agregarAlCarrito(producto) {
    carrito.push(producto);
    console.log(carrito);
    //agrego una fila nueva a la tabla "tablabody"
    document.getElementById("tablabody").innerHTML += `
    <tr>
      <td>${producto.marca}</td>
      <td>${producto.modelo}</td>
      <td>$ ${producto.precio}</td>
      <td> ${producto.total}</td>
      
    </tr>
    `;
    alert(producto.marca + producto.modelo + " agregado al carrito correctamente!");
    localStorage.setItem("Carrito", JSON.stringify(carrito));
}
//TOTAL CARRITO
function calcularTotalCarrito() {

    let total = 0;

    for (const producto of carrito) {

        total += producto.precio;

    }
}

//TERNARIO JS
let stockAutos = 15;
let auto = "Pagani";
let stock = stockAutos < 20 ? (auto == "Pagani" ? "Tenemos en stock la cantidad solicitada" : "No tenemos en stock la cantidad solicitada") : "No tenemos stock disponible";
alert(stock);


// TERNARIO 2
// let stockAutos;
// DOM
// const botonBusqueda=document.getElementById("botonBusqueda");
// const marcaIngresada=document.getElementById("marcaIngresada");
// const modeloIngresado=document.getElementById("modeloIngresado");
// const resultado=document.getElementById("resultado");
// botonBusqueda.onclick=()=>{
//     marcaIngresada.nombre=stockAutos;
//     modeloIngresado.modelo=stockAutos;
//     let stock=stockAutos>20 ? (auto=="Pagani" ? resultado.innerText="Tenemos en stock la cantidad solicitada" : resultado.innerText="No tenemos en stock la cantidad solicitada"): innerText="No tenemos stock disponible";

// }

//SPREAD
const autos=["Pagani","Lamborghini,","Ferrari"]
const impresionValores=(...valores)=>{
    console.log(valores);
}
impresionValores("Pagani","Lamborghini,","Ferrari");


