let contador = 0;
let miTimer = null;

function ejemploTimeout() {
    document.getElementById('mensaje1').textContent = 'Esperando 2 segundos...';
    
    setTimeout(function() {
        document.getElementById('mensaje1').textContent = '¡Apareció después de 2 segundos!';
    }, 2000);
}

function toggleContador() {
    let boton = document.getElementById('botonContador');
    let contadorElemento = document.getElementById('contador');
    
    if (miTimer === null) {
        contador = 0;
        contadorElemento.textContent = contador;
        contadorElemento.style.display = 'block';
        boton.textContent = 'Parar contador';
        
        miTimer = setInterval(function() {
            contador++;
            contadorElemento.textContent = contador;
        }, 1000);
    } else {
        clearInterval(miTimer);
        miTimer = null;
        boton.textContent = 'Empezar contador';
    }
}
