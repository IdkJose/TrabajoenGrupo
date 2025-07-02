// Usando setTimeout
function iniciarTimeout() {
    document.getElementById("mensaje").textContent = "Espera 3 segundos...";
    setTimeout(() => {
        document.getElementById("mensaje").textContent = "¡Han pasado 3 segundos!";
    }, 3000);
}

// Usando setInterval
let contador = 0;
let intervaloID = null;

function iniciarIntervalo() {
    if (intervaloID === null) {
        intervaloID = setInterval(() => {
            contador+1;
            document.getElementById("contador").textContent = `Contador: ${contador}`;
        }, 1000);
    }
}

function detenerIntervalo() {
    clearInterval(intervaloID);
    intervaloID = null;
    document.getElementById("contador").textContent += " (Intervalo detenido)";
}
