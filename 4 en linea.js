
let nombresCompletos = false;
let nombreJug1Completo = false;
let reinicioJuego = false;
let reinicio = "";

const titulo = document.getElementById("titulo");
titulo.innerText = "4 en linea";



let Jug1 = {
    nombre: document.getElementById("player1"),
    color: "lightgreen",
}
let Jug2 = {
    nombre: document.getElementById("player2"),
    color: "Red",

    }

// Local Storage - Jugadores
localStorage.setItem("Jugador 1",JSON.stringify(Jug1));
let primerJugador = JSON.parse(localStorage.getItem("Jugador 1"));

localStorage.setItem("Jugador 2",JSON.stringify(Jug2));
let segundoJugador = JSON.parse(localStorage.getItem("Jugador 2"));

// Session Storage - Jugadores
sessionStorage.setItem('Jugador 1', "Ale")
sessionStorage.setItem('Jugador 2', "Pepe")

function empezarJuego() {
    
    let player1 = document.getElementById('player1').value;
    let player2 = document.getElementById('player2').value;
    
    document.getElementById('player1Name').innerHTML = player1;
    document.getElementById('player2Name').innerHTML = player2;
    console.log(player1);
    presionarBoton();
    return false;
}

let turno = 0;
let tablero = [];
let juegoFinalizado = false;

const presionarBoton = (press, pos) =>{
    const boton = press.target;
    let color = ""
    if(boton.style.backgroundColor == ""){
        turno ++;
        color = turno % 2 ? Jug1.color : Jug2.color
        boton.style.backgroundColor = color;
        tablero[pos] = color;
    }
    if (ustedGano() && !juegoFinalizado){
        juegoFinalizado = true;
    }
}

const ustedGano = () => {
    //Derecha a Izquierda
    if(tablero[0] == tablero[1] && tablero[0] == tablero[2] && tablero [0] == tablero[3] && tablero[0]){
        return true;
    }else if(tablero[1] == tablero[2] && tablero[1] == tablero[3] && tablero [1] == tablero[4] && tablero[1]){
        return true;
    } else if(tablero[5] == tablero[6] && tablero[5] == tablero[7] && tablero [5] == tablero[8] && tablero[5]){
        return true;
    } else if(tablero[6] == tablero[7] && tablero[6] == tablero[8] && tablero [6] == tablero[9] && tablero[6]){
        return true;
    }else if(tablero[10] == tablero[11] && tablero[10] == tablero[12] && tablero [10] == tablero[13] && tablero[10]){
        return true;
    }else if(tablero[11] == tablero[12] && tablero[11] == tablero[13] && tablero [11] == tablero[14] && tablero[11]){
        return true;
    } else if(tablero[15] == tablero[16] && tablero[15] == tablero[17] && tablero [15] == tablero[18] && tablero[15]){
        return true;
    } else if(tablero[16] == tablero[17] && tablero[16] == tablero[18] && tablero [16] == tablero[19] && tablero[16]){
        return true;
    // Arriba a Abajo
    }  else if(tablero[0] == tablero[5] && tablero[0] == tablero[10] && tablero [0] == tablero[15] && tablero[0]){
    return true;
    } else if(tablero[1] == tablero[6] && tablero[1] == tablero[11] && tablero [1] == tablero[16] && tablero[1]){
        return true;
    }else if(tablero[2] == tablero[7] && tablero[2] == tablero[12] && tablero [2] == tablero[17] && tablero[2]){
        return true;
    } else if(tablero[3] == tablero[8] && tablero[3] == tablero[13] && tablero [3] == tablero[18] && tablero[3]){
        return true;
    }  else if(tablero[4] == tablero[9] && tablero[4] == tablero[14] && tablero [4] == tablero[19] && tablero[4]){
        return true;
    //Diagonales
    } else if(tablero[0] == tablero[6] && tablero[0] == tablero[12] && tablero [0] == tablero[18] && tablero[0]){
        return true;
    }else if(tablero[1] == tablero[7] && tablero[1] == tablero[13] && tablero [1] == tablero[19] && tablero[1]){
        return true;
    } else if(tablero[3] == tablero[7] && tablero[3] == tablero[11] && tablero [3] == tablero[15] && tablero[3]){
        return true;
    }  else if(tablero[4] == tablero[8] && tablero[4] == tablero[12] && tablero [4] == tablero[16] && tablero[4])
        return true;
}

document.querySelectorAll('button').forEach((obj, i) => obj.addEventListener('click', (press) => presionarBoton(press, i)));

function reiniciarBtn(){
    reinicio = prompt("Seguro que quiere reiniciar el juego? S/N")
    if (reinicio == "S" || reinicio == "s"){
        reinicioJuego = true
        tablero = [];
        document.querySelectorAll('button').forEach((press, i) => {press.style.backgroundColor = "white"; press.style.backgroundColor = "" })
        ustedGano();
    }
}






