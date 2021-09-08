/** String, int, bool, array, object*/

let resultado=0; /**Variable con scope global */
function suma(){
    resultado= 10 + 5;
}
suma();
console.log(resultado);

function otra() {
    let numero = 10;
    return numero;
}
console.log(otra());

let nombre= "Julieta";
let apellido="Soich";
let edad= 48; /**Es un string */
let llueve = true; /**Dato booleano */
let participantes=["estu1", "estu2", "estu3", "estu4", "estu5", "estu6", "estu7", "estu8", "estu9", "estu10", "estu11", "estu12"];
for(let a=0; a<participantes.length; a++){
    console.log(participantes[a]);
}
participantes.forEach((part)=>{
    console.log(part)
}); /**Es igual utilizarlo: 
participantes.forEach(part=>console.log(part)); */

function render (){
    let contenedor=document.getElementById('root');
    /**participantes.forEach(part=>contenedor.innerHTML+="<h2>"+part+"</h2>"); */
    participantes.forEach(part=>contenedor.innerHTML+=
        `<div class='card col-3'>
            <img src='./img/descarga.png' class='card-img-top' alt='aquí debería aparecer la imagen'>
            <div class='card-body'>
                <h5 class='card-title'>${part}</h5>
                <p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href='#' class='btn btn-primary'>Go somewhere</a>
            </div>
        </div>`
);
}
render();