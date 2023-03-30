let nombresCompletos = false;
let nombreJug1Completo = false;
let reinicioJuego = false;
let reinicio = "";


function saludar (){
    alert("Bienvenido a 4 en linea. Se necesitan 2 jugadores para poder jugar")
    console.log("Bienvenido a 4 en linea.");
    pedirNombre();
}


let Jug1 = {
    nombre: "",
    color: "lightgreen",
}
let Jug2 = {
    nombre: "",
    color: "Red",
    }

function pedirNombre (){
    while(!nombresCompletos){
        if (Jug1.nombre != "" ){
            nombreJug1Completo = true
            Jug2.nombre = prompt("Ingrese nombre del segundo jugador")
            if(Jug2.nombre != "" && nombreJug1Completo == true){
                alert("Bienvenidos jugadores " + Jug1.nombre + " y " + Jug2.nombre + " se les asignaron sus colores:\n" + Jug1.nombre +  " = Verde\n" + Jug2.nombre + " = Azul")
                nombresCompletos = true 
            }
        } else {
            Jug1.nombre = prompt("Ingrese nombre del primer jugador")
        }
    }
}
saludar();

console.log(Jug1.nombre + " sos el jugador Verde");
console.log(Jug2.nombre + " sos el jugador Azul");

// || boton.style.backgroundColor == "white"
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
        alert("Felicitaciones " + (color == Jug1.nombre ? Jug1.nombre:Jug2.nombre) + " usted es el ganador de esta partida")
        console.log("Felicitaciones " + (color == Jug1.nombre? Jug1.nombre:Jug2.nombre) + " usted es el ganador de esta partida");
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
    console.log("Su juego ha sido reiniciado");
}










