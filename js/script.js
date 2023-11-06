function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function rand(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

function aleatorio() {

    var num = rand(0, 8);

    return num
}

let pokemons = ["am","ar","bel","elc","gas","gya","kro","ray","vol"]

document.querySelector(".shadowImage").innerHTML = `                     <div id="shadowImages">
<img src="img/shadow/${pokemons[aleatorio()]}.png" alt="pokemon" id="drag" width="400px" height="300px">
</div>
<div id="shadowImage" ondrop="drop(event)" ondragover="allowDrop(event)"></div>`